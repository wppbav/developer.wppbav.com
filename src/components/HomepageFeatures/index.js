import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API',
    description: (
      <>
        Access all of BAV's data via the API available through The Fount.
      </>
    ),
  },
  {
    title: 'Help & Support',
    description: (
      <>
        We are here to help you if you run into any problems, or if you have suggestions.
      </>
    ),
  },
  {
    title: 'BAV Academy',
    description: (
      <>
        Learn BAV thoroughly in the BAV Academy.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
