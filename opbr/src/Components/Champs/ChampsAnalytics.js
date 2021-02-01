import React from 'react';
import { ChampStorage } from '../../Contexts/ChampsContext';
import ChampsArea from './ChampsArea';

const ChampsAnalytics = () => {
  return (
    <ChampStorage>
      <ChampsArea />
    </ChampStorage>
  );
};

export default ChampsAnalytics;
