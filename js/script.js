document.addEventListener('DOMContentLoaded', () => {
  // Inicializa AOS para las animaciones al hacer scroll.
  AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });

  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navCollapse = document.getElementById('navbarNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  const langButtons = document.querySelectorAll('.lang-btn');

  const translations = {
    es: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre mí',
      'nav.education': 'Educación',
      'nav.experience': 'Experiencia',
      'nav.skills': 'Habilidades',
      'nav.projects': 'Proyectos',
      'nav.certifications': 'Certificaciones',
      'nav.languages': 'Idiomas',
      'nav.contact': 'Contacto',
      'hero.tagline': 'Hoja de Vida Digital',
      'hero.summary': 'Edad: 19 años · Sucumbíos, Ecuador',
      'hero.professionLabel': 'Profesión:',
      'hero.professionValue': 'Completar información',
      'hero.description': 'Descripción profesional: Completar información personal.',
      'hero.downloadCv': 'Descargar CV',
      'hero.contact': 'Contactar',
      'about.title': 'Sobre mí',
      'about.subtitle': 'Una breve descripción personal que puede ajustarse con facilidad en el futuro.',
      'about.content': 'Completar información personal.',
      'education.title': 'Educación',
      'education.subtitle': 'Ejemplos de formación académica que pueden reemplazarse por información real.',
      'experience.title': 'Experiencia Laboral',
      'experience.subtitle': 'Una línea de tiempo elegante para presentar el recorrido profesional.',
      'skills.title': 'Habilidades',
      'skills.subtitle': 'Indicadores visuales y editables para mostrar fortalezas principales.',
      'projects.title': 'Proyectos',
      'projects.subtitle': 'Tarjetas de ejemplo para mostrar trabajos o iniciativas destacadas.',
      'certifications.title': 'Certificaciones',
      'certifications.subtitle': 'Espacio preparado para mostrar logros y certificaciones profesionales.',
      'languages.title': 'Idiomas',
      'languages.subtitle': 'Indicadores simples para mostrar niveles de comunicación.',
      'interests.title': 'Intereses',
      'interests.subtitle': 'Áreas que reflejan motivación y visión personal.',
      'references.title': 'Referencias Personales',
      'references.subtitle': 'Tarjetas listas para completar cuando dispongas de la información.',
      'contact.title': 'Contacto',
      'contact.subtitle': 'Una sección limpia y profesional para recibir mensajes o solicitudes.',
      'contact.infoTitle': 'Información de contacto',
      'contact.form.name': 'Nombre',
      'contact.form.namePlaceholder': 'Tu nombre',
      'contact.form.email': 'Correo',
      'contact.form.emailPlaceholder': 'tu@email.com',
      'contact.form.message': 'Mensaje',
      'contact.form.messagePlaceholder': 'Escribe tu mensaje',
      'contact.form.send': 'Enviar',
      'footer.message': 'Gracias por visitar mi hoja de vida.'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About me',
      'nav.education': 'Education',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.certifications': 'Certifications',
      'nav.languages': 'Languages',
      'nav.contact': 'Contact',
      'hero.tagline': 'Digital Resume',
      'hero.summary': 'Age: 19 years old · Sucumbíos, Ecuador',
      'hero.professionLabel': 'Profession:',
      'hero.professionValue': 'Complete information',
      'hero.description': 'Professional description: Complete personal information.',
      'hero.downloadCv': 'Download CV',
      'hero.contact': 'Contact',
      'about.title': 'About me',
      'about.subtitle': 'A short personal description that can be easily adjusted in the future.',
      'about.content': 'Complete personal information.',
      'education.title': 'Education',
      'education.subtitle': 'Examples of academic training that can be replaced with real information.',
      'experience.title': 'Work Experience',
      'experience.subtitle': 'An elegant timeline to present your professional journey.',
      'skills.title': 'Skills',
      'skills.subtitle': 'Visual and editable indicators to showcase main strengths.',
      'projects.title': 'Projects',
      'projects.subtitle': 'Sample cards to display outstanding work or initiatives.',
      'certifications.title': 'Certifications',
      'certifications.subtitle': 'A space prepared to show professional achievements and certifications.',
      'languages.title': 'Languages',
      'languages.subtitle': 'Simple indicators to show communication levels.',
      'interests.title': 'Interests',
      'interests.subtitle': 'Areas that reflect motivation and personal vision.',
      'references.title': 'Personal References',
      'references.subtitle': 'Cards ready to complete when you have the information.',
      'contact.title': 'Contact',
      'contact.subtitle': 'A clean and professional section to receive messages or requests.',
      'contact.infoTitle': 'Contact information',
      'contact.form.name': 'Name',
      'contact.form.namePlaceholder': 'Your name',
      'contact.form.email': 'Email',
      'contact.form.emailPlaceholder': 'you@email.com',
      'contact.form.message': 'Message',
      'contact.form.messagePlaceholder': 'Write your message',
      'contact.form.send': 'Send',
      'footer.message': 'Thank you for visiting my resume.'
    },
    pt: {
      'nav.home': 'Início',
      'nav.about': 'Sobre mim',
      'nav.education': 'Educação',
      'nav.experience': 'Experiência',
      'nav.skills': 'Habilidades',
      'nav.projects': 'Projetos',
      'nav.certifications': 'Certificações',
      'nav.languages': 'Idiomas',
      'nav.contact': 'Contato',
      'hero.tagline': 'Currículo Digital',
      'hero.summary': 'Idade: 19 anos · Sucumbíos, Equador',
      'hero.professionLabel': 'Profissão:',
      'hero.professionValue': 'Informação a completar',
      'hero.description': 'Descrição profissional: completar informações pessoais.',
      'hero.downloadCv': 'Baixar CV',
      'hero.contact': 'Contato',
      'about.title': 'Sobre mim',
      'about.subtitle': 'Uma breve descrição pessoal que pode ser ajustada facilmente no futuro.',
      'about.content': 'Informação pessoal a completar.',
      'education.title': 'Educação',
      'education.subtitle': 'Exemplos de formação acadêmica que podem ser substituídos por informações reais.',
      'experience.title': 'Experiência de Trabalho',
      'experience.subtitle': 'Uma linha do tempo elegante para apresentar sua trajetória profissional.',
      'skills.title': 'Habilidades',
      'skills.subtitle': 'Indicadores visuais e editáveis para mostrar os principais pontos fortes.',
      'projects.title': 'Projetos',
      'projects.subtitle': 'Cartões de exemplo para mostrar trabalhos ou iniciativas destacadas.',
      'certifications.title': 'Certificações',
      'certifications.subtitle': 'Um espaço preparado para mostrar conquistas e certificações profissionais.',
      'languages.title': 'Idiomas',
      'languages.subtitle': 'Indicadores simples para mostrar níveis de comunicação.',
      'interests.title': 'Interesses',
      'interests.subtitle': 'Áreas que refletem motivação e visão pessoal.',
      'references.title': 'Referências Pessoais',
      'references.subtitle': 'Cartões prontos para completar quando você tiver as informações.',
      'contact.title': 'Contato',
      'contact.subtitle': 'Uma seção limpa e profissional para receber mensagens ou solicitações.',
      'contact.infoTitle': 'Informações de contato',
      'contact.form.name': 'Nome',
      'contact.form.namePlaceholder': 'Seu nome',
      'contact.form.email': 'E-mail',
      'contact.form.emailPlaceholder': 'seu@email.com',
      'contact.form.message': 'Mensagem',
      'contact.form.messagePlaceholder': 'Escreva sua mensagem',
      'contact.form.send': 'Enviar',
      'footer.message': 'Obrigado por visitar meu currículo.'
    }
  };

  const applyTranslations = (lang) => {
    const strings = translations[lang] || translations.es;
    document.documentElement.lang = lang;
    document.title = lang === 'en' ? 'Thalia Tanguila | Resume' : lang === 'pt' ? 'Thalia Tanguila | Currículo' : 'Thalia Tanguila | Hoja de Vida';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (strings[key]) {
        element.textContent = strings[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (strings[key]) {
        element.setAttribute('placeholder', strings[key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const key = element.getAttribute('data-i18n-aria');
      if (strings[key]) {
        element.setAttribute('aria-label', strings[key]);
      }
    });

    langButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });
  };

  // Modo claro/oscuro con preferencia guardada.
  const savedTheme = localStorage.getItem('cv-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  body.setAttribute('data-theme', initialTheme);
  themeToggle.innerHTML = initialTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('cv-theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  // Idioma guardado en el navegador.
  const savedLang = localStorage.getItem('cv-lang') || 'es';
  applyTranslations(savedLang);

  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLang = button.dataset.lang;
      localStorage.setItem('cv-lang', selectedLang);
      applyTranslations(selectedLang);
    });
  });

  // Menú móvil adaptable.
  menuToggle.addEventListener('click', () => {
    navCollapse.classList.toggle('show');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navCollapse.classList.remove('show');
    });
  });

  // Resalta la sección activa en la barra de navegación.
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach((section) => observer.observe(section));

  // Botón volver arriba.
  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 350 ? 'flex' : 'none';
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Simula el envío del formulario.
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alertBox.textContent = 'Mensaje preparado para enviarse. Puedes conectar este formulario a un servicio real posteriormente.';
    alertBox.classList.remove('d-none');
    form.reset();
  });

  // Animación de barras de progreso al entrar en pantalla.
  const progressBars = document.querySelectorAll('.progress-bar span');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.dataset.width;
        entry.target.style.width = `${width}%`;
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.7 });

  progressBars.forEach((bar) => progressObserver.observe(bar));
});
