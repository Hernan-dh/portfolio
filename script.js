const translations = {
  en: {
    operationsKind: 'AI automation · 2026', operationsDescription: 'An auditable request-triage prototype that turns unstructured operational requests into actionable cases.', operationsDetails: 'A deterministic policy validates input, retrieves a controlled procedure, preserves required human review, and records an audit trail. An optional n8n workflow adds Gemini classification only after structured-output validation.', operationsRole: 'Design, development, and documentation', operationsStatus: 'Public repository · static demo', operationsScreenshotAlt: 'AI Operations Desk analyzing a repository-access request', operationsScreenshotCaption: 'Case analysis interface', operationsRepoLabel: 'View repository ↗', operationsRepoTitle: 'AI Operations Desk source repository',
    debateKind: 'Applied AI · 2026', debateDescription: "A multi-agent chatbot that develops both sides of a motion and delivers an impartial judge's decision.", debateDetails: 'CrewAI executes YAML-configured proposition, opposition, and judge tasks sequentially, passing each completed argument into the next stage. Per-call fallbacks across Gemini, Groq, and OpenRouter preserve completed task context when a provider fails.', debateRole: 'Design, development, and documentation', debateStatus: 'Live prototype', debateOnline: 'AI Debate / online', debateIframeTitle: 'CrewAI multi-agent debate chatbot',
    financialKind: 'Applied AI · 2026', financialDescription: 'A multi-agent assistant that produces current financial research reports for publicly traded companies.', financialDetails: 'CrewAI runs a Serper-equipped researcher followed by a financial analyst, transferring gathered evidence through a sequential task pipeline into a Markdown report. Per-call Gemini, Groq, and OpenRouter fallbacks preserve completed research across provider failures.', financialRole: 'Design, development, and documentation', financialStatus: 'Live prototype', financialOnline: 'Financial Researcher / online', financialIframeTitle: 'CrewAI multi-agent financial researcher',
    stockKind: 'Applied AI · 2026', stockDescription: 'A multi-agent assistant that identifies trending public companies, researches them, and selects the strongest candidate in a chosen market sector.', stockDetails: 'CrewAI runs finder, financial researcher, and stock picker agents sequentially with bounded Serper searches and Pydantic-validated intermediate outputs. Per-call Gemini, Groq, and OpenRouter fallbacks detect malformed or repetitive responses without restarting completed tasks.', stockRole: 'Design, development, and documentation', stockStatus: 'Live prototype', stockOnline: 'Stock Picker / online', stockIframeTitle: 'CrewAI and Serper multi-agent stock picker',
    researchSdk: 'The agent workflow uses the OpenAI Agents SDK and the official OpenAI Python SDK, connecting Gemini and Groq through OpenAI-compatible endpoints without depending on OpenAI models.', coderKind: 'Developer tooling · 2026', coderDescription: 'A command-line coding assistant that turns a requested Python program into files and runs it inside a constrained Docker workspace.', coderDetails: 'CrewAI coordinates code generation, optional technical research, sandbox tools, and resumable sessions. Generated programs run in network-disabled containers with explicit workspace boundaries, while provider fallbacks and deterministic validation preserve recoverability.', coderRole: 'Design, development, and documentation', coderStatus: 'Public repository', coderOnline: 'Coder / GitHub', coderRepoLabel: 'View repository ↗', coderRepoTitle: 'Coder source repository', engineeringKind: 'Developer tooling · 2026', engineeringDescription: 'A command-line engineering team that designs and generates Python applications with a Gradio interface.', engineeringDetails: 'CrewAI passes requirements through lead, backend, frontend, and test-engineer stages, then applies a Docker acceptance gate. Structured stage outputs, resume detection, sandbox containment, and provider failover make the workflow testable and recoverable.', engineeringRole: 'Design, development, and documentation', engineeringStatus: 'Public repository', engineeringOnline: 'Engineering Team / GitHub', engineeringRepoLabel: 'View repository ↗', engineeringRepoTitle: 'Engineering Team source repository',
    metaDescription: "Hernán de Haro's portfolio: automation, IoT, infrastructure, research, and information systems.", skipLink: 'Skip to content', openMenu: 'Open menu', mainNavigation: 'Main navigation', navProjects: 'Projects', navProfile: 'Profile', navContact: 'Contact', languageLabel: 'Language', languageSelector: 'Language selector', introIndex: '01 / Introduction', introRole: 'Technical generalist and analytical researcher.', introText: 'I work with automation, monitoring, infrastructure, and information organization. This site brings together some of my projects and the experience that connects them.', location: 'Buenos Aires, Argentina · 2026', visualLabel: 'Main portfolio areas', projectsIndex: '02 / Projects', projectsTitle: 'Selected work', projectsIntro: 'Current technical projects documented through their problem, decisions, and outcome.', twinKind: 'Applied AI · 2026', twinDescription: 'A web assistant that represents my professional profile and answers questions about my experience, skills, and projects.', twinDetails: 'Python and Gradio assemble grounded context from a professional summary and résumé, then run a controlled tool-calling loop with per-request Gemini-to-Groq fallback. SMTP and optional Pushover tools handle follow-up contacts and unanswered questions without local data persistence.', roleLabel: 'Role', twinRole: 'Design, development, and documentation', technologiesLabel: 'Technologies', statusLabel: 'Status', twinStatus: 'Functional prototype', twinOnline: 'Agentic Twin / online', researchKind: 'Applied AI · 2026', researchDescription: 'A research agent that plans multiple web searches and turns verified results into a detailed report.', researchDetails: 'A Pydantic-validated planner generates structured queries, which Python executes concurrently through Google Custom Search with a DDGS fallback. A separate writer synthesizes the evidence while deterministic post-processing appends five unique source links.', researchRole: 'Design, development, and documentation', researchStatus: 'Live prototype', researchOnline: 'Deep Research / online', researchIframeTitle: 'Deep Research web investigation agent', openFullscreen: 'Open fullscreen ↗', iframeTitle: "Hernán de Haro's Agentic Twin", greenhouseKind: 'Automation and IoT · In progress', greenhouseTitle: 'Greenhouse monitoring', greenhouseDescription: 'A monitoring and automation system for daily greenhouse operations. It integrates sensors, pumps, cameras, alerts, and data logging.', greenhouseDetails: 'Home Assistant coordinates sensor and pump automations, while Python services and SQLite consolidate telemetry and operational history. The system is deployed as maintainable Docker services on Linux and designed to add cameras, alerts, and new control rules incrementally.', areasLabel: 'Areas', greenhouseAreas: 'IoT, operations, and infrastructure', greenhouseStatus: 'Active implementation', monitorLabel: 'Conceptual greenhouse monitoring example', monitorState: 'GREENHOUSE / STATUS', operational: 'OPERATIONAL', temperature: 'Temperature', humidity: 'Humidity', pump: 'Pump', alerts: 'Alerts', chartLabel: 'Illustrative chart', profileIndex: '03 / Profile', profileTitle: 'Background and approach', profileOne: 'I am a technical generalist with education and experience in information science, technical writing, QA, business development, and small-studio operations.', profileTwo: 'My current work focuses on greenhouse automation, IoT monitoring, Linux, operational data, and AI-based tools.', profileThree: 'I am interested in understanding how a system is organized, what information is needed to observe it, and how to document it so other people can work with it.', workAreas: 'Areas of work', areaAutomation: 'Automation and monitoring', areaInfrastructure: 'Linux and Docker infrastructure', areaData: 'Python and data workflows', areaResearch: 'Research and classification', areaQa: 'QA and technical documentation', areaOperations: 'Communication and operations', contactIndex: '04 / Contact', contactTitle: 'Contact', contactText: 'You can find my public projects and technical activity on GitHub.', footerLocation: 'Buenos Aires, Argentina'
  },
  es: {
    operationsKind: 'Automatización con IA · 2026', operationsDescription: 'Prototipo auditable de triage que convierte solicitudes operativas desestructuradas en casos accionables.', operationsDetails: 'Una política determinista valida la entrada, recupera un procedimiento controlado, conserva la revisión humana obligatoria y registra una auditoría. Un workflow opcional de n8n agrega clasificación con Gemini solo después de validar su salida estructurada.', operationsRole: 'Diseño, desarrollo y documentación', operationsStatus: 'Repositorio público · demo estática', operationsScreenshotAlt: 'AI Operations Desk analizando una solicitud de acceso a repositorio', operationsScreenshotCaption: 'Interfaz de análisis de caso', operationsRepoLabel: 'Ver repositorio ↗', operationsRepoTitle: 'Repositorio fuente de AI Operations Desk',
    debateKind: 'IA aplicada · 2026', debateDescription: 'Chatbot multiagente que desarrolla ambos lados de una moción y presenta la decisión de un juez imparcial.', debateDetails: 'CrewAI ejecuta secuencialmente tareas de proposición, oposición y jurado configuradas en YAML, transfiriendo cada argumento a la etapa siguiente. Los fallbacks por llamada entre Gemini, Groq y OpenRouter preservan el contexto ya completado si falla un proveedor.', debateRole: 'Diseño, desarrollo y documentación', debateStatus: 'Prototipo en línea', debateOnline: 'AI Debate / en línea', debateIframeTitle: 'Chatbot de debate multiagente creado con CrewAI',
    financialKind: 'IA aplicada · 2026', financialDescription: 'Asistente multiagente que genera informes actualizados de investigación financiera sobre empresas que cotizan en bolsa.', financialDetails: 'CrewAI ejecuta un investigador equipado con Serper y luego un analista financiero, transfiriendo la evidencia mediante tareas secuenciales hasta generar un informe Markdown. Los fallbacks por llamada entre Gemini, Groq y OpenRouter conservan la investigación completada ante fallas de proveedor.', financialRole: 'Diseño, desarrollo y documentación', financialStatus: 'Prototipo en línea', financialOnline: 'Financial Researcher / en línea', financialIframeTitle: 'Investigador financiero multiagente creado con CrewAI',
    stockKind: 'IA aplicada · 2026', stockDescription: 'Asistente multiagente que identifica empresas cotizadas en tendencia, las investiga y selecciona el candidato más sólido de un sector de mercado.', stockDetails: 'CrewAI ejecuta secuencialmente agentes de descubrimiento, investigación financiera y selección, con búsquedas Serper acotadas y resultados intermedios validados mediante Pydantic. Los fallbacks por llamada entre Gemini, Groq y OpenRouter detectan respuestas malformadas o repetitivas sin reiniciar tareas completadas.', stockRole: 'Diseño, desarrollo y documentación', stockStatus: 'Prototipo en línea', stockOnline: 'Stock Picker / en línea', stockIframeTitle: 'Selector bursátil multiagente creado con CrewAI y Serper',
    researchSdk: 'El flujo de agentes utiliza OpenAI Agents SDK y el SDK oficial de OpenAI para Python, conectando Gemini y Groq mediante endpoints compatibles con OpenAI sin depender de modelos de OpenAI.', coderKind: 'Herramientas de desarrollo · 2026', coderDescription: 'Asistente de programación por línea de comandos que transforma un pedido en Python en archivos y lo ejecuta dentro de un workspace Docker restringido.', coderDetails: 'CrewAI coordina la generación de código, la investigación técnica opcional, las herramientas de sandbox y las sesiones reanudables. Los programas se ejecutan en contenedores sin red y con límites explícitos, mientras los fallbacks de proveedores y la validación determinista preservan la recuperación.', coderRole: 'Diseño, desarrollo y documentación', coderStatus: 'Repositorio público', coderOnline: 'Coder / GitHub', coderRepoLabel: 'Ver repositorio ↗', coderRepoTitle: 'Repositorio fuente de Coder', engineeringKind: 'Herramientas de desarrollo · 2026', engineeringDescription: 'Equipo de ingeniería por línea de comandos que diseña y genera aplicaciones Python con interfaz Gradio.', engineeringDetails: 'CrewAI pasa los requisitos por etapas de liderazgo, backend, frontend y testing, y luego aplica una compuerta de aceptación en Docker. Las salidas estructuradas, la detección de etapas reanudables, el aislamiento del sandbox y el failover hacen el flujo comprobable y recuperable.', engineeringRole: 'Diseño, desarrollo y documentación', engineeringStatus: 'Repositorio público', engineeringOnline: 'Engineering Team / GitHub', engineeringRepoLabel: 'Ver repositorio ↗', engineeringRepoTitle: 'Repositorio fuente de Engineering Team',
    metaDescription: 'Portfolio de Hernán de Haro: automatización, IoT, infraestructura, investigación y sistemas de información.', skipLink: 'Saltar al contenido', openMenu: 'Abrir menú', mainNavigation: 'Navegación principal', navProjects: 'Proyectos', navProfile: 'Perfil', navContact: 'Contacto', languageLabel: 'Idioma', languageSelector: 'Selector de idioma', introIndex: '01 / Introducción', introRole: 'Generalista técnico e investigador analítico.', introText: 'Trabajo con automatización, monitoreo, infraestructura y organización de información. Este sitio reúne algunos de mis proyectos y el recorrido que los conecta.', location: 'Buenos Aires, Argentina · 2026', visualLabel: 'Áreas principales del portfolio', projectsIndex: '02 / Proyectos', projectsTitle: 'Trabajo seleccionado', projectsIntro: 'Proyectos técnicos actuales, documentados a partir del problema, las decisiones y el resultado.', twinKind: 'IA aplicada · 2026', twinDescription: 'Asistente web que representa mi perfil profesional y responde preguntas sobre mi experiencia, habilidades y proyectos.', twinDetails: 'Python y Gradio construyen contexto fundamentado a partir de un resumen profesional y un CV, y ejecutan un ciclo controlado de herramientas con fallback Gemini-Groq por solicitud. SMTP y Pushover opcional gestionan contactos y preguntas sin respuesta, sin persistencia local de datos.', roleLabel: 'Rol', twinRole: 'Diseño, desarrollo y documentación', technologiesLabel: 'Tecnologías', statusLabel: 'Estado', twinStatus: 'Prototipo funcional', twinOnline: 'Agentic Twin / en línea', researchKind: 'IA aplicada · 2026', researchDescription: 'Agente de investigación que planifica múltiples búsquedas web y convierte resultados verificados en un informe detallado.', researchDetails: 'Un planificador validado con Pydantic genera consultas estructuradas que Python ejecuta en paralelo mediante Google Custom Search con fallback a DDGS. Un escritor independiente sintetiza la evidencia y un posprocesamiento determinista agrega cinco enlaces únicos.', researchRole: 'Diseño, desarrollo y documentación', researchStatus: 'Prototipo en línea', researchOnline: 'Deep Research / en línea', researchIframeTitle: 'Agente de investigación web Deep Research', openFullscreen: 'Abrir en pantalla completa ↗', iframeTitle: 'Agentic Twin de Hernán de Haro', greenhouseKind: 'Automatización e IoT · En curso', greenhouseTitle: 'Monitoreo de vivero', greenhouseDescription: 'Sistema de monitoreo y automatización para la operación cotidiana de un vivero. Integra sensores, bombas, cámaras, alertas y registro de datos.', greenhouseDetails: 'Home Assistant coordina automatizaciones de sensores y bombas, mientras servicios Python y SQLite consolidan telemetría e historial operativo. El sistema se despliega como servicios Docker mantenibles sobre Linux y permite incorporar cámaras, alertas y nuevas reglas de control de forma incremental.', areasLabel: 'Áreas', greenhouseAreas: 'IoT, operaciones e infraestructura', greenhouseStatus: 'Implementación activa', monitorLabel: 'Ejemplo conceptual del monitoreo del vivero', monitorState: 'VIVERO / ESTADO', operational: 'OPERATIVO', temperature: 'Temperatura', humidity: 'Humedad', pump: 'Bomba', alerts: 'Alertas', chartLabel: 'Gráfico ilustrativo', profileIndex: '03 / Perfil', profileTitle: 'Recorrido y enfoque', profileOne: 'Soy un generalista técnico con formación y experiencia en ciencias de la información, escritura técnica, QA, desarrollo de negocios y operaciones de estudios pequeños.', profileTwo: 'Actualmente mi trabajo se concentra en automatización de viveros, monitoreo IoT, Linux, datos operativos y herramientas basadas en IA.', profileThree: 'Me interesa entender cómo se organiza un sistema, qué información hace falta para observarlo y cómo documentarlo para que otras personas puedan trabajar con él.', workAreas: 'Áreas de trabajo', areaAutomation: 'Automatización y monitoreo', areaInfrastructure: 'Infraestructura Linux y Docker', areaData: 'Python y flujos de datos', areaResearch: 'Investigación y clasificación', areaQa: 'QA y documentación técnica', areaOperations: 'Comunicación y operaciones', contactIndex: '04 / Contacto', contactTitle: 'Contacto', contactText: 'Podés consultar mis proyectos públicos y actividad técnica en GitHub.', footerLocation: 'Buenos Aires, Argentina'
  }
};

Object.assign(translations.en, {
  metaDescription: "Hernán de Haro's portfolio: AI automation, technical operations, IoT monitoring, infrastructure, QA, and information systems.",
  introRole: 'AI automation and technical operations.',
  introText: 'I design practical automation and reliable operational systems with Python, n8n, MCP, Docker, Linux, and IoT. This portfolio brings together AI workflows, monitoring tools, and the quality and information practices behind them.',
  projectsIntro: 'Selected work in AI automation, technical operations, research systems, and IoT monitoring.',
  profileTitle: 'Systems, operations, and information',
  profileOne: 'I combine experience in information science, metadata, technical writing, QA, testing, business development, and small-studio operations.',
  profileTwo: 'My current work focuses on AI automation, workflow design, IoT monitoring, Linux and Docker infrastructure, operational data, and reliable human-in-the-loop systems.',
  profileThree: 'I turn complex processes into observable, maintainable systems by clarifying requirements, validating information, documenting decisions, and designing for the people who operate them.',
  workAreas: 'Core areas',
  areaAutomation: 'AI automation and workflow design',
  areaInfrastructure: 'Linux, Docker, and self-hosted infrastructure',
  areaData: 'Operational data, monitoring, and dashboards',
  areaResearch: 'Information architecture, research, and retrieval',
  areaQa: 'QA, testing, and technical documentation',
  areaOperations: 'IoT, process improvement, and stakeholder operations',
  contactText: 'For collaborations in AI automation, technical operations, monitoring, QA, or information systems, explore my public work on GitHub.'
});

