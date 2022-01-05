import React from 'react';

import Recursive from 'components/Recursive';
import Iterative from 'components/Iterative';
import { transformFlatArray } from 'utils';
import mocks from './mocks';

const flatArray = [
  { title: 'title1', id: '1', parentId: null },
  { title: 'title2_1', id: '2_1', parentId: '2' },
  { title: 'title2_2', id: '2_2', parentId: '2' },
  { title: 'title2', id: '2', parentId: '1' },
  { title: 'title3', id: '3', parentId: null },
  { title: 'title4', id: '4', parentId: null },
];

const App = () => {
  const transformTree = transformFlatArray(flatArray);

  console.log('transformTree', transformTree);

  return (
    <div className="App">
      <Recursive initialData={transformTree} />
      <Iterative initialData={flatArray} />
    </div>
  );
};

export default App;
