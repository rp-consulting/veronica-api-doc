import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Fácil de usar",
    imageUrl: "img/facil-usar.svg",
    description: (
      <>
        Veronica permite crear cualquier tipo de comprobante electrónico en
        formato JSON o XML.
      </>
    ),
  },
  {
    title: "Integración completa",
    imageUrl: "img/integracion.svg",
    description: (
      <>
        Veronica envia y autoriza sus comprobantes electrónicos ante el SRI de
        manera instantánea y transparente.
      </>
    ),
  },
  {
    title: "Disponibilidad",
    imageUrl: "img/disponibilidad.svg",
    description: (
      <>
        Verónica almacena de manera segura sus comprobantes para ser consultados
        en el momento que lo precise.
      </>
    ),
  },
];

const supporters = [
  {
    imgPath: "/veronica-api-doc/img/clientes/distarias.png",
    website: "#",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

function Customers() {
  return (
    <div className="container">
      <div className={styles.title}>
        <h2>Empresas que confian en nosotros</h2>
      </div>
      <div className={styles.customers}>
        {supporters.map((s, i) => (
          <div key={i} className="align-items-center">
            <a href={s.website}>
              <img className={styles.customerImage} src={s.imgPath} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className={styles.overview}>
      <h2 className={styles.title}>
        ¿Por qué somos la API de facturación electrónica más completa?
      </h2>
      <div className="container">
      <p>
        Verónica API está diseñada para integrarse con cualquier lenguaje de
        programación y/o flujo de trabajo. Su diseño desacoplado, modular y
        basado en estándares brinda a los usuarios la capacidad de elegir qué
        componentes utilizar dentro de sus procesos contables.
      </p>
      <img src="https://i.imgur.com/2KlcAcI.png" />
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Comenzar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Customers></Customers>
      <Overview></Overview>
    </Layout>
  );
}

export default Home;