Object.assign(translations.es, {
  metaDescription: 'Portfolio de Hernán de Haro: automatización con IA, operaciones técnicas, monitoreo IoT, infraestructura, QA y sistemas de información.',
  introRole: 'Automatización con IA y operaciones técnicas.',
  introText: 'Diseño automatizaciones prácticas y sistemas operativos confiables con Python, n8n, MCP, Docker, Linux e IoT. Este portfolio reúne flujos de IA, herramientas de monitoreo y las prácticas de calidad e información que los sostienen.',
  projectsIntro: 'Trabajo seleccionado en automatización con IA, operaciones técnicas, sistemas de investigación y monitoreo IoT.',
  profileTitle: 'Sistemas, operaciones e información',
  profileOne: 'Combino experiencia en ciencias de la información, metadatos, escritura técnica, QA, testing, desarrollo de negocios y operaciones de estudios pequeños.',
  profileTwo: 'Mi trabajo actual se concentra en automatización con IA, diseño de workflows, monitoreo IoT, infraestructura Linux y Docker, datos operativos y sistemas confiables con supervisión humana.',
  profileThree: 'Convierto procesos complejos en sistemas observables y mantenibles al aclarar requisitos, validar información, documentar decisiones y diseñar para quienes los operan.',
  workAreas: 'Áreas principales',
  areaAutomation: 'Automatización con IA y diseño de workflows',
  areaInfrastructure: 'Infraestructura Linux, Docker y servicios autohosteados',
  areaData: 'Datos operativos, monitoreo y dashboards',
  areaResearch: 'Arquitectura de información, investigación y recuperación',
  areaQa: 'QA, testing y documentación técnica',
  areaOperations: 'IoT, mejora de procesos y operaciones con stakeholders',
  contactText: 'Para colaboraciones en automatización con IA, operaciones técnicas, monitoreo, QA o sistemas de información, podés explorar mi trabajo público en GitHub.'
});

