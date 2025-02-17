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
        <div className={clsx("card-container", styles.cardContainer)}>
          {documents.map((document, index) => (
            <div
              key={index}
              className={clsx(
                "card-document",
                styles.cardDocument,
                
              )}
            >
              <a
                href={document.url}
              >
                <h3 className="cardTitle">{document.name}</h3>
              </a>
            </div>
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
    <div
      id="teams"
      className={clsx("important-documents", styles.importantDocuments)}
    >
      <div className="container">
        <h2>Equipo</h2>
        <h4>Grupo Yeyee</h4>
        <div className={clsx("card-container", styles.cardContainer)}>
          {teamMembers
            .filter((member) => member.team === "Yeyee")
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
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
            .filter((member) => member.team === "Happy Meal")
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
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
            .filter((member) => member.team === "Piruleta")
            .map((member) => (
              <div
                key={member.name}
                className={clsx(
                  "card card-member",
                  styles.cardMember,
                  styles.card
                )}
              >
                <img src={member.photo} alt={member.name} />
                <h6>{member.name}</h6>
                <div>
                  {member.role.split("/").map((role, index) => (
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
  );
}

function NewSection() {
  return (
    <div className={clsx("new-section", styles.newSection)}>
      <div className="container">
        <div className={clsx("row", styles.row)}>
          <div className="col col--4">
            <div className={clsx("card", styles.card)}>
              <div className="card__header">
                <h3>¿Por qué?</h3>
              </div>
              <div className="card__body">
                <p>
                  Se ha optado por utilizar Docusaurus para crear la base de
                  gestión del conocimiento del proyecto Fisio Find con el
                  objetivo de aprovechar las ventajas de la "gestión como
                  código". Esto permite que la documentación del proyecto se
                  mantenga organizada, actualizada y fácilmente accesible en
                  línea, lo que favorece la colaboración y agiliza tanto el
                  mantenimiento como el despliegue de la información.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className={clsx("card", styles.card)}>
              <div className="card__header">
                <h3>¿Cómo?</h3>
              </div>
              <div className="card__body">
                <p>La estructura que se va a emplear para esta base de 
                  conocimiento favorece la organización y el acceso a
                  eficiente a la información. Se ha optado por una
                  división en Organización, Planificación, Informes,
                  Seguimiento y Recursos, de forma que cada documento
                  queda organizado según su naturaleza y propósito.
                  Además se ofrece una vista en detalle de todos los miembros
                  del equipo.
                </p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className={clsx("card", styles.card)}>
              <div className="card__header">
                <h3>¿Dónde?</h3>
              </div>
              <div className="card__body">
                <p>Esto es solo un pequeño almacén de conocimientos. Si 
                  estás interesado y quieres saber más acerca Fisio Find, 
                  no dudes en visitar nuestra página web oficial en [página web].
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
        <NewSection />
        <ImportantDocument />
        <Team />
      </main>
    </Layout>
  )
}