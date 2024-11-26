import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';
import menuImage  from '@site/static/img/menu.png'; 
import panelImage  from '@site/static/img/panel.png';
import comandaImage   from '@site/static/img/comanda.png'

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className='col col--4'>
            <div class="text--center">
            <img src={menuImage} alt="Menu" className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3"><Translate id="theme.subtitle-1">Menu digital</Translate></Heading>
              <p>
                <Translate id="theme.subhead-1">
                Aprende cómo los clientes pueden explorar y usar el menú digital.
                </Translate>
              </p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
            <img src={panelImage} alt="Panel" className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3"><Translate id="theme.subtitle-2">Panel administrativo</Translate></Heading>
              <p>
                <Translate id='theme.subhead-3'>
                Descubre cómo gestionar tu restaurante desde el panel administrativo.
                </Translate>
              </p>
            </div>
          </div>
          <div className='col col--4'>
            <div className="text--center">
              <img src={comandaImage} alt="Comanda" className={styles.featureSvg}/>
            </div>
            <div className="text--center padding-horiz--md">
            <Heading as="h3"><Translate id="theme.subtitle-3">Comanda digital</Translate></Heading>
              <p>
              <Translate id="theme.subhead-3">
                Optimiza el flujo de trabajo con herramientas para la cocina y el staff
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
