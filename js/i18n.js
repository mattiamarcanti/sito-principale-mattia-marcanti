'use strict';

/* ═══════════════════════════════════════════════
   TRANSLATIONS
   ═══════════════════════════════════════════════ */
const translations = {

  /* ──────────── ITALIANO ──────────── */
  it: {
    /* Nav */
    'nav.about': 'Su di me', 'nav.experience': 'Esperienza', 'nav.projects': 'Progetti',
    'nav.gallery': 'Galleria', 'nav.contact': 'Contatti',
    'nav.webapp': 'Web App', 'nav.reserved': 'Area Riservata', 'nav.curriculum': 'Curriculum',
    /* Hero */
    'hero.badge': 'Disponibile per nuove opportunità',
    'hero.subtitle': 'Software Developer <span class="sep">·</span> Ingegnere Informatico',
    'hero.discover': 'Scopri di più',
    /* Section titles */
    'section.about.title': 'Chi Sono',
    'section.exp.title': 'Esperienza',
    'section.proj.title': 'Progetti',
    'section.gallery.title': 'Galleria',
    'section.contact.title': 'Contattami',
    /* About */
    'about.tag': 'Chi sono',
    'about.subtitle': 'Ingegnere informatico con la passione per il codice e il design',
    'bento.formation.title': 'Formazione',
    'bento.formation.text': 'Laureato in <strong>Ingegneria Informatica</strong> presso l\'Università di Bologna (Unibo), con focus su sistemi software complessi, sviluppo web e intelligenza artificiale.',
    'bento.formation.tag2': 'Laurea Triennale',
    'bento.itknowledge.title': 'Conoscenze IT',
    'bento.graphic.title': 'Grafica & Design',
    'bento.hobby.title': 'Hobby & Passioni',
    'hobby.calcio': 'Calcio', 'hobby.basket': 'Basket', 'hobby.musica': 'Musica',
    'hobby.danza': 'Danza', 'hobby.viaggiare': 'Viaggiare', 'hobby.standup': 'Stand-up',
    'hobby.sci': 'Sci', 'hobby.tecnologia': 'Tecnologia', 'hobby.lingue': 'Lingue',
    /* Experience */
    'exp.tag': 'Percorso', 'exp.subtitle': 'Il mio percorso accademico e professionale',
    'tl.1999.badge': 'Inizio', 'tl.1999.date': '23 Settembre 1999',
    'tl.1999.title': 'Nascita', 'tl.1999.text': 'Sono nato il 23 settembre 1999.',
    'tl.2018d.badge': 'Diploma', 'tl.2018d.date': 'Giugno 2018',
    'tl.2018d.title': 'Diploma IIS Belluzzi',
    'tl.2018d.text': 'Diploma in Informatica e Telecomunicazioni presso l\'Istituto IIS Belluzzi di Bologna.',
    'tl.2018c.badge': 'Lavoro', 'tl.2018c.title': 'Web Designer — Cineca',
    'tl.2018c.text': 'Prima esperienza lavorativa come Web Designer presso Cineca, uno dei maggiori centri di calcolo in Europa.',
    'tl.2021.badge': 'Laurea', 'tl.2021.date': 'Dicembre 2021',
    'tl.2021.title': 'Laurea in Ingegneria Informatica',
    'tl.2021.text': 'Laureato in Ingegneria Informatica presso l\'Università di Bologna. Tesi sulla coreografia robotica e valutazione artistica automatica.',
    'tl.2022.badge': 'Attuale', 'tl.2022.date': 'Maggio 2022 — Presente',
    'tl.2022.title': 'Sviluppatore Software — Gruppo Finmatica',
    'tl.2022.text': 'Sviluppo di software ERP per la sanità e la pubblica amministrazione. Specializzato in Java, Spring Boot, ZK Framework e iDempiere.',
    /* File buttons */
    'file.attestato.inglese': 'Attestato inglese scuole superiori',
    'file.diploma.medie': 'Diploma Scuole Medie',
    'file.sicurezza.alto': 'Sicurezza Rischio Alto',
    'file.sicurezza.manpower': 'Sicurezza Manpower',
    'file.attestato.laurea': 'Attestato Laurea',
    'file.inglese.b2': 'Inglese B2',
    'file.java.academy': 'Java Academy',
    'file.sicurezza.mod1': 'Sicurezza Mod. 1',
    'file.sicurezza.mod2': 'Sicurezza Mod. 2',
    'file.sicurezza.2022': 'Sicurezza 2022',
    /* Projects */
    'proj.tag': 'Lavori', 'proj.subtitle': 'Alcuni dei progetti più significativi del mio percorso',
    'proj.tesi.date': 'Dicembre 2021', 'proj.tesi.cat': 'Tesi di Laurea',
    'proj.tesi.title': 'Coreografie robotiche e valutazioni artistiche',
    'proj.tesi.desc': 'Tesi triennale sulla coreografia robotica e la valutazione artistica automatica tramite algoritmi di machine learning.',
    'proj.depag.date': 'Maggio 2022', 'proj.depag.cat': 'Aziendale',
    'proj.depag.desc': 'Sistema di pagamenti online PagoPA per sanità e pubblica amministrazione. Soluzione enterprise per la gestione digitale dei pagamenti pubblici.',
    'proj.erp.date': 'Febbraio 2024', 'proj.erp.cat': 'Aziendale',
    'proj.erp.desc': 'Enterprise Resource Planning completo per aziende sanitarie. Sistema integrato per la gestione di risorse, processi e dati in ambito sanitario.',
    'proj.tesina.cat': 'Scolastico', 'proj.tesina.tech': 'Messaggistica',
    'proj.tesina.desc': 'Progetto di tesina scolastica incentrato sullo sviluppo di un chatbot e sistemi di messaggistica istantanea.',
    /* Project links */
    'link.video': 'Video', 'link.download': 'Scarica', 'link.live': 'Sito Live', 'link.docs': 'Documenti',
    /* Gallery */
    'gallery.tag': 'Momenti', 'gallery.subtitle': 'Alcuni momenti della mia vita',
    /* Contact */
    'contact.tag': 'Contatti', 'contact.subtitle': 'Vuoi collaborare o semplicemente fare due chiacchiere?',
    'contact.info.title': 'Parliamoci!',
    'contact.info.text': 'Sono sempre aperto a nuove opportunità, collaborazioni e progetti interessanti. Non esitare a contattarmi.',
    'contact.phone.label': 'Telefono', 'contact.city.label': 'Città',
    'contact.city.value': 'Bologna (BO) 40131, Italia',
    'form.nome': 'Nome', 'form.cognome': 'Cognome',
    'form.message': 'Messaggio', 'form.submit': 'Invia Messaggio',
    'form.sending': 'Invio in corso…',
    'form.success.title': 'Messaggio inviato!',
    'form.success.text': 'Grazie per avermi scritto, ti rispondo al più presto.',
    /* Footer */
    'footer.copy': '© 2024 Mattia Marcanti. Tutti i diritti riservati.',
    /* Aria */
    'aria.hamburger': 'Apri menu', 'aria.backtop': 'Torna in cima',
    'aria.prev': 'Precedente', 'aria.next': 'Successivo', 'aria.downloadcv': 'Scarica CV',
  },

  /* ──────────── ENGLISH ──────────── */
  en: {
    'nav.about': 'About me', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
    'nav.gallery': 'Gallery', 'nav.contact': 'Contact',
    'nav.webapp': 'Web App', 'nav.reserved': 'Private Area', 'nav.curriculum': 'Resume',
    'hero.badge': 'Available for new opportunities',
    'hero.subtitle': 'Software Developer <span class="sep">·</span> Computer Engineer',
    'hero.discover': 'Discover more',
    'section.about.title': 'About Me',
    'section.exp.title': 'Experience',
    'section.proj.title': 'Projects',
    'section.gallery.title': 'Gallery',
    'section.contact.title': 'Get in Touch',
    'about.tag': 'About me',
    'about.subtitle': 'Computer engineer passionate about code and design',
    'bento.formation.title': 'Education',
    'bento.formation.text': 'Graduated in <strong>Computer Engineering</strong> at the University of Bologna (Unibo), with a focus on complex software systems, web development and artificial intelligence.',
    'bento.formation.tag2': "Bachelor's Degree",
    'bento.itknowledge.title': 'IT Knowledge',
    'bento.graphic.title': 'Graphics & Design',
    'bento.hobby.title': 'Hobbies & Passions',
    'hobby.calcio': 'Football', 'hobby.basket': 'Basketball', 'hobby.musica': 'Music',
    'hobby.danza': 'Dance', 'hobby.viaggiare': 'Travelling', 'hobby.standup': 'Stand-up',
    'hobby.sci': 'Skiing', 'hobby.tecnologia': 'Technology', 'hobby.lingue': 'Languages',
    'exp.tag': 'Journey', 'exp.subtitle': 'My academic and professional journey',
    'tl.1999.badge': 'Start', 'tl.1999.date': 'September 23, 1999',
    'tl.1999.title': 'Birth', 'tl.1999.text': 'Born on September 23, 1999.',
    'tl.2018d.badge': 'Diploma', 'tl.2018d.date': 'June 2018',
    'tl.2018d.title': 'High School Diploma IIS Belluzzi',
    'tl.2018d.text': 'Diploma in Computer Science and Telecommunications at IIS Belluzzi Institute in Bologna.',
    'tl.2018c.badge': 'Work', 'tl.2018c.title': 'Web Designer — Cineca',
    'tl.2018c.text': 'First work experience as a Web Designer at Cineca, one of the largest computing centres in Europe.',
    'tl.2021.badge': 'Degree', 'tl.2021.date': 'December 2021',
    'tl.2021.title': 'Degree in Computer Engineering',
    'tl.2021.text': 'Graduated in Computer Engineering at the University of Bologna. Thesis on robotic choreography and automatic artistic evaluation.',
    'tl.2022.badge': 'Current', 'tl.2022.date': 'May 2022 — Present',
    'tl.2022.title': 'Software Developer — Finmatica Group',
    'tl.2022.text': 'ERP software development for healthcare and public administration. Specialized in Java, Spring Boot, ZK Framework and iDempiere.',
    'file.attestato.inglese': 'High School English Certificate',
    'file.diploma.medie': 'Middle School Diploma',
    'file.sicurezza.alto': 'High Risk Safety Certificate',
    'file.sicurezza.manpower': 'Manpower Safety Certificate',
    'file.attestato.laurea': 'Degree Certificate',
    'file.inglese.b2': 'English B2',
    'file.java.academy': 'Java Academy',
    'file.sicurezza.mod1': 'Safety Module 1',
    'file.sicurezza.mod2': 'Safety Module 2',
    'file.sicurezza.2022': 'Safety 2022',
    'proj.tag': 'Works', 'proj.subtitle': 'Some of the most significant projects of my career',
    'proj.tesi.date': 'December 2021', 'proj.tesi.cat': "Bachelor's Thesis",
    'proj.tesi.title': 'Robotic Choreography & Artistic Evaluations',
    'proj.tesi.desc': "Bachelor's thesis on robotic choreography and automatic artistic evaluation using machine learning algorithms.",
    'proj.depag.date': 'May 2022', 'proj.depag.cat': 'Corporate',
    'proj.depag.desc': 'PagoPA online payment system for healthcare and public administration. Enterprise solution for digital management of public payments.',
    'proj.erp.date': 'February 2024', 'proj.erp.cat': 'Corporate',
    'proj.erp.desc': 'Complete Enterprise Resource Planning for healthcare companies. Integrated system for resource, process and data management in the healthcare sector.',
    'proj.tesina.cat': 'School', 'proj.tesina.tech': 'Messaging',
    'proj.tesina.desc': 'School paper project focused on developing a chatbot and instant messaging systems.',
    'link.video': 'Video', 'link.download': 'Download', 'link.live': 'Live Site', 'link.docs': 'Docs',
    'gallery.tag': 'Moments', 'gallery.subtitle': 'Some moments of my life',
    'contact.tag': 'Contact', 'contact.subtitle': 'Want to collaborate or just have a chat?',
    'contact.info.title': "Let's talk!",
    'contact.info.text': "I'm always open to new opportunities, collaborations and interesting projects. Don't hesitate to contact me.",
    'contact.phone.label': 'Phone', 'contact.city.label': 'City',
    'contact.city.value': 'Bologna (BO) 40131, Italy',
    'form.nome': 'First name', 'form.cognome': 'Last name',
    'form.message': 'Message', 'form.submit': 'Send Message',
    'form.sending': 'Sending…',
    'form.success.title': 'Message sent!',
    'form.success.text': "Thanks for writing, I'll reply as soon as possible.",
    'footer.copy': '© 2024 Mattia Marcanti. All Rights Reserved.',
    'aria.hamburger': 'Open menu', 'aria.backtop': 'Back to top',
    'aria.prev': 'Previous', 'aria.next': 'Next', 'aria.downloadcv': 'Download CV',
  },

  /* ──────────── ESPAÑOL ──────────── */
  es: {
    'nav.about': 'Sobre mí', 'nav.experience': 'Experiencia', 'nav.projects': 'Proyectos',
    'nav.gallery': 'Galería', 'nav.contact': 'Contacto',
    'nav.webapp': 'Web App', 'nav.reserved': 'Área Reservada', 'nav.curriculum': 'Currículum',
    'hero.badge': 'Disponible para nuevas oportunidades',
    'hero.subtitle': 'Desarrollador de Software <span class="sep">·</span> Ingeniero Informático',
    'hero.discover': 'Descubre más',
    'section.about.title': 'Sobre Mí',
    'section.exp.title': 'Experiencia',
    'section.proj.title': 'Proyectos',
    'section.gallery.title': 'Galería',
    'section.contact.title': 'Contáctame',
    'about.tag': 'Sobre mí',
    'about.subtitle': 'Ingeniero informático apasionado por el código y el diseño',
    'bento.formation.title': 'Formación',
    'bento.formation.text': 'Graduado en <strong>Ingeniería Informática</strong> en la Universidad de Bolonia (Unibo), con foco en sistemas software complejos, desarrollo web e inteligencia artificial.',
    'bento.formation.tag2': 'Grado Universitario',
    'bento.itknowledge.title': 'Conocimientos IT',
    'bento.graphic.title': 'Gráfica & Diseño',
    'bento.hobby.title': 'Aficiones & Pasiones',
    'hobby.calcio': 'Fútbol', 'hobby.basket': 'Baloncesto', 'hobby.musica': 'Música',
    'hobby.danza': 'Danza', 'hobby.viaggiare': 'Viajar', 'hobby.standup': 'Stand-up',
    'hobby.sci': 'Esquí', 'hobby.tecnologia': 'Tecnología', 'hobby.lingue': 'Idiomas',
    'exp.tag': 'Trayectoria', 'exp.subtitle': 'Mi trayectoria académica y profesional',
    'tl.1999.badge': 'Inicio', 'tl.1999.date': '23 de septiembre de 1999',
    'tl.1999.title': 'Nacimiento', 'tl.1999.text': 'Nací el 23 de septiembre de 1999.',
    'tl.2018d.badge': 'Diploma', 'tl.2018d.date': 'Junio 2018',
    'tl.2018d.title': 'Bachillerato IIS Belluzzi',
    'tl.2018d.text': 'Diploma en Informática y Telecomunicaciones en el Instituto IIS Belluzzi de Bolonia.',
    'tl.2018c.badge': 'Trabajo', 'tl.2018c.title': 'Web Designer — Cineca',
    'tl.2018c.text': 'Primera experiencia laboral como Diseñador Web en Cineca, uno de los mayores centros de cálculo de Europa.',
    'tl.2021.badge': 'Graduación', 'tl.2021.date': 'Diciembre 2021',
    'tl.2021.title': 'Grado en Ingeniería Informática',
    'tl.2021.text': 'Graduado en Ingeniería Informática en la Universidad de Bolonia. Tesis sobre coreografía robótica y evaluación artística automática.',
    'tl.2022.badge': 'Actual', 'tl.2022.date': 'Mayo 2022 — Presente',
    'tl.2022.title': 'Desarrollador de Software — Grupo Finmatica',
    'tl.2022.text': 'Desarrollo de software ERP para sanidad y administración pública. Especializado en Java, Spring Boot, ZK Framework e iDempiere.',
    'file.attestato.inglese': 'Certificado de Inglés Bachillerato',
    'file.diploma.medie': 'Diploma de Secundaria',
    'file.sicurezza.alto': 'Certificado Seguridad Riesgo Alto',
    'file.sicurezza.manpower': 'Certificado Seguridad Manpower',
    'file.attestato.laurea': 'Certificado de Grado',
    'file.inglese.b2': 'Inglés B2',
    'file.java.academy': 'Java Academy',
    'file.sicurezza.mod1': 'Seguridad Mód. 1',
    'file.sicurezza.mod2': 'Seguridad Mód. 2',
    'file.sicurezza.2022': 'Seguridad 2022',
    'proj.tag': 'Trabajos', 'proj.subtitle': 'Algunos de los proyectos más significativos de mi carrera',
    'proj.tesi.date': 'Diciembre 2021', 'proj.tesi.cat': 'Tesis de Grado',
    'proj.tesi.title': 'Coreografías Robóticas y Evaluaciones Artísticas',
    'proj.tesi.desc': 'Tesis de grado sobre coreografía robótica y evaluación artística automática mediante algoritmos de machine learning.',
    'proj.depag.date': 'Mayo 2022', 'proj.depag.cat': 'Empresarial',
    'proj.depag.desc': 'Sistema de pagos online PagoPA para sanidad y administración pública. Solución enterprise para la gestión digital de pagos públicos.',
    'proj.erp.date': 'Febrero 2024', 'proj.erp.cat': 'Empresarial',
    'proj.erp.desc': 'Planificación de Recursos Empresariales completa para empresas sanitarias. Sistema integrado para gestión de recursos, procesos y datos en el sector sanitario.',
    'proj.tesina.cat': 'Escolar', 'proj.tesina.tech': 'Mensajería',
    'proj.tesina.desc': 'Proyecto escolar centrado en el desarrollo de un chatbot y sistemas de mensajería instantánea.',
    'link.video': 'Vídeo', 'link.download': 'Descargar', 'link.live': 'Sitio en Vivo', 'link.docs': 'Documentos',
    'gallery.tag': 'Momentos', 'gallery.subtitle': 'Algunos momentos de mi vida',
    'contact.tag': 'Contacto', 'contact.subtitle': '¿Quieres colaborar o simplemente charlar?',
    'contact.info.title': '¡Hablemos!',
    'contact.info.text': 'Siempre estoy abierto a nuevas oportunidades, colaboraciones y proyectos interesantes. No dudes en contactarme.',
    'contact.phone.label': 'Teléfono', 'contact.city.label': 'Ciudad',
    'contact.city.value': 'Bolonia (BO) 40131, Italia',
    'form.nome': 'Nombre', 'form.cognome': 'Apellido',
    'form.message': 'Mensaje', 'form.submit': 'Enviar Mensaje',
    'form.sending': 'Enviando…',
    'form.success.title': '¡Mensaje enviado!',
    'form.success.text': 'Gracias por escribirme, te respondo lo antes posible.',
    'footer.copy': '© 2024 Mattia Marcanti. Todos los derechos reservados.',
    'aria.hamburger': 'Abrir menú', 'aria.backtop': 'Volver arriba',
    'aria.prev': 'Anterior', 'aria.next': 'Siguiente', 'aria.downloadcv': 'Descargar CV',
  },

  /* ──────────── FRANÇAIS ──────────── */
  fr: {
    'nav.about': 'À propos', 'nav.experience': 'Expérience', 'nav.projects': 'Projets',
    'nav.gallery': 'Galerie', 'nav.contact': 'Contact',
    'nav.webapp': 'Web App', 'nav.reserved': 'Espace Réservé', 'nav.curriculum': 'CV',
    'hero.badge': 'Disponible pour de nouvelles opportunités',
    'hero.subtitle': 'Développeur Logiciel <span class="sep">·</span> Ingénieur Informatique',
    'hero.discover': 'Découvrir plus',
    'section.about.title': 'À Propos',
    'section.exp.title': 'Expérience',
    'section.proj.title': 'Projets',
    'section.gallery.title': 'Galerie',
    'section.contact.title': 'Me Contacter',
    'about.tag': 'À propos',
    'about.subtitle': 'Ingénieur informatique passionné par le code et le design',
    'bento.formation.title': 'Formation',
    'bento.formation.text': "Diplômé en <strong>Ingénierie Informatique</strong> à l'Université de Bologne (Unibo), avec un focus sur les systèmes logiciels complexes, le développement web et l'intelligence artificielle.",
    'bento.formation.tag2': 'Licence',
    'bento.itknowledge.title': 'Compétences IT',
    'bento.graphic.title': 'Graphisme & Design',
    'bento.hobby.title': 'Loisirs & Passions',
    'hobby.calcio': 'Football', 'hobby.basket': 'Basket', 'hobby.musica': 'Musique',
    'hobby.danza': 'Danse', 'hobby.viaggiare': 'Voyager', 'hobby.standup': 'Stand-up',
    'hobby.sci': 'Ski', 'hobby.tecnologia': 'Technologie', 'hobby.lingue': 'Langues',
    'exp.tag': 'Parcours', 'exp.subtitle': 'Mon parcours académique et professionnel',
    'tl.1999.badge': 'Début', 'tl.1999.date': '23 Septembre 1999',
    'tl.1999.title': 'Naissance', 'tl.1999.text': 'Né le 23 septembre 1999.',
    'tl.2018d.badge': 'Diplôme', 'tl.2018d.date': 'Juin 2018',
    'tl.2018d.title': 'Baccalauréat IIS Belluzzi',
    'tl.2018d.text': "Diplôme en Informatique et Télécommunications à l'Institut IIS Belluzzi de Bologne.",
    'tl.2018c.badge': 'Travail', 'tl.2018c.title': 'Web Designer — Cineca',
    'tl.2018c.text': "Première expérience professionnelle en tant que Web Designer chez Cineca, l'un des plus grands centres de calcul d'Europe.",
    'tl.2021.badge': 'Diplôme', 'tl.2021.date': 'Décembre 2021',
    'tl.2021.title': "Diplôme en Ingénierie Informatique",
    'tl.2021.text': "Diplômé en Ingénierie Informatique à l'Université de Bologne. Thèse sur la chorégraphie robotique et l'évaluation artistique automatique.",
    'tl.2022.badge': 'Actuel', 'tl.2022.date': 'Mai 2022 — Présent',
    'tl.2022.title': 'Développeur Logiciel — Groupe Finmatica',
    'tl.2022.text': "Développement de logiciels ERP pour la santé et l'administration publique. Spécialisé en Java, Spring Boot, ZK Framework et iDempiere.",
    'file.attestato.inglese': 'Certificat Anglais Lycée',
    'file.diploma.medie': 'Diplôme Collège',
    'file.sicurezza.alto': 'Certificat Sécurité Risque Élevé',
    'file.sicurezza.manpower': 'Certificat Sécurité Manpower',
    'file.attestato.laurea': 'Attestation de Diplôme',
    'file.inglese.b2': 'Anglais B2',
    'file.java.academy': 'Java Academy',
    'file.sicurezza.mod1': 'Sécurité Mod. 1',
    'file.sicurezza.mod2': 'Sécurité Mod. 2',
    'file.sicurezza.2022': 'Sécurité 2022',
    'proj.tag': 'Travaux', 'proj.subtitle': 'Quelques-uns des projets les plus significatifs de mon parcours',
    'proj.tesi.date': 'Décembre 2021', 'proj.tesi.cat': 'Mémoire de Licence',
    'proj.tesi.title': 'Chorégraphies Robotiques & Évaluations Artistiques',
    'proj.tesi.desc': "Mémoire de licence sur la chorégraphie robotique et l'évaluation artistique automatique via des algorithmes de machine learning.",
    'proj.depag.date': 'Mai 2022', 'proj.depag.cat': 'Professionnel',
    'proj.depag.desc': "Système de paiement en ligne PagoPA pour la santé et l'administration publique. Solution enterprise pour la gestion numérique des paiements publics.",
    'proj.erp.date': 'Février 2024', 'proj.erp.cat': 'Professionnel',
    'proj.erp.desc': "Planification des ressources d'entreprise complète pour les entreprises de santé. Système intégré pour la gestion des ressources, processus et données dans le domaine de la santé.",
    'proj.tesina.cat': 'Scolaire', 'proj.tesina.tech': 'Messagerie',
    'proj.tesina.desc': "Projet scolaire axé sur le développement d'un chatbot et de systèmes de messagerie instantanée.",
    'link.video': 'Vidéo', 'link.download': 'Télécharger', 'link.live': 'Site en Direct', 'link.docs': 'Documents',
    'gallery.tag': 'Moments', 'gallery.subtitle': 'Quelques moments de ma vie',
    'contact.tag': 'Contact', 'contact.subtitle': 'Vous voulez collaborer ou simplement discuter ?',
    'contact.info.title': 'Parlons !',
    'contact.info.text': "Je suis toujours ouvert à de nouvelles opportunités, collaborations et projets intéressants. N'hésitez pas à me contacter.",
    'contact.phone.label': 'Téléphone', 'contact.city.label': 'Ville',
    'contact.city.value': 'Bologne (BO) 40131, Italie',
    'form.nome': 'Prénom', 'form.cognome': 'Nom',
    'form.message': 'Message', 'form.submit': 'Envoyer le message',
    'form.sending': 'Envoi en cours…',
    'form.success.title': 'Message envoyé !',
    'form.success.text': "Merci de m'avoir écrit, je vous réponds dès que possible.",
    'footer.copy': '© 2024 Mattia Marcanti. Tous droits réservés.',
    'aria.hamburger': 'Ouvrir le menu', 'aria.backtop': 'Retour en haut',
    'aria.prev': 'Précédent', 'aria.next': 'Suivant', 'aria.downloadcv': 'Télécharger CV',
  },

  /* ──────────── 中文 ──────────── */
  zh: {
    'nav.about': '关于我', 'nav.experience': '工作经历', 'nav.projects': '项目',
    'nav.gallery': '图库', 'nav.contact': '联系我',
    'nav.webapp': 'Web 应用', 'nav.reserved': '专属区域', 'nav.curriculum': '简历',
    'hero.badge': '欢迎新的合作机会',
    'hero.subtitle': '软件开发工程师 <span class="sep">·</span> 计算机工程师',
    'hero.discover': '了解更多',
    'section.about.title': '关于我',
    'section.exp.title': '工作经历',
    'section.proj.title': '项目作品',
    'section.gallery.title': '图片集',
    'section.contact.title': '联系我',
    'about.tag': '关于我',
    'about.subtitle': '热爱代码与设计的计算机工程师',
    'bento.formation.title': '教育背景',
    'bento.formation.text': '毕业于博洛尼亚大学（Unibo）<strong>计算机工程</strong>专业，专注于复杂软件系统、网页开发与人工智能领域。',
    'bento.formation.tag2': '学士学位',
    'bento.itknowledge.title': 'IT 技术',
    'bento.graphic.title': '图形与设计',
    'bento.hobby.title': '爱好与热情',
    'hobby.calcio': '足球', 'hobby.basket': '篮球', 'hobby.musica': '音乐',
    'hobby.danza': '舞蹈', 'hobby.viaggiare': '旅行', 'hobby.standup': '脱口秀',
    'hobby.sci': '滑雪', 'hobby.tecnologia': '科技', 'hobby.lingue': '语言',
    'exp.tag': '经历', 'exp.subtitle': '我的学术与职业历程',
    'tl.1999.badge': '开始', 'tl.1999.date': '1999年9月23日',
    'tl.1999.title': '出生', 'tl.1999.text': '1999年9月23日出生。',
    'tl.2018d.badge': '文凭', 'tl.2018d.date': '2018年6月',
    'tl.2018d.title': 'IIS Belluzzi 高中文凭',
    'tl.2018d.text': '在博洛尼亚 IIS Belluzzi 学院获得计算机与电信专业文凭。',
    'tl.2018c.badge': '工作', 'tl.2018c.title': 'Web 设计师 — Cineca',
    'tl.2018c.text': '在欧洲最大计算中心之一 Cineca 担任 Web 设计师的第一份工作经历。',
    'tl.2021.badge': '学位', 'tl.2021.date': '2021年12月',
    'tl.2021.title': '计算机工程学士学位',
    'tl.2021.text': '在博洛尼亚大学获得计算机工程学位。论文主题为机器人舞蹈编排与自动艺术评估。',
    'tl.2022.badge': '当前', 'tl.2022.date': '2022年5月 — 至今',
    'tl.2022.title': '软件开发工程师 — Finmatica 集团',
    'tl.2022.text': '为医疗卫生和公共行政开发 ERP 软件。专注于 Java、Spring Boot、ZK Framework 和 iDempiere。',
    'file.attestato.inglese': '高中英语证书',
    'file.diploma.medie': '初中文凭',
    'file.sicurezza.alto': '高风险安全证书',
    'file.sicurezza.manpower': '人力资源安全证书',
    'file.attestato.laurea': '学位证书',
    'file.inglese.b2': '英语B2',
    'file.java.academy': 'Java 学院',
    'file.sicurezza.mod1': '安全模块 1',
    'file.sicurezza.mod2': '安全模块 2',
    'file.sicurezza.2022': '安全证书 2022',
    'proj.tag': '作品', 'proj.subtitle': '我职业生涯中最具代表性的一些项目',
    'proj.tesi.date': '2021年12月', 'proj.tesi.cat': '学士论文',
    'proj.tesi.title': '机器人舞蹈编排与艺术评估',
    'proj.tesi.desc': '关于机器人舞蹈编排与机器学习算法自动艺术评估的学士论文。',
    'proj.depag.date': '2022年5月', 'proj.depag.cat': '企业项目',
    'proj.depag.desc': '面向医疗和公共行政的 PagoPA 在线支付系统，用于公共数字支付管理的企业级解决方案。',
    'proj.erp.date': '2024年2月', 'proj.erp.cat': '企业项目',
    'proj.erp.desc': '面向医疗企业的完整企业资源规划系统，用于医疗领域资源、流程和数据管理的集成系统。',
    'proj.tesina.cat': '学校项目', 'proj.tesina.tech': '即时通讯',
    'proj.tesina.desc': '以开发聊天机器人和即时通讯系统为核心的学校课题项目。',
    'link.video': '视频', 'link.download': '下载', 'link.live': '在线网站', 'link.docs': '文档',
    'gallery.tag': '时刻', 'gallery.subtitle': '我生活中的一些瞬间',
    'contact.tag': '联系', 'contact.subtitle': '想要合作或只是聊聊？',
    'contact.info.title': '联系我！',
    'contact.info.text': '我随时欢迎新的机会、合作和有趣的项目，请随时与我联系。',
    'contact.phone.label': '电话', 'contact.city.label': '城市',
    'contact.city.value': '博洛尼亚 (BO) 40131，意大利',
    'form.nome': '名字', 'form.cognome': '姓氏',
    'form.message': '留言', 'form.submit': '发送消息',
    'form.sending': '发送中…',
    'form.success.title': '消息已发送！',
    'form.success.text': '感谢您的留言，我会尽快回复。',
    'footer.copy': '© 2024 Mattia Marcanti. 版权所有。',
    'aria.hamburger': '打开菜单', 'aria.backtop': '返回顶部',
    'aria.prev': '上一张', 'aria.next': '下一张', 'aria.downloadcv': '下载简历',
  },

  /* ──────────── العربية ──────────── */
  ar: {
    /* Nav */
    'nav.about': 'عني', 'nav.experience': 'الخبرة', 'nav.projects': 'المشاريع',
    'nav.gallery': 'المعرض', 'nav.contact': 'اتصل بي',
    'nav.webapp': 'تطبيق ويب', 'nav.reserved': 'منطقة خاصة', 'nav.curriculum': 'السيرة الذاتية',
    /* Hero */
    'hero.badge': 'متاح لفرص جديدة',
    'hero.subtitle': 'مطوّر برمجيات <span class="sep">·</span> مهندس حاسوب',
    'hero.discover': 'اكتشف المزيد',
    /* Section titles */
    'section.about.title': 'من أنا',
    'section.exp.title': 'الخبرة',
    'section.proj.title': 'المشاريع',
    'section.gallery.title': 'المعرض',
    'section.contact.title': 'تواصل معي',
    /* About */
    'about.tag': 'من أنا',
    'about.subtitle': 'مهندس حاسوب شغوف بالبرمجة والتصميم',
    'bento.formation.title': 'التعليم',
    'bento.formation.text': 'تخرّجت في <strong>هندسة الحاسوب</strong> من جامعة بولونيا (Unibo)، مع التركيز على أنظمة البرمجيات المعقدة وتطوير الويب والذكاء الاصطناعي.',
    'bento.formation.tag2': 'درجة البكالوريوس',
    'bento.itknowledge.title': 'المعرفة التقنية',
    'bento.graphic.title': 'الرسوم والتصميم',
    'bento.hobby.title': 'الهوايات والاهتمامات',
    'hobby.calcio': 'كرة القدم', 'hobby.basket': 'كرة السلة', 'hobby.musica': 'الموسيقى',
    'hobby.danza': 'الرقص', 'hobby.viaggiare': 'السفر', 'hobby.standup': 'ستاند أب',
    'hobby.sci': 'التزلج', 'hobby.tecnologia': 'التكنولوجيا', 'hobby.lingue': 'اللغات',
    /* Experience */
    'exp.tag': 'المسيرة', 'exp.subtitle': 'مسيرتي الأكاديمية والمهنية',
    'tl.1999.badge': 'البداية', 'tl.1999.date': '23 سبتمبر 1999',
    'tl.1999.title': 'الميلاد', 'tl.1999.text': 'وُلدت في 23 سبتمبر 1999.',
    'tl.2018d.badge': 'دبلوم', 'tl.2018d.date': 'يونيو 2018',
    'tl.2018d.title': 'دبلوم معهد IIS Belluzzi',
    'tl.2018d.text': 'دبلوم في علوم الحاسوب والاتصالات من معهد IIS Belluzzi في بولونيا.',
    'tl.2018c.badge': 'عمل', 'tl.2018c.title': 'مصمم ويب — Cineca',
    'tl.2018c.text': 'أول تجربة عمل كمصمم ويب في Cineca، أحد أكبر مراكز الحوسبة في أوروبا.',
    'tl.2021.badge': 'شهادة', 'tl.2021.date': 'ديسمبر 2021',
    'tl.2021.title': 'بكالوريوس هندسة الحاسوب',
    'tl.2021.text': 'تخرّجت في هندسة الحاسوب من جامعة بولونيا. أطروحة حول تصميم رقصات الروبوت والتقييم الفني التلقائي.',
    'tl.2022.badge': 'حالياً', 'tl.2022.date': 'مايو 2022 — الحاضر',
    'tl.2022.title': 'مطوّر برمجيات — مجموعة Finmatica',
    'tl.2022.text': 'تطوير برمجيات ERP للرعاية الصحية والإدارة العامة. متخصص في Java وSpring Boot وZK Framework وiDempiere.',
    /* File buttons */
    'file.attestato.inglese': 'شهادة اللغة الإنجليزية الثانوية',
    'file.diploma.medie': 'شهادة المرحلة المتوسطة',
    'file.sicurezza.alto': 'شهادة السلامة عالية المخاطر',
    'file.sicurezza.manpower': 'شهادة سلامة Manpower',
    'file.attestato.laurea': 'شهادة التخرج',
    'file.inglese.b2': 'الإنجليزية B2',
    'file.java.academy': 'أكاديمية Java',
    'file.sicurezza.mod1': 'السلامة وحدة 1',
    'file.sicurezza.mod2': 'السلامة وحدة 2',
    'file.sicurezza.2022': 'السلامة 2022',
    /* Projects */
    'proj.tag': 'أعمال', 'proj.subtitle': 'بعض أبرز المشاريع في مسيرتي',
    'proj.tesi.date': 'ديسمبر 2021', 'proj.tesi.cat': 'أطروحة بكالوريوس',
    'proj.tesi.title': 'تصميم رقصات الروبوت والتقييمات الفنية',
    'proj.tesi.desc': 'أطروحة بكالوريوس حول تصميم رقصات الروبوت والتقييم الفني التلقائي باستخدام خوارزميات التعلم الآلي.',
    'proj.depag.date': 'مايو 2022', 'proj.depag.cat': 'مؤسسي',
    'proj.depag.desc': 'نظام الدفع الإلكتروني PagoPA للرعاية الصحية والإدارة العامة. حل مؤسسي للإدارة الرقمية للمدفوعات العامة.',
    'proj.erp.date': 'فبراير 2024', 'proj.erp.cat': 'مؤسسي',
    'proj.erp.desc': 'نظام تخطيط موارد المؤسسات الشامل للشركات الصحية. نظام متكامل لإدارة الموارد والعمليات والبيانات في القطاع الصحي.',
    'proj.tesina.cat': 'مدرسي', 'proj.tesina.tech': 'المراسلة',
    'proj.tesina.desc': 'مشروع مدرسي يركّز على تطوير روبوت محادثة وأنظمة المراسلة الفورية.',
    /* Project links */
    'link.video': 'فيديو', 'link.download': 'تحميل', 'link.live': 'الموقع المباشر', 'link.docs': 'المستندات',
    /* Gallery */
    'gallery.tag': 'لحظات', 'gallery.subtitle': 'بعض لحظات من حياتي',
    /* Contact */
    'contact.tag': 'التواصل', 'contact.subtitle': 'هل تريد التعاون أو مجرد الدردشة؟',
    'contact.info.title': 'لنتحدث!',
    'contact.info.text': 'أنا دائماً منفتح على الفرص والتعاونات والمشاريع المثيرة للاهتمام. لا تتردد في التواصل معي.',
    'contact.phone.label': 'الهاتف', 'contact.city.label': 'المدينة',
    'contact.city.value': 'بولونيا (BO) 40131، إيطاليا',
    'form.nome': 'الاسم', 'form.cognome': 'اللقب',
    'form.message': 'الرسالة', 'form.submit': 'إرسال الرسالة',
    'form.sending': 'جارٍ الإرسال…',
    'form.success.title': 'تم إرسال الرسالة!',
    'form.success.text': 'شكراً لرسالتك، سأرد عليك في أقرب وقت.',
    /* Footer */
    'footer.copy': '© 2024 Mattia Marcanti. جميع الحقوق محفوظة.',
    /* Aria */
    'aria.hamburger': 'فتح القائمة', 'aria.backtop': 'العودة للأعلى',
    'aria.prev': 'السابق', 'aria.next': 'التالي', 'aria.downloadcv': 'تحميل السيرة الذاتية',
  }
};

