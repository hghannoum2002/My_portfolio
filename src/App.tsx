
import { useState } from 'react';
import './App.css';

const projects = [
  {
    number: '01',
    name: 'TutorsLeb',
    type: 'APPLICATION WEB FULL STACK',
    description: 'Une plateforme de tutorat permettant de mettre en relation des étudiants et des tuteurs grâce à une interface web et des services backend.',
    tech: ['AngularJS', 'ASP.NET', 'API REST', 'Azure'],
    link: 'https://github.com/hghannoum2002/Tutors_FE'
  },
  {
    number: '02',
    name: 'MR Shop',
    type: 'APPLICATION WEB FULL STACK',
    description: 'Conception et développement d\'une application e-commerce full-stack avec Angular et Node.js, intégrant la gestion des produits, les fonctionnalités d\'achat et une interface utilisateur responsive et multilingue disponible en trois langues.',
    tech: ['AngularJS', 'i18n', 'NodeJs'],
    link: 'https://github.com/hghannoum2002/Mrshop_website'
  },
  {
    number: '03',
    name: 'Communication réseau en Java',
    type: 'DÉVELOPPEMENT LOGICIEL',
    description: 'Expérimentation des communications réseau en Java, avec évolution d’une transmission UDP vers TCP et étude de la fiabilité des échanges.',
    tech: ['Java', 'UDP', 'TCP'],
    link: 'https://github.com/hghannoum2002/Reliable-UDP'
  },
  {
    number: '04',
    name: 'Applications Educative',
    type: 'Application Desktop',
    description: 'Développement d\'une application éducative en C# pour enseigner les sciences et les mathématiques aux enfants, avec des exercices interactifs et des activités pédagogiques adaptées.',
    tech: ['C#', 'XML'],
    link: 'https://github.com/hghannoum2002/Heroes_School'
  },
];