Object.assign(translations.en, {
  greenhouseKind: 'IoT automation and technical operations · In progress',
  greenhouseTitle: 'IoT Automation & Monitoring',
  greenhouseDescription: 'An IoT-based environmental monitoring and operational automation system. It brings together sensors, cameras, pumps, connected devices, dashboards, time-series data, and Telegram alerts to make conditions and daily work observable.',
  greenhouseDetails: 'Home Assistant and OpenClaw coordinate device automation, while Python and SQL workflows collect telemetry, validate data quality, and support reporting. Linux services and Docker deployments provide maintainable infrastructure; connectivity and hardware integration are treated as part of ongoing operations.',
  greenhouseAreas: 'IoT, environmental monitoring, and technical operations',
  monitorLabel: 'Conceptual IoT monitoring example',
  monitorState: 'IOT / STATUS',
  iotScreenshotCaption: 'IoT monitoring dashboard',
  iotScreenshotAlt: 'IoT automation and monitoring dashboard'
});

Object.assign(translations.es, {
  greenhouseKind: 'Automatización IoT y operaciones técnicas · En curso',
  greenhouseTitle: 'Automatización y monitoreo IoT',
  greenhouseDescription: 'Sistema de monitoreo ambiental y automatización operativa basado en IoT. Integra sensores, cámaras, bombas, dispositivos conectados, tableros, datos de series temporales y alertas por Telegram para hacer observables las condiciones y el trabajo cotidiano.',
  greenhouseDetails: 'Home Assistant y OpenClaw coordinan la automatización de dispositivos, mientras flujos en Python y SQL recolectan telemetría, validan la calidad de los datos y respaldan los reportes. Servicios Linux y despliegues Docker aportan infraestructura mantenible; la conectividad y la integración de hardware forman parte de la operación continua.',
  greenhouseAreas: 'IoT, monitoreo ambiental y operaciones técnicas',
  monitorLabel: 'Ejemplo conceptual de monitoreo IoT',
  monitorState: 'IOT / ESTADO',
  iotScreenshotCaption: 'Panel de monitoreo IoT',
  iotScreenshotAlt: 'Panel de automatización y monitoreo IoT'
});

