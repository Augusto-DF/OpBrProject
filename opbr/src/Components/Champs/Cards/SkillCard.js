import React from 'react';
import styles from './SkillCard.module.css';

const SkillCard = ({
  spell,
  spellId,
  spellName,
  spellDescription,
  spellTooltip,
  spellImgPath,
  spellCostArray,
  spellRangeArray,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgBlock}>
        <img src={spellImgPath} alt={spellId} />
      </div>
      <div className={styles.statsBlock}>
        <div className={styles.cost}>
          {spellCostArray.map((cost, count) => {
            return count > 0 ? (
              <p key={count}>{'/' + cost}</p>
            ) : (
              <p key={count}>{cost}</p>
            );
          })}
        </div>

        <div className={styles.range}>
          {spellRangeArray.map((range, count) => {
            return count > 0 ? (
              <p key={count}>{'/' + range}</p>
            ) : (
              <p key={count}>{range}</p>
            );
          })}
        </div>
      </div>
      <div className={styles.descriptionBlock}>
        <p>{spellName}</p>
        <p>{spellDescription}</p>
        <p>{spellTooltip}</p>
      </div>
    </div>
  );
};

export default SkillCard;