/* ═══════════════════════════════════════════════
   LANGUAGE FLAGS & LABELS
   ═══════════════════════════════════════════════ */
const langMeta = {
  it: { flagSrc: 'https://flagcdn.com/20x15/it.png', code: 'IT', label: 'Italiano' },
  en: { flagSrc: 'https://flagcdn.com/20x15/gb.png', code: 'EN', label: 'English' },
  es: { flagSrc: 'https://flagcdn.com/20x15/es.png', code: 'ES', label: 'Español' },
  fr: { flagSrc: 'https://flagcdn.com/20x15/fr.png', code: 'FR', label: 'Français' },
  zh: { flagSrc: 'https://flagcdn.com/20x15/cn.png', code: 'ZH', label: '中文' },
  ar: { flagSrc: 'https://flagcdn.com/20x15/sa.png', code: 'AR', label: 'العربية' },
};

/* ═══════════════════════════════════════════════
   APPLY LANGUAGE
   ═══════════════════════════════════════════════ */
function applyLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  /* — text content — */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* — inner HTML (elements with tags like <strong> or <span>) — */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* — aria-label — */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  /* — <html> lang attribute — */
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  /* — update switcher button UI — */
  const meta = langMeta[lang];
  const flagEl = document.getElementById('langFlag');
  const codeEl = document.getElementById('langCode');
  if (flagEl) { flagEl.src = meta.flagSrc; flagEl.alt = meta.code; }
  if (codeEl) codeEl.textContent = meta.label;

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* — persist choice — */
  localStorage.setItem('mm-lang', lang);
}

/* ═══════════════════════════════════════════════
   INIT SWITCHER
   ═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');

  /* Toggle dropdown */
  btn?.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  /* Select language */
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      applyLanguage(opt.dataset.lang);
      dropdown.classList.remove('open');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close on outside click */
  document.addEventListener('click', () => {
    dropdown?.classList.remove('open');
    btn?.setAttribute('aria-expanded', 'false');
  });

  /* Load saved language or default to Italian */
  const saved = localStorage.getItem('mm-lang') || 'it';
  applyLanguage(saved);
});
