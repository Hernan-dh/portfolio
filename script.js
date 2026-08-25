const translations = {
  en: {
    metaDescription: "Hernán de Haro's portfolio: automation, IoT, infrastructure, research, and information systems.", skipLink: 'Skip to content', openMenu: 'Open menu', mainNavigation: 'Main navigation', navProjects: 'Projects', navProfile: 'Profile', navContact: 'Contact', languageLabel: 'Language', languageSelector: 'Language selector', introIndex: '01 / Introduction', introRole: 'Technical generalist and analytical researcher.', introText: 'I work with automation, monitoring, infrastructure, and information organization. This site brings together some of my projects and the experience that connects them.', location: 'Buenos Aires, Argentina · 2026', visualLabel: 'Main portfolio areas', projectsIndex: '02 / Projects', projectsTitle: 'Selected work', projectsIntro: 'Current technical projects documented through their problem, decisions, and outcome.', twinKind: 'Applied AI · 2026', twinDescription: 'A bilingual web assistant that represents my professional profile and answers questions about my experience, skills, and projects.', twinDetails: 'The system builds its context from a professional summary and résumé. When a conversation requires follow-up, it can record contact details or report a question it could not answer.', roleLabel: 'Role', twinRole: 'Design, development, and documentation', technologiesLabel: 'Technologies', statusLabel: 'Status', twinStatus: 'Functional prototype', twinOnline: 'Agentic Twin / online', openFullscreen: 'Open fullscreen ↗', iframeTitle: "Hernán de Haro's Agentic Twin", greenhouseKind: 'Automation and IoT · In progress', greenhouseTitle: 'Greenhouse monitoring', greenhouseDescription: 'A monitoring and automation system for daily greenhouse operations. It integrates sensors, pumps, cameras, alerts, and data logging.', greenhouseDetails: 'The goal is to consolidate scattered information, detect problems quickly, and build infrastructure that can be maintained and expanded.', areasLabel: 'Areas', greenhouseAreas: 'IoT, operations, and infrastructure', greenhouseStatus: 'Active implementation', monitorLabel: 'Conceptual greenhouse monitoring example', monitorState: 'GREENHOUSE / STATUS', operational: 'OPERATIONAL', temperature: 'Temperature', humidity: 'Humidity', pump: 'Pump', alerts: 'Alerts', chartLabel: 'Illustrative chart', profileIndex: '03 / Profile', profileTitle: 'Background and approach', profileOne: 'I am a technical generalist with education and experience in information science, technical writing, QA, business development, and small-studio operations.', profileTwo: 'My current work focuses on greenhouse automation, IoT monitoring, Linux, operational data, and AI-based tools.', profileThree: 'I am interested in understanding how a system is organized, what information is needed to observe it, and how to document it so other people can work with it.', workAreas: 'Areas of work', areaAutomation: 'Automation and monitoring', areaInfrastructure: 'Linux and Docker infrastructure', areaData: 'Python and data workflows', areaResearch: 'Research and classification', areaQa: 'QA and technical documentation', areaOperations: 'Communication and operations', contactIndex: '04 / Contact', contactTitle: 'Contact', contactText: 'You can find my public projects and technical activity on GitHub.', footerLocation: 'Buenos Aires, Argentina'
  },
  es: {
    metaDescription: 'Portfolio de Hernán de Haro: automatización, IoT, infraestructura, investigación y sistemas de información.', skipLink: 'Saltar al contenido', openMenu: 'Abrir menú', mainNavigation: 'Navegación principal', navProjects: 'Proyectos', navProfile: 'Perfil', navContact: 'Contacto', languageLabel: 'Idioma', languageSelector: 'Selector de idioma', introIndex: '01 / Introducción', introRole: 'Generalista técnico e investigador analítico.', introText: 'Trabajo con automatización, monitoreo, infraestructura y organización de información. Este sitio reúne algunos de mis proyectos y el recorrido que los conecta.', location: 'Buenos Aires, Argentina · 2026', visualLabel: 'Áreas principales del portfolio', projectsIndex: '02 / Proyectos', projectsTitle: 'Trabajo seleccionado', projectsIntro: 'Proyectos técnicos actuales, documentados a partir del problema, las decisiones y el resultado.', twinKind: 'IA aplicada · 2026', twinDescription: 'Asistente web bilingüe que representa mi perfil profesional y responde preguntas sobre mi experiencia, habilidades y proyectos.', twinDetails: 'El sistema construye su contexto a partir de un resumen profesional y un CV. Cuando una conversación requiere seguimiento, puede registrar un contacto o notificar una pregunta que no pudo responder.', roleLabel: 'Rol', twinRole: 'Diseño, desarrollo y documentación', technologiesLabel: 'Tecnologías', statusLabel: 'Estado', twinStatus: 'Prototipo funcional', twinOnline: 'Agentic Twin / en línea', openFullscreen: 'Abrir en pantalla completa ↗', iframeTitle: 'Agentic Twin de Hernán de Haro', greenhouseKind: 'Automatización e IoT · En curso', greenhouseTitle: 'Monitoreo de vivero', greenhouseDescription: 'Sistema de monitoreo y automatización para la operación cotidiana de un vivero. Integra sensores, bombas, cámaras, alertas y registro de datos.', greenhouseDetails: 'El objetivo es concentrar información dispersa, detectar problemas con rapidez y construir una infraestructura que pueda mantenerse y ampliarse.', areasLabel: 'Áreas', greenhouseAreas: 'IoT, operaciones e infraestructura', greenhouseStatus: 'Implementación activa', monitorLabel: 'Ejemplo conceptual del monitoreo del vivero', monitorState: 'VIVERO / ESTADO', operational: 'OPERATIVO', temperature: 'Temperatura', humidity: 'Humedad', pump: 'Bomba', alerts: 'Alertas', chartLabel: 'Gráfico ilustrativo', profileIndex: '03 / Perfil', profileTitle: 'Recorrido y enfoque', profileOne: 'Soy un generalista técnico con formación y experiencia en ciencias de la información, escritura técnica, QA, desarrollo de negocios y operaciones de estudios pequeños.', profileTwo: 'Actualmente mi trabajo se concentra en automatización de viveros, monitoreo IoT, Linux, datos operativos y herramientas basadas en IA.', profileThree: 'Me interesa entender cómo se organiza un sistema, qué información hace falta para observarlo y cómo documentarlo para que otras personas puedan trabajar con él.', workAreas: 'Áreas de trabajo', areaAutomation: 'Automatización y monitoreo', areaInfrastructure: 'Infraestructura Linux y Docker', areaData: 'Python y flujos de datos', areaResearch: 'Investigación y clasificación', areaQa: 'QA y documentación técnica', areaOperations: 'Comunicación y operaciones', contactIndex: '04 / Contacto', contactTitle: 'Contacto', contactText: 'Podés consultar mis proyectos públicos y actividad técnica en GitHub.', footerLocation: 'Buenos Aires, Argentina'
  }
};

const languageSelector = document.querySelector('#language-selector');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const revealElements = document.querySelectorAll('.reveal');

function savedLanguage() {
  try { return localStorage.getItem('portfolio-language'); } catch { return null; }
}

function setLanguage(language, persist = false) {
  const selected = language === 'es' ? 'es' : 'en';
  const copy = translations[selected];
  document.documentElement.lang = selected;
  document.title = 'Hernán de Haro — Portfolio';
  document.querySelector('meta[name="description"]')?.setAttribute('content', copy.metaDescription);
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = copy[element.dataset.i18nAriaLabel];
    if (value) element.setAttribute('aria-label', value);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const value = copy[element.dataset.i18nTitle];
    if (value) element.setAttribute('title', value);
  });
  if (languageSelector) languageSelector.value = selected;
  if (persist) {
    try { localStorage.setItem('portfolio-language', selected); } catch { /* Storage may be unavailable. */ }
  }
}

const preferredLanguage = savedLanguage() || ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en');
setLanguage(preferredLanguage);
languageSelector?.addEventListener('change', (event) => setLanguage(event.target.value, true));

function closeMenu() {
  navigation?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('open', !isOpen);
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
