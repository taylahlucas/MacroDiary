import React from 'react';
import DiaryContent from '../components/custom/DiaryContent/DiaryContent.native';
import StandardLayout from '../components/general/Layouts/StandardLayout.native';

const Diary = () => {
  return (
    <StandardLayout>
      <DiaryContent />
    </StandardLayout>
  )
};

export default Diary;