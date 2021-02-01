import React from 'react';
import { ChampsContext } from '../../Contexts/ChampsContext';
import ChampCard_Medium from './Cards/ChampCard_Medium';
import ChampDetails from './ChampDetails';
import { GET_CHAMPS } from '../../API/api';

const URL_IMG = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading';

const ChampsArea = () => {
  const { dataChamps, champDetails, setChampDetails } = React.useContext(
    ChampsContext,
  );

  const [champTarget, setChampTarget] = React.useState(null);

  async function choosedChamp() {
    const { url, options } = GET_CHAMPS(champTarget);
    const response = await fetch(url, options);
    const json = await response.json();
    setChampDetails(json);
    return true;
  }

  React.useEffect(() => {
    if (champTarget) choosedChamp();
  }, [champTarget]);

  return (
    <div>
      {champDetails ? (
        <ChampDetails />
      ) : dataChamps ? (
        dataChamps.map((champ, count) => {
          return (
            <ChampCard_Medium
              key={count}
              id={champ[0].id}
              name={champ[0].name}
              title={champ[0].title}
              imgPath={URL_IMG + '/' + champ[0].id + '_0.jpg'}
              imgAlt={'Splash do(a) ' + champ[0].id}
              onClick={async () => {
                setChampTarget(champ[0].id);
              }}
            />
          );
        })
      ) : undefined}
    </div>
  );
};

export default ChampsArea;
