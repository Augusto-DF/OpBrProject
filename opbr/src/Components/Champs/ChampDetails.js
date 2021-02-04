import React from 'react';
import { ChampsContext } from '../../Contexts/ChampsContext';
import MenuChampDetails from './Menus/MenuChampDetails';

const URL_ASSETS_SPLASH_CHAMP =
  'http://ddragon.leagueoflegends.com/cdn/img/champion/splash';

const ChampDetails = () => {
  const { champDetails } = React.useContext(ChampsContext);
  const data = champDetails.data[Object.keys(champDetails.data)[0]];
  console.log(data);
  return (
    <section>
      <div>
        <img src={URL_ASSETS_SPLASH_CHAMP + '/' + data.id + '_0.jpg'} alt="" />
      </div>

      <div>
        <h3>{data.name}</h3>
        <h4>{data.title}</h4>
        <h5>{'Tipo: ' + data.partype}</h5>
      </div>

      <MenuChampDetails
        stats={data.stats}
        spells={data.spells}
        passive={data.passive}
      />
    </section>
  );
};

export default ChampDetails;
