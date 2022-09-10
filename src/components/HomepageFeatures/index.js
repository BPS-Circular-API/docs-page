import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our API was designed from the ground up to be easily used to get
        your projects up and running quickly.
      </>
    ),
  },
  {
    title: '99.99% Uptime & Low Latency',
      Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We provide 99.9% uptime, so you can be sure that your projects are
        always up and running. We also have low latency, so you don't have
          to worry about your projects being slow.
      </>
    ),
  },
  {
    title: 'Open Source',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our API and everything related to our project is open source, so you can contribute to it and help us
        improve it. You can also use it for your own projects without worrying
        about licensing.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
