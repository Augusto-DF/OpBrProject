import React from 'react';
import { Link } from 'react-router-dom';
import PassiveCard from '../Cards/PassiveCard';
import SkillCard from '../Cards/SkillCard';
import './MenuChampDetails.css';

const URL_CHAMPION_ABILITY_ASSETS =
  'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell';

const MenuChampDetails = ({ stats, spells, passive }) => {
  const [option, setOpition] = React.useState('status');
  const [optionContent, setOptionContent] = React.useState(null);
  console.log(spells);

  React.useEffect(() => {
    switch (option) {
      case 'status':
        setOptionContent(
          <>
            <p>Armadura: {stats.armor}</p>
            <p>Armadura por level: {stats.armorperlevel}</p>
            <p>Dano físico: {stats.attackdamage}</p>
            <p>Dano físico por level: {stats.attackdamageperlevel}</p>
            <p>Alcance: {stats.attackrange}</p>
            <p>Velocidade de ataque: {stats.attackspeed}</p>
            <p>Velocidade de ataque por level: {stats.attackspeedperlevel}</p>
            <p>Chance de acerto crítico: {stats.crit}</p>
            <p>Chance de acerto crítico por level: {stats.critperlevel}</p>
            <p>Vida: {stats.hp}</p>
            <p>Vida por level: {stats.hpperlevel}</p>
            <p>Regeneração de vida (/s): {stats.hpregen}</p>
            <p>Regeneração de vida por level: {stats.hpregenperlevel}</p>
            <p>Velocidade de movivmento: {stats.movespeed}</p>
            <p>Mana: {stats.mp}</p>
            <p>Mana por level: {stats.mpperlevel}</p>
            <p>Regeneração de mana (/s): {stats.mpregen}</p>
            <p>Regeneração de mana por level: {stats.mpregenperlevel}</p>
            <p>Resistencia mágica: {stats.spellblock}</p>
            <p>Resistencia mágica por level: {stats.spellblockperlevel}</p>
          </>,
        );
        break;
      case 'skills':
        setOptionContent(
          <div>
            <PassiveCard passive={passive} />
            {spells.map((spell, count) => {
              return (
                <SkillCard
                  key={count}
                  spell={spell}
                  spellId={spell.id}
                  spellName={spell.name}
                  spellDescription={spell.description}
                  spellTooltip={spell.tooltip}
                  spellImgPath={
                    URL_CHAMPION_ABILITY_ASSETS + '/' + spell.image.full
                  }
                  spellCostArray={spell.cost}
                  spellRangeArray={spell.range}
                />
              );
            })}
          </div>,
        );
        break;
      case 'lore':
        setOptionContent('');
        break;
      case 'skins':
        setOptionContent('');
        break;

      default:
        setOptionContent(
          <div>
            <p>Armadura: {stats.armor}</p>
            <p>Armadura por level: {stats.armorperlevel}</p>
            <p>Dano físico: {stats.attackdamage}</p>
            <p>Dano físico por level: {stats.attackdamageperlevel}</p>
            <p>Alcance: {stats.attackrange}</p>
            <p>Velocidade de ataque: {stats.attackspeed}</p>
            <p>Velocidade de ataque por level: {stats.attackspeedperlevel}</p>
            <p>Chance de acerto crítico: {stats.crit}</p>
            <p>Chance de acerto crítico por level: {stats.critperlevel}</p>
            <p>Vida: {stats.hp}</p>
            <p>Vida por level: {stats.hpperlevel}</p>
            <p>Regeneração de vida (/s): {stats.hpregen}</p>
            <p>Regeneração de vida por level: {stats.hpregenperlevel}</p>
            <p>Velocidade de movivmento: {stats.movespeed}</p>
            <p>Mana: {stats.mp}</p>
            <p>Mana por level: {stats.mpperlevel}</p>
            <p>Regeneração de mana (/s): {stats.mpregen}</p>
            <p>Regeneração de mana por level: {stats.mpregenperlevel}</p>
            <p>Resistencia mágica: {stats.spellblock}</p>
            <p>Resistencia mágica por level: {stats.spellblockperlevel}</p>
          </div>,
        );
        break;
    }
  }, [option]);

  return (
    <div>
      <nav>
        <ul className="menu">
          <Link
            className={option === 'status' ? 'marked' : ''}
            to={'./'}
            onClick={() => {
              setOpition('status');
            }}
          >
            <li>Status base</li>
          </Link>
          <Link
            className={option === 'skills' ? 'marked' : ''}
            to={'./'}
            onClick={() => {
              setOpition('skills');
            }}
          >
            <li>Habilidades</li>
          </Link>
          <Link
            className={option === 'lore' ? 'marked' : ''}
            to={'./'}
            onClick={() => {
              setOpition('lore');
            }}
          >
            <li>História</li>
          </Link>
          <Link
            className={option === 'skins' ? 'marked' : ''}
            to={'./'}
            onClick={() => {
              setOpition('skins');
            }}
          >
            <li>Skins</li>
          </Link>
        </ul>
      </nav>
      <div>{optionContent ? optionContent : undefined}</div>
    </div>
  );
};

export default MenuChampDetails;
