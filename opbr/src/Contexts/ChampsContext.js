import React from 'react';
import { GET_CHAMPS, GET_CHAMP } from '../API/api';

export const ChampsContext = React.createContext();

/**
 * @returns [Array] - Retorna uma lista com todos os campeões do jogo.
 */
async function listChamps() {
  const { url, options } = GET_CHAMPS();
  const response = await fetch(url, options);
  const json = await response.json();

  let array = [];
  for (let i in json.data) array.push([json.data[i]]);

  return array;
}

export const ChampStorage = ({ children }) => {
  const [dataChamps, setDataChamps] = React.useState(null);
  const [champDetails, setChampDetails] = React.useState(null);

  React.useEffect(async () => {
    setDataChamps(await listChamps());
  }, []);

  return (
    <ChampsContext.Provider
      value={{ dataChamps, setChampDetails, champDetails }}
    >
      {children}
    </ChampsContext.Provider>
  );
};
