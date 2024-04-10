import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import MountainSvg  from '@site/static/img/undraw_docusaurus_mountain.svg'; 
import TreeSvg  from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactSvg  from '@site/static/img/undraw_docusaurus_react.svg'

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className='col col--4'>
            <div class="text--center">
              <MountainSvg className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3"><Translate id="theme.subtitle-1">Easy to Use</Translate></Heading>
              <p>
                <Translate id="theme.subhead-1">
                Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.
                </Translate>
              </p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
              <TreeSvg className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3"><Translate id="theme.subtitle-2">Focus on What Matters</Translate></Heading>
              <p>
                <Translate id='theme.subhead-3'>
                Docusaurus lets you focus on your docs, and we ll do the chores. Go ahead and move your docs into the docs directory.
                </Translate>
              </p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
              <ReactSvg className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
            <Heading as="h3"><Translate id="theme.subtitle-3">Powered by React</Translate></Heading>
              <p>
              <Translate id="theme.subhead-3">
                Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