const skillGroups = [
  {
    title: 'Développement frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'AngularJS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend et API',
    skills: ['C#', '.NET / ASP.NET', 'Node.js', 'Java', 'API REST']
  },
  {
    title: 'Données et bases de données',
    skills: ['SQL', 'Python', 'Analyse de données', 'Excel']
  },
  {
    title: 'Outils et environnement',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman']
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Halima, accueil">
          <span className="brand-mark">H</span>
          <span>halima<span className="brand-period">.</span></span>
        </a>

        <button
          className="mobile-menu"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav className={`navigation ${menuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={closeMenu}>À propos</a>
          <a href="#experience" onClick={closeMenu}>Expérience</a>
          <a href="#projects" onClick={closeMenu}>Projets</a>
          <a href="#skills" onClick={closeMenu}>Compétences</a>
          <a className="header-contact" href="#contact" onClick={closeMenu}>
            Contact <span>↗</span>
          </a>
        </nav>
      </header>

      <main>

        {/* ACCUEIL */}
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="available-dot" />
              À LA RECHERCHE D'OPPORTUNITÉS
            </div>

            <p className="overline">INGÉNIEURE LOGICIEL · DÉVELOPPEUSE WEB</p>

            <h1>
              Bonjour, moi c'est Halima.<br />
              Je crée des <span className="headline-highlight">solutions numériques</span><br />
              concrètes et utiles.
            </h1>


           
            
          </div>

          <div className="photo-placeholder hero-photo">

            <img   src={`${import.meta.env.BASE_URL}photo1.jpg`} alt="Portrait de Halima" />

          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="tech-band">
          <div className="wrap tech-band-inner">
            <span className="band-label">TECHNOLOGIES</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>C# / .NET</span>
            <span>Java</span>
            <span>Python</span>
            <span>Git</span>
          </div>
        </section>

        {/* À PROPOS */}
        <section className="about section wrap" id="about">
          <div className="section-label">01 / À PROPOS</div>

          <div className="about-body">
            <div className="photo-placeholder about-photo">
              <img src={`${import.meta.env.BASE_URL}photo2.jpg`} alt="Halima" />
            </div>

            <div className="about-intro">
              <h2>
                Curieuse de nature.<br />
                <span className="muted-heading">Ingénieure de formation.</span>
              </h2>

              <div className="about-text">
                <p>
                 Ingénieure diplômée de l'École des Mines de Saint-Étienne, en double diplôme avec l'Université Libanaise, j'ai développé un parcours solide en informatique et en technologies numériques.

                </p>

               <p>
                  Au cours de ma formation et de mes expériences, j'ai réalisé plusieurs projets en développement logiciel, programmation et développement web, en utilisant différents langages et environnements techniques. Ces expériences m'ont permis de renforcer mes compétences techniques, ma capacité d'analyse et mon aptitude à résoudre des problèmes.
     </p>

                <p>
                  
Passionnée par le développement et l'innovation, j'aime concevoir des applications, explorer de nouvelles technologies et transformer des idées en solutions concrètes.
    </p>
              </div>
            </div>
          </div>

         
        </section>
      {/* EXPÉRIENCE PROFESSIONNELLE */}
      <section className="experience section wrap" id="experience">
        <div className="section-label">02 / EXPÉRIENCE PROFESSIONNELLE</div>

        <div className="experience-main">
          <div className="section-heading">
            <h2>Mon expérience professionnelle<span className="brand-period">.</span></h2>
          </div>

          <div className="timeline">

            {/* PORTALP */}
            <article className="timeline-item">
              <div className="timeline-date">2026</div>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-type">STAGE · 6 MOIS</span>
                <h3>Ingénieure Data Analyst</h3>
                <p className="timeline-location">
                  Portalp · Saint-Égrève, France · Avril 2026 – Septembre 2026
                </p>
                <p>
                  Développement d'un moteur de planification automatique
                  proposant un ordonnancement optimisé des ordres de production.
                  Mise en place d'outils de supervision capacitaire et d'aide
                  à la saisie des commandes pour le service ADV.
                  Automatisation du traitement des données industrielles
                  et optimisation des processus de planification.
                </p>
                <div className="chips">
                  <span>Python</span>
                  <span>SQL</span>
                  <span>Excel</span>
                  <span>VBA</span>
                  <span>SAP</span>
                </div>
              </div>
            </article>

            {/* MINES SAINT-ÉTIENNE */}
            <article className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-type">STAGE DE RECHERCHE · 3 MOIS</span>
                <h3>Projet de recherche</h3>
                <p className="timeline-location">
                  École des Mines de Saint-Étienne · Avril 2025 – Juin 2025
                </p>
                <p>
                  Conception et développement en C d'un système de simulation
                  d'aube reproduisant un réveil naturel. Développement des
                  fonctionnalités permettant de simuler le lever du soleil
                  et de déclencher une alarme selon les paramètres définis.
                  Participation au développement d'une application mobile
                  pour la gestion des paramètres de l'alarme et de
                  l'environnement de sommeil.
                </p>
                <div className="chips">
                  <span>C</span>
                  <span>STM32</span>
                  <span>Embedded C</span>
                  <span>Application mobile</span>
                </div>
              </div>
            </article>

            {/* AECENAR */}
            <article className="timeline-item">
              <div className="timeline-date">2024</div>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-type">STAGE · 3 MOIS</span>
                <h3>Stagiaire en ingénierie système</h3>
                <p className="timeline-location">
                  Aecenar · Tripoli, Liban · Juin 2024 – Août 2024
                </p>
                <p>
                  Connexion du HackRF One aux antennes et réalisation
                  de schémas fonctionnels de la chaîne de communication.
                  Développement en C du logiciel embarqué sur STM32
                  pour assurer le contrôle du système. Participation
                  aux réunions de suivi et coordination avec l'équipe.
                </p>
                <div className="chips">
                  <span>C</span>
                  <span>STM32</span>
                  <span>HackRF One</span>
                  <span>Communication radio</span>
                </div>
              </div>
            </article>

            {/* TELEPATY */}
            <article className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-type">STAGE · 6 MOIS</span>
                <h3>Stagiaire en développement</h3>
                <p className="timeline-location">
                  Telepaty · Tripoli, Liban · Juillet 2023 – Décembre 2023
                </p>
                <p>
                  Développement d'un environnement de simulation numérique
                  à l'aide de Python, C et Unix. Modélisation du comportement
                  du système et participation à la conception d'un jumeau
                  numérique.
                </p>
                <div className="chips">
                  <span>Python</span>
                  <span>C</span>
                  <span>Unix</span>
                  <span>Linux</span>
                  <span>Jumeau numérique</span>
                </div>
              </div>
            </article>

            {/* RADICALX */}
            <article className="timeline-item">
              <div className="timeline-date">2021</div>
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-type">STAGE · 3 MOIS · À DISTANCE</span>
                <h3>Développeuse web</h3>
                <p className="timeline-location">
                  Radicalx · Turquie · Juillet 2021 – Septembre 2021
                </p>
                <p>
                  Développement d'un site web à partir d'une maquette UI/UX
                  conçue sur Figma. Intégration des interfaces utilisateur
                  et transformation des maquettes en pages web fonctionnelles
                  et responsives.
                </p>
                <div className="chips">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Figma</span>
                  <span>UI/UX</span>
                  <span>Développement web</span>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>


        {/* PROJETS */}
        <section className="projects section wrap" id="projects">
          <div className="section-label">03 / PROJETS</div>

          <div className="section-heading projects-heading">
            <h2>Mes réalisations<span className="brand-period">.</span></h2>
            
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.number}>
                <div className="project-visual">
                  <span className="project-index">{p.number}</span>
                  <span className="project-label">{p.type}</span>
                </div>

                <div className="project-card-content">
                  <p className="project-type">{p.type}</p>
                  <h3>{p.name}</h3>
                  <p className="project-desc">{p.description}</p>

                  <div className="chips">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir le projet sur GitHub <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="github-callout">
            <div>
              <span className="section-label">AUTRES PROJETS & RÉALISATIONS</span>
              <h3>Retrouvez-moi sur GitHub.</h3>
              <p>
                Découvrez d'autres projets, expérimentations et travaux
                de programmation.
              </p>
            </div>

            <a
              className="btn-outline"
              href="https://github.com/hghannoum2002"
              target="_blank"
              rel="noreferrer"
            >
              Accéder à mon GitHub ↗
            </a>
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section className="skills section" id="skills">
          <div className="wrap skills-wrap">
            <div className="section-label">04 / COMPÉTENCES</div>

            <div className="section-heading">
              <h2>Technologies & compétences<span className="brand-period">.</span></h2>
              
            </div>

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-top">
                    <span className="skill-square">✳</span>
                    <h3>{group.title}</h3>
                  </div>


                  <div className="chips">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FORMATION & LANGUES */}
        <section className="education section wrap">
          <div className="section-label">05 / FORMATION & LANGUES</div>

          <div className="education-grid">
            <div>
              <h2>Formation<span className="brand-period">.</span></h2>

              <article className="education-item">
                <span className="education-year">DIPLÔME D'INGÉNIEURE</span>
                <h3>Mines Saint-Étienne</h3>
                <p>Diplôme d'ingénieure · Informatique</p>
              </article>

              <article className="education-item">
                <span className="education-year">DOUBLE DIPLÔME</span>
                <h3>Université Libanaise</h3>
                <p>Télécommunications & informatique · Faculté de Génie</p>
              </article>
            </div>

            <div>
              <h2>Langues<span className="brand-period">.</span></h2>

              <div className="language-list">
                <div>
                  <span>Français</span>
                  <b>Professionnel · C1</b>
                </div>
                <div>
                  <span>Anglais</span>
                  <b>Professionnel</b>
                </div>
                <div>
                  <span>Arabe</span>
                  <b>Langue maternelle</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="wrap contact-wrap">
            <div className="section-label">06 / CONTACT</div>

            <h2>
              Construisons ensemble<br />
              <span className="headline-highlight">de beaux projets.</span>
            </h2>

            <p>
              Une opportunité, une idée ou un projet ?
              Je serais ravie d'échanger avec vous.
            </p>

            <a
              className="contact-email"
              href="mailto:gghannoum.halima@gmail.com"
            >
              gghannoum.halima@gmail.com <span>↗</span>
            </a>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/halima-ghannoum/" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/hghannoum2002"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
             
            </div>
          </div>
        </section>

      </main>

      {/* PIED DE PAGE */}
      <footer className="footer wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">H</span>
          <span>halima<span className="brand-period">.</span></span>
        </a>

        <a href="#home">Retour en haut ↑</a>
        <small>© {new Date().getFullYear()} Halima Ghannoum</small>
      </footer>

    </div>
  );
}

export default App;
