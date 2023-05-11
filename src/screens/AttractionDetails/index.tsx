import React, {useMemo} from 'react';
import Title from '../../components/UI/Typography/Title';
import {useAppRoute} from '../../hooks/useRoute';
import jsonData from '../../data/attractions.json';

function AttractionDetails() {
  // Utils
  const route = useAppRoute();

  const foundItem = useMemo(() => {
    return jsonData.find(item => item.id === route.params?.id);
  }, [route.params]);

  return (
    <>
      <Title text="Where do" />
      <Title text={JSON.stringify(foundItem)} />
    </>
  );
}

export default React.memo(AttractionDetails);