Object.assign(translations.en, { themeToggleLabel: 'Change color theme', themeToDark: 'Dark mode', themeToLight: 'Light mode' });
Object.assign(translations.es, { themeToggleLabel: 'Cambiar tema de color', themeToDark: 'Modo oscuro', themeToLight: 'Modo claro' });
Object.assign(translations.en, { viewRepository: 'View repository ↗', repositoryLinkTitle: 'Open source repository', portfolioRepository: 'Portfolio source ↗' });
Object.assign(translations.es, { viewRepository: 'Ver repositorio ↗', repositoryLinkTitle: 'Abrir repositorio fuente', portfolioRepository: 'Código fuente del portfolio ↗' });

Object.assign(translations.en, {
  operationsDescription: 'An auditable operations-triage system that turns unstructured access, billing, and technical requests into documented cases.',
  operationsDetails: 'A JavaScript deterministic baseline validates input, retrieves a controlled procedure, enforces human-review policy, and records an audit trail. An optional n8n workflow adds a Gemini classifier through structured-output validation, then preserves the deterministic fallback when AI output is unavailable or invalid.',
  coderDescription: 'A command-line coding assistant built around a single CrewAI coding agent that turns a requested Python program into files in a constrained workspace.',
  coderDetails: 'The agent can use bounded Serper or DDGS technical research and sandbox tools; generated programs run in network-disabled Docker containers. YAML configuration, resumable sessions, deterministic validation, and per-call Gemini, Groq, and OpenRouter fallback keep the workflow recoverable.',
  engineeringDescription: 'A command-line software-delivery pipeline with four CrewAI agents: an engineering lead, backend engineer, frontend engineer, and test engineer.',
  engineeringDetails: 'The lead can research with Serper or DDGS, then routes requirements through Python backend, Gradio 6 frontend, and test stages. Docker acceptance checks, YAML configuration, resumable stages, sandbox boundaries, and Gemini, Groq, and OpenRouter fallback make generated applications testable and recoverable.',
  twinDescription: 'A profile-grounded conversational assistant that answers questions about experience, skills, and projects through a controlled tool-calling loop.',
  twinDetails: 'Python and Gradio assemble curated profile facts and PDF context for a single response agent using the OpenAI SDK with Gemini-to-Groq fallback. Contact and unknown-question tools use SMTP and optional Pushover notifications without persisting visitor data locally.',
  researchDescription: 'A multi-stage research system with a Planner Agent and Writer Agent that turns a question into a sourced report.',
  researchDetails: 'The Planner Agent produces Pydantic-validated search queries; Python executes them concurrently through Serper, Google Custom Search, and DDGS fallback. The Writer Agent synthesizes the evidence through the OpenAI Agents SDK, while deterministic post-processing selects five unique source links; Gemini, Groq, and OpenRouter provide model fallback.',
  debateDescription: 'A two-agent CrewAI debate system in which a Debate Agent develops proposition and opposition arguments and a Judge Agent returns an impartial decision.',
  debateDetails: 'The Gradio 6 interface and YAML tasks run sequentially; the Debate Agent can use bounded Serper or DDGS evidence, then the Judge Agent receives the completed arguments. Per-call Gemini, Groq, and OpenRouter fallback preserves completed task context when a provider fails.',
  financialDescription: 'A two-agent CrewAI financial-research workflow: a Research Agent gathers current company evidence and an Analyst Agent turns it into a Markdown report.',
  financialDetails: 'The Gradio 6 and CLI interfaces route a company through Serper-backed research, sequential YAML tasks, and analysis. Python, CrewAI, Gemini, Groq, and OpenRouter fallback preserve completed research when a model provider fails.',
  stockDescription: 'A three-agent CrewAI market-research workflow with a Trending Company Finder, Financial Researcher, and Stock Picker.',
  stockDetails: 'The Gradio 6 and CLI interfaces take a sector, use bounded Serper searches, and pass Pydantic-validated company lists through sequential YAML tasks to a final candidate selection. Gemini, Groq, and OpenRouter fallback detects malformed or repetitive output without restarting completed work.'
});

