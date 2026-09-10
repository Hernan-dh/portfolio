const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');
const path = require('node:path');

const root = path.join(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function element(dataset = {}) {
  const classes = new Set();
  return {
    dataset, attrs: {}, handlers: {}, textContent: '', value: '',
    setAttribute(name, value) { this.attrs[name] = value; },
    getAttribute(name) { return this.attrs[name]; },
    addEventListener(name, callback) { this.handlers[name] = callback; },
    classList: {
      add(name) { classes.add(name); }, remove(name) { classes.delete(name); },
      toggle(name, enabled) { enabled ? classes.add(name) : classes.delete(name); },
      contains(name) { return classes.has(name); },
    },
  };
}

function load({ language = 'en', storageFails = false } = {}) {
  const selector = element(), button = element(), nav = element(), reveal = element(), themeToggle = element(), themeLabel = element();
  const translated = element({ i18n: 'navProjects' });
  const document = {
    documentElement: element(), handlers: {},
    querySelector(query) {
      return { '#language-selector': selector, '.menu-toggle': button, '.site-nav': nav, '#theme-toggle': themeToggle, '#theme-label': themeLabel }[query] || null;
    },
    querySelectorAll(query) {
      if (query === '.reveal') return [reveal];
      return query === '[data-i18n]' ? [translated] : [];
    },
    addEventListener(name, callback) { this.handlers[name] = callback; },
  };
  const context = vm.createContext({
    document, navigator: { language }, window: {},
    localStorage: {
      getItem() { if (storageFails) throw Error('disabled'); return null; },
      setItem() { if (storageFails) throw Error('disabled'); },
    },
  });
  vm.runInContext(source, context);
  return { context, document, selector, button, nav, reveal, translated, themeToggle, themeLabel };
}

test('all HTML localization keys exist in both languages', () => {
  const { context } = load();
  const translations = vm.runInContext('translations', context);
  for (const match of html.matchAll(/data-i18n(?:-aria-label|-title)?="([^"]+)"/g)) {
    for (const language of ['en', 'es']) assert.ok(translations[language][match[1]], match[1]);
  }
  assert.deepEqual(Object.keys(translations.en).sort(), Object.keys(translations.es).sort());
});

test('Spanish browser selects translated content', () => {
  const app = load({ language: 'es-AR' });
  assert.equal(app.document.documentElement.lang, 'es');
  assert.equal(app.translated.textContent, 'Proyectos');
});

test('unsupported language falls back to English with blocked storage', () => {
  const app = load({ language: 'fr-FR', storageFails: true });
  assert.equal(app.document.documentElement.lang, 'en');
  assert.doesNotThrow(() => vm.runInContext("setLanguage('es', true)", app.context));
  assert.equal(app.document.documentElement.lang, 'es');
});

test('Escape closes the mobile menu and updates accessibility state', () => {
  const app = load();
  app.button.handlers.click();
  assert.equal(app.button.attrs['aria-expanded'], 'true');
  assert.ok(app.nav.classList.contains('open'));
  app.document.handlers.keydown({ key: 'Escape' });
  assert.equal(app.button.attrs['aria-expanded'], 'false');
  assert.equal(app.nav.classList.contains('open'), false);
});

test('content stays visible without IntersectionObserver', () => {
  assert.ok(load().reveal.classList.contains('visible'));
});

test('theme control switches between light and dark modes', () => {
  const app = load();
  app.themeToggle.handlers.click();
  assert.equal(app.document.documentElement.dataset.theme, 'dark');
  assert.equal(app.themeToggle.attrs['aria-pressed'], 'true');
  assert.equal(app.themeLabel.textContent, 'Light mode');
});
