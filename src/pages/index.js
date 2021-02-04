import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Crear comprobantes',
    imageUrl: 'img/crear.svg',
    description: (
      <>
        Verónica API permite crear Facturas, Guías de remisión, Notas de crédito, Notas de débito, Comprobantes de retención y Liquidaciones de compra.
      </>
    ),
  },
  {
    title: 'Enviar comprobantes',
    imageUrl: 'img/enviar.svg',
    description: (
      <>
        Los comprobantes que son creados en Verónica API son enviados al SRI mediante el endpoint para envio de comprobantes.
      </>
    ),
  },
  {
    title: 'Autorizar comprobantes',
    imageUrl: 'img/autorizar.svg',
    description: (
      <>
        Una vez los comprobantes son enviados al SRI, Verónica API permite autorizar estos comprobantes mediante el endpoint de autorización.
      </>
    ),
  },
  {
    title: 'Consultar comprobantes',
    imageUrl: 'img/consultar.svg',
    description: (
      <>
        Desde del momento de creación del comprobante electrónico puedes consultar el estado de todos tus comprobantes tanto en formato XML como en PDF.
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
