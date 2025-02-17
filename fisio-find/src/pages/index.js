import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={clsx("container-image", styles.containerImage)}>
          <img
            src="img/logo.PNG"
            alt="FisioFind's logo"
            className={clsx("hero-image", styles.heroImage)}
          />
          <div>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Inicio"
          >
            Acceso a la documentación
          </Link>
        </div>
      </div>
    </header>
  );
}

function ImportantDocument() {
  const documents = [
    {
      name: "🫱🏽‍🫲🏻 Acuerdo de compromiso",
      url: "docs/Organización/1.2.%20Commitment%20Agreement",
    },
    {
      name: "📊 Análisis de competidores",
      url: "docs/Organización/1.3.%20Competitor%20Analysis",
    },
    {
      name: "⚙️ Gestión de la Configuración",
      url: "docs/Planificación/2.1.%20Configuration%20Management%20Plan",
    },
  ];
  return (
    <div
      id="importantDocuments"
      className={clsx("important-documents", styles.importantDocuments)}
    >
      <div className="container">
        <h2>Documentos relevantes</h2>
        <div
          className={clsx("row mx-auto", styles.row)}
        >
          {documents.map((document, index) => (
            <article className="col col--3 margin--lg" key={index}>
              <a
                href={document.url}
                className={clsx("customCard card padding--md cardContainer", styles.customCard, styles.card)}
              >
                <h3 className="cardTitle">{document.name}</h3>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


function Team() {
  const teamMembers = [
    {
      name: 'Alberto Carmona Sicre',
      role: 'Backend/Márketing',
      team: 'Yeyee',
      photo: '/img/team/Alejandro_Medina.png',
    },
    {
      name: 'Daniel Alors Romero',
      role: 'Backend/QA',
      team: 'Yeyee',
      photo: '/img/team/Alvaro_Bernal.png',
    },
    {
      name: 'Daniel Fernández Caballero',
      role: 'Backend',
      team: 'Yeyee',
      photo: '/img/team/Alvaro_Gonzalez.png',
    },
    {
      name: 'Daniel Ruíz López',
      role: 'Frontend/Márketing',
      team: 'Yeyee',
      photo: '/img/team/Gonzalo_Campos.png',
    },
    {
      name: 'Pablo Fernández Pérez',
      role: 'FullStack',
      team: 'Yeyee',
      photo: '/img/team/Ronald_Montoya.png',
    },
    {
      name: 'Rafael Pulido Cifuentes',
      role: 'Frontend/Márketing/Analista',
      team: 'Yeyee',
      photo: '/img/team/Alejandro_Gallardo.png',
    },
    {
      name: 'Antonio Macías Ferrera',
      role: 'Backend/Márketing/Analista',
      team: 'Happy Meal',
      photo: '/img/team/Antonio_Rodriguez.png',
    },
    {
      name: 'Benjamín Ignacio Maureira Flores',
      role: 'Frontend/Márketing/QA',
      team: 'Happy Meal',
      photo: '/img/team/David_Gavira.png',
    },
    {
      name: 'Delfín Santana Rubio',
      role: 'Backend',
      team: 'Happy Meal',
      photo: '/img/team/Francisco_Benitez.png',
    },
    {
      name: 'Guadalupe Ridruejo Pineda',
      role: 'Backend/Márketing/Analista',
      team: 'Happy Meal',
      photo: '/img/team/Javier_Garcia.png',
    },
    {
      name: 'Julen Redondo Pacheco',
      role: 'Frontend',
      team: 'Happy Meal',
      photo: '/img/team/Manuel_Garcia.png',
    },
    {
      name: 'Ramón Gavira Sánchez',
      role: 'FullStack/Márketing/Analista',
      team: 'Happy Meal',
      photo: '/img/team/Nicolas_Herrera.png',
    },
    {
      name: 'Daniel Tortorici Bartús',
      role: 'Frontend',
      team: 'Piruleta',
      photo: '/img/team/Alberto_Lopez.png',
    },
    {
      name: 'Daniel Vela Camacho',
      role: 'Frontend/Márketing',
      team: 'Piruleta',
      photo: '/img/team/Joaquin_Martin.png',
    },
    {
      name: 'Francisco Capote García',
      role: 'Backend/Márketing',
      team: 'Piruleta',
      photo: '/img/team/Jose_Maria_Garcia.png',
    },
    {
      name: 'Francisco Mateos Villarejo',
      role: 'Backend/Márketing/QA',
      team: 'Piruleta',
      photo: '/img/team/Jose_Miguel_Garcia.png',
    },
    {
      name: 'Miguel Encina Martínez',
      role: 'FullStack/Analista/QA',
      team: 'Piruleta',
      photo: '/img/team/Marco_Chasco.png',
    },
  ]
  return (
    <div id='teams' className={clsx("meet-us", styles.meetUs)}>
      <div className='container'>
        <h2>Equipo</h2>
        <h4>Grupo Yeyee</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === 'Yeyee')
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  'card card-member',
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split('/').map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>Grupo Happy Meal</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === 'Happy Meal')
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  'card card-member',
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split('/').map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <h4>Grupo Piruleta</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === 'Piruleta')
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  'card card-member',
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split('/').map((role, index) => (
                    <span key={index} className={clsx(styles.tag)}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <ImportantDocument />
        <Team />
      </main>
    </Layout>
  )
}