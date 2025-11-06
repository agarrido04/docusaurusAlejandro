import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Es java realmente dificil?',
    Svg: require('@site/static/img/java.svg').default,
    description: (
      <>
       Bueno depende de si picas codigo o no.
      </>
    ),
  },
  {
    title: 'Consideras github complicado?',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        Considero que si no practicas se te puede atascar un poco
      </>
    ),
  },
  {
    title: 'Te parece aburrido base de datos?',
    Svg: require('@site/static/img/base.svg').default,
    description: (
      <>
        Si, lo uso para repasar
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
        <Heading as="h3">{title}</Heading>
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
