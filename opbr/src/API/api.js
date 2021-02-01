const URL_SERVER = 'https://br1.api.riotgames.com';
const URL_CHAMPS =
  'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion.json';
const URL_CHAMP =
  'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion/';
const URL_ITENS =
  'http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/item.json';

export function GET_CHAMPS() {
  return {
    url: URL_CHAMPS,
    options: {
      method: 'GET',
      headers: {},
    },
  };
}
export function GET_CHAMP(_id) {
  return {
    url: URL_CHAMP + _id + '.json',
    options: {
      method: 'GET',
      headers: {},
    },
  };
}