Object.assign(translations.es, {
  operationsDescription: 'Sistema auditable de triage operativo que convierte solicitudes desestructuradas de acceso, facturación y soporte técnico en casos documentados.',
  operationsDetails: 'Una base determinista en JavaScript valida la entrada, recupera un procedimiento controlado, aplica la política de revisión humana y registra una auditoría. Un workflow opcional de n8n suma un clasificador Gemini con validación de salida estructurada y conserva el fallback determinista si la IA falla o devuelve datos inválidos.',
  coderDescription: 'Asistente de programación por línea de comandos construido alrededor de un único agente de código de CrewAI, que transforma un pedido de Python en archivos dentro de un workspace restringido.',
  coderDetails: 'El agente puede usar investigación técnica acotada con Serper o DDGS y herramientas de sandbox; los programas generados se ejecutan en contenedores Docker sin red. La configuración YAML, sesiones reanudables, validación determinista y fallback por llamada entre Gemini, Groq y OpenRouter mantienen el flujo recuperable.',
  engineeringDescription: 'Pipeline de entrega de software por línea de comandos con cuatro agentes CrewAI: líder de ingeniería, ingeniero backend, ingeniero frontend e ingeniero de pruebas.',
  engineeringDetails: 'El líder puede investigar con Serper o DDGS y luego enruta requisitos por etapas de backend Python, frontend Gradio 6 y testing. Las comprobaciones de aceptación en Docker, la configuración YAML, etapas reanudables, límites de sandbox y fallback entre Gemini, Groq y OpenRouter hacen verificables y recuperables las aplicaciones generadas.',
  twinDescription: 'Asistente conversacional fundamentado en el perfil profesional, que responde sobre experiencia, habilidades y proyectos mediante un ciclo controlado de herramientas.',
  twinDetails: 'Python y Gradio reúnen hechos profesionales curados y contexto PDF para un único agente de respuesta que usa el SDK de OpenAI con fallback de Gemini a Groq. Las herramientas de contacto y preguntas sin respuesta usan SMTP y notificaciones Pushover opcionales sin persistir localmente los datos de visitantes.',
  researchDescription: 'Sistema de investigación por etapas con un Agente Planificador y un Agente Redactor que transforma una pregunta en un informe con fuentes.',
  researchDetails: 'El Agente Planificador produce consultas validadas con Pydantic; Python las ejecuta en paralelo mediante Serper, Google Custom Search y fallback a DDGS. El Agente Redactor sintetiza la evidencia con OpenAI Agents SDK, mientras un posprocesamiento determinista selecciona cinco enlaces únicos; Gemini, Groq y OpenRouter aportan fallback de modelos.',
  debateDescription: 'Sistema de debate CrewAI de dos agentes: un Agente de Debate desarrolla argumentos de proposición y oposición, y un Agente Juez entrega una decisión imparcial.',
  debateDetails: 'La interfaz Gradio 6 y las tareas YAML se ejecutan secuencialmente; el Agente de Debate puede usar evidencia acotada de Serper o DDGS y luego el Agente Juez recibe los argumentos completos. El fallback por llamada entre Gemini, Groq y OpenRouter conserva el contexto de tareas terminadas ante fallas de proveedor.',
  financialDescription: 'Flujo de investigación financiera CrewAI de dos agentes: un Agente Investigador reúne evidencia actual de empresas y un Agente Analista la convierte en un informe Markdown.',
  financialDetails: 'Las interfaces Gradio 6 y CLI procesan una empresa mediante investigación respaldada por Serper, tareas YAML secuenciales y análisis. Python, CrewAI y el fallback entre Gemini, Groq y OpenRouter preservan la investigación completada si falla un proveedor de modelos.',
  stockDescription: 'Flujo de investigación de mercado CrewAI de tres agentes: Buscador de Empresas en Tendencia, Investigador Financiero y Selector de Acciones.',
  stockDetails: 'Las interfaces Gradio 6 y CLI reciben un sector, usan búsquedas Serper acotadas y pasan listas de empresas validadas con Pydantic por tareas YAML secuenciales hasta seleccionar un candidato final. El fallback entre Gemini, Groq y OpenRouter detecta salidas malformadas o repetitivas sin reiniciar trabajo completado.'
});

