const translations = {
  en: {
    debateKind: 'Applied AI · 2026', debateDescription: "A multi-agent chatbot that develops both sides of a motion and delivers an impartial judge's decision.", debateDetails: 'CrewAI executes YAML-configured proposition, opposition, and judge tasks sequentially, passing each completed argument into the next stage. Per-call fallbacks across Gemini, Groq, and OpenRouter preserve completed task context when a provider fails.', debateRole: 'Design, development, and documentation', debateStatus: 'Live prototype', debateOnline: 'AI Debate / online', debateIframeTitle: 'CrewAI multi-agent debate chatbot',
    financialKind: 'Applied AI · 2026', financialDescription: 'A multi-agent assistant that produces current financial research reports for publicly traded companies.', financialDetails: 'CrewAI runs a Serper-equipped researcher followed by a financial analyst, transferring gathered evidence through a sequential task pipeline into a Markdown report. Per-call Gemini, Groq, and OpenRouter fallbacks preserve completed research across provider failures.', financialRole: 'Design, development, and documentation', financialStatus: 'Live prototype', financialOnline: 'Financial Researcher / online', financialIframeTitle: 'CrewAI multi-agent financial researcher',
    stockKind: 'Applied AI · 2026', stockDescription: 'A multi-agent assistant that identifies trending public companies, researches them, and selects the strongest candidate in a chosen market sector.', stockDetails: 'CrewAI runs finder, financial researcher, and stock picker agents sequentially with bounded Serper searches and Pydantic-validated intermediate outputs. Per-call Gemini, Groq, and OpenRouter fallbacks detect malformed or repetitive responses without restarting completed tasks.', stockRole: 'Design, development, and documentation', stockStatus: 'Live prototype', stockOnline: 'Stock Picker / online', stockIframeTitle: 'CrewAI and Serper multi-agent stock picker',
    metaDescription: "Hernán de Haro's portfolio: automation, IoT, infrastructure, research, and information systems.", skipLink: 'Skip to content', openMenu: 'Open menu', mainNavigation: 'Main navigation', navProjects: 'Projects', navProfile: 'Profile', navContact: 'Contact', languageLabel: 'Language', languageSelector: 'Language selector', introIndex: '01 / Introduction', introRole: 'Technical generalist and analytical researcher.', introText: 'I work with automation, monitoring, infrastructure, and information organization. This site brings together some of my projects and the experience that connects them.', location: 'Buenos Aires, Argentina · 2026', visualLabel: 'Main portfolio areas', projectsIndex: '02 / Projects', projectsTitle: 'Selected work', projectsIntro: 'Current technical projects documented through their problem, decisions, and outcome.', twinKind: 'Applied AI · 2026', twinDescription: 'A web assistant that represents my professional profile and answers questions about my experience, skills, and projects.', twinDetails: 'Python and Gradio assemble grounded context from a professional summary and résumé, then run a controlled tool-calling loop with per-request Gemini-to-Groq fallback. SMTP and optional Pushover tools handle follow-up contacts and unanswered questions without local data persistence.', roleLabel: 'Role', twinRole: 'Design, development, and documentation', technologiesLabel: 'Technologies', statusLabel: 'Status', twinStatus: 'Functional prototype', twinOnline: 'Agentic Twin / online', researchKind: 'Applied AI · 2026', researchDescription: 'A research agent that plans multiple web searches and turns verified results into a detailed report.', researchDetails: 'A Pydantic-validated planner generates structured queries, which Python executes concurrently through Google Custom Search with a DDGS fallback. A separate writer synthesizes the evidence while deterministic post-processing appends five unique source links.', researchRole: 'Design, development, and documentation', researchStatus: 'Live prototype', researchOnline: 'Deep Research / online', researchIframeTitle: 'Deep Research web investigation agent', openFullscreen: 'Open fullscreen ↗', iframeTitle: "Hernán de Haro's Agentic Twin", greenhouseKind: 'Automation and IoT · In progress', greenhouseTitle: 'Greenhouse monitoring', greenhouseDescription: 'A monitoring and automation system for daily greenhouse operations. It integrates sensors, pumps, cameras, alerts, and data logging.', greenhouseDetails: 'Home Assistant coordinates sensor and pump automations, while Python services and SQLite consolidate telemetry and operational history. The system is deployed as maintainable Docker services on Linux and designed to add cameras, alerts, and new control rules incrementally.', areasLabel: 'Areas', greenhouseAreas: 'IoT, operations, and infrastructure', greenhouseStatus: 'Active implementation', monitorLabel: 'Conceptual greenhouse monitoring example', monitorState: 'GREENHOUSE / STATUS', operational: 'OPERATIONAL', temperature: 'Temperature', humidity: 'Humidity', pump: 'Pump', alerts: 'Alerts', chartLabel: 'Illustrative chart', profileIndex: '03 / Profile', profileTitle: 'Background and approach', profileOne: 'I am a technical generalist with education and experience in information science, technical writing, QA, business development, and small-studio operations.', profileTwo: 'My current work focuses on greenhouse automation, IoT monitoring, Linux, operational data, and AI-based tools.', profileThree: 'I am interested in understanding how a system is organized, what information is needed to observe it, and how to document it so other people can work with it.', workAreas: 'Areas of work', areaAutomation: 'Automation and monitoring', areaInfrastructure: 'Linux and Docker infrastructure', areaData: 'Python and data workflows', areaResearch: 'Research and classification', areaQa: 'QA and technical documentation', areaOperations: 'Communication and operations', contactIndex: '04 / Contact', contactTitle: 'Contact', contactText: 'You can find my public projects and technical activity on GitHub.', footerLocation: 'Buenos Aires, Argentina'
  },
  es: {
    debateKind: 'IA aplicada · 2026', debateDescription: 'Chatbot multiagente que desarrolla ambos lados de una moción y presenta la decisión de un juez imparcial.', debateDetails: 'CrewAI ejecuta secuencialmente tareas de proposición, oposición y jurado configuradas en YAML, transfiriendo cada argumento a la etapa siguiente. Los fallbacks por llamada entre Gemini, Groq y OpenRouter preservan el contexto ya completado si falla un proveedor.', debateRole: 'Diseño, desarrollo y documentación', debateStatus: 'Prototipo en línea', debateOnline: 'AI Debate / en línea', debateIframeTitle: 'Chatbot de debate multiagente creado con CrewAI',
    financialKind: 'IA aplicada · 2026', financialDescription: 'Asistente multiagente que genera informes actualizados de investigación financiera sobre empresas que cotizan en bolsa.', financialDetails: 'CrewAI ejecuta un investigador equipado con Serper y luego un analista financiero, transfiriendo la evidencia mediante tareas secuenciales hasta generar un informe Markdown. Los fallbacks por llamada entre Gemini, Groq y OpenRouter conservan la investigación completada ante fallas de proveedor.', financialRole: 'Diseño, desarrollo y documentación', financialStatus: 'Prototipo en línea', financialOnline: 'Financial Researcher / en línea', financialIframeTitle: 'Investigador financiero multiagente creado con CrewAI',
    stockKind: 'IA aplicada · 2026', stockDescription: 'Asistente multiagente que identifica empresas cotizadas en tendencia, las investiga y selecciona el candidato más sólido de un sector de mercado.', stockDetails: 'CrewAI ejecuta secuencialmente agentes de descubrimiento, investigación financiera y selección, con búsquedas Serper acotadas y resultados intermedios validados mediante Pydantic. Los fallbacks por llamada entre Gemini, Groq y OpenRouter detectan respuestas malformadas o repetitivas sin reiniciar tareas completadas.', stockRole: 'Diseño, desarrollo y documentación', stockStatus: 'Prototipo en línea', stockOnline: 'Stock Picker / en línea', stockIframeTitle: 'Selector bursátil multiagente creado con CrewAI y Serper',
    metaDescription: 'Portfolio de Hernán de Haro: automatización, IoT, infraestructura, investigación y sistemas de información.', skipLink: 'Saltar al contenido', openMenu: 'Abrir menú', mainNavigation: 'Navegación principal', navProjects: 'Proyectos', navProfile: 'Perfil', navContact: 'Contacto', languageLabel: 'Idioma', languageSelector: 'Selector de idioma', introIndex: '01 / Introducción', introRole: 'Generalista técnico e investigador analítico.', introText: 'Trabajo con automatización, monitoreo, infraestructura y organización de información. Este sitio reúne algunos de mis proyectos y el recorrido que los conecta.', location: 'Buenos Aires, Argentina · 2026', visualLabel: 'Áreas principales del portfolio', projectsIndex: '02 / Proyectos', projectsTitle: 'Trabajo seleccionado', projectsIntro: 'Proyectos técnicos actuales, documentados a partir del problema, las decisiones y el resultado.', twinKind: 'IA aplicada · 2026', twinDescription: 'Asistente web que representa mi perfil profesional y responde preguntas sobre mi experiencia, habilidades y proyectos.', twinDetails: 'Python y Gradio construyen contexto fundamentado a partir de un resumen profesional y un CV, y ejecutan un ciclo controlado de herramientas con fallback Gemini-Groq por solicitud. SMTP y Pushover opcional gestionan contactos y preguntas sin respuesta, sin persistencia local de datos.', roleLabel: 'Rol', twinRole: 'Diseño, desarrollo y documentación', technologiesLabel: 'Tecnologías', statusLabel: 'Estado', twinStatus: 'Prototipo funcional', twinOnline: 'Agentic Twin / en línea', researchKind: 'IA aplicada · 2026', researchDescription: 'Agente de investigación que planifica múltiples búsquedas web y convierte resultados verificados en un informe detallado.', researchDetails: 'Un planificador validado con Pydantic genera consultas estructuradas que Python ejecuta en paralelo mediante Google Custom Search con fallback a DDGS. Un escritor independiente sintetiza la evidencia y un posprocesamiento determinista agrega cinco enlaces únicos.', researchRole: 'Diseño, desarrollo y documentación', researchStatus: 'Prototipo en línea', researchOnline: 'Deep Research / en línea', researchIframeTitle: 'Agente de investigación web Deep Research', openFullscreen: 'Abrir en pantalla completa ↗', iframeTitle: 'Agentic Twin de Hernán de Haro', greenhouseKind: 'Automatización e IoT · En curso', greenhouseTitle: 'Monitoreo de vivero', greenhouseDescription: 'Sistema de monitoreo y automatización para la operación cotidiana de un vivero. Integra sensores, bombas, cámaras, alertas y registro de datos.', greenhouseDetails: 'Home Assistant coordina automatizaciones de sensores y bombas, mientras servicios Python y SQLite consolidan telemetría e historial operativo. El sistema se despliega como servicios Docker mantenibles sobre Linux y permite incorporar cámaras, alertas y nuevas reglas de control de forma incremental.', areasLabel: 'Áreas', greenhouseAreas: 'IoT, operaciones e infraestructura', greenhouseStatus: 'Implementación activa', monitorLabel: 'Ejemplo conceptual del monitoreo del vivero', monitorState: 'VIVERO / ESTADO', operational: 'OPERATIVO', temperature: 'Temperatura', humidity: 'Humedad', pump: 'Bomba', alerts: 'Alertas', chartLabel: 'Gráfico ilustrativo', profileIndex: '03 / Perfil', profileTitle: 'Recorrido y enfoque', profileOne: 'Soy un generalista técnico con formación y experiencia en ciencias de la información, escritura técnica, QA, desarrollo de negocios y operaciones de estudios pequeños.', profileTwo: 'Actualmente mi trabajo se concentra en automatización de viveros, monitoreo IoT, Linux, datos operativos y herramientas basadas en IA.', profileThree: 'Me interesa entender cómo se organiza un sistema, qué información hace falta para observarlo y cómo documentarlo para que otras personas puedan trabajar con él.', workAreas: 'Áreas de trabajo', areaAutomation: 'Automatización y monitoreo', areaInfrastructure: 'Infraestructura Linux y Docker', areaData: 'Python y flujos de datos', areaResearch: 'Investigación y clasificación', areaQa: 'QA y documentación técnica', areaOperations: 'Comunicación y operaciones', contactIndex: '04 / Contacto', contactTitle: 'Contacto', contactText: 'Podés consultar mis proyectos públicos y actividad técnica en GitHub.', footerLocation: 'Buenos Aires, Argentina'
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
