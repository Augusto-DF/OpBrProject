import React from 'react';
import { ChampsContext } from '../../Contexts/ChampsContext';
import MenuChampDetails from './Menus/MenuChampDetails';
import styles from './ChampDetails.module.css';

const URL_ASSETS_SPLASH_CHAMP =
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash';

const ChampDetails = () => {
  const { champDetails } = React.useContext(ChampsContext);
  const data = champDetails.data[Object.keys(champDetails.data)[0]];

  return (
    <section className={styles.champDetails}>
      <div className={styles.champDetailsImg}>
        <div className={styles.shadowIntern}></div>
        <img src={URL_ASSETS_SPLASH_CHAMP + '/' + data.id + '_0.jpg'} alt="" />
      </div>

      <div className={styles.champDetailsContent}>
        <div className={styles.champDetailsTitle}>
          <h4>{data.title}</h4>
          <h3>{data.name}</h3>
          <h5>{'Tipo: ' + data.partype}</h5>
        </div>

        <MenuChampDetails
          stats={data.stats}
          spells={data.spells}
          passive={data.passive}
        />
      </div>
    </section>
  );
};

export default ChampDetails;