const languageSelector = document.querySelector('#language-selector');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const revealElements = document.querySelectorAll('.reveal');
const themeToggle = document.querySelector('#theme-toggle');
const themeLabel = document.querySelector('#theme-label');

function savedTheme() {
  try { return localStorage.getItem('portfolio-theme'); } catch { return null; }
}

const systemTheme = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
let currentTheme = savedTheme() || systemTheme;

function setTheme(theme, persist = false) {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  if (document.documentElement?.dataset) document.documentElement.dataset.theme = currentTheme;
  else document.documentElement?.setAttribute?.('data-theme', currentTheme);
  const language = document.documentElement.lang === 'es' ? 'es' : 'en';
  const label = currentTheme === 'dark' ? translations[language].themeToLight : translations[language].themeToDark;
  themeToggle?.setAttribute('aria-pressed', String(currentTheme === 'dark'));
  themeToggle?.setAttribute('aria-label', translations[language].themeToggleLabel);
  if (themeLabel) themeLabel.textContent = label;
  if (persist) {
    try { localStorage.setItem('portfolio-theme', currentTheme); } catch { /* Storage may be unavailable. */ }
  }
}

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
  setTheme(currentTheme);
  if (persist) {
    try { localStorage.setItem('portfolio-language', selected); } catch { /* Storage may be unavailable. */ }
  }
}

const preferredLanguage = savedLanguage() || ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en');
setLanguage(preferredLanguage);
setTheme(currentTheme);
languageSelector?.addEventListener('change', (event) => setLanguage(event.target.value, true));
themeToggle?.addEventListener('click', () => setTheme(currentTheme === 'dark' ? 'light' : 'dark', true));

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
