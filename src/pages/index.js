import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Fácil de usar',
    imageUrl: 'img/crear.svg',
    description: (
      <>
        Veronica crea cualquier tipo de comprobante electrónico en formato JSON o XML.
      </>
    ),
  },
  {
    title: 'Integración completa',
    imageUrl: 'img/autorizar.svg',
    description: (
      <>
        Veronica le permite enviar sus comprobantes ante el SRI de manera instantánea.
      </>
    ),
  },
  {
    title: 'Personalización',
    imageUrl: 'img/enviar.svg',
    description: (
      <>
        Verónica le permite notificar sus comprobantes a sus clientes de manera personalizada.
      </>
    ),
  },
  {
    title: 'Disponibilidad',
    imageUrl: 'img/consultar.svg',
    description: (
      <>
        Veronica almacena de manera segura sus comprobantes para ser consultados en el momento que lo precise.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
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
    </Layout>
  );
}

export default Home;
