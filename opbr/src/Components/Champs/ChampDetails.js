import React from 'react';
import { ChampsContext } from '../../Contexts/ChampsContext';

const ChampDetails = () => {
  const champ = React.useContext(ChampsContext);
  console.log(champ.champDetails);
  return <div>Detalhes</div>;
};

export default ChampDetails;
