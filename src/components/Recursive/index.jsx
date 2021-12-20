import React, { Fragment, useState } from 'react';

import mocks from '../../mocks';

import CategoryItem from './CategoryItem';
import { Container } from './style';

const Recursive = () => {
  // const [value, setValue] = useState({});
  const [data, setData] = useState(mocks);

  // const addCat = (parentId) => {
  //   if (!value[parentId]) {
  //     return alert('Please add name');
  //   }

  //   const uniqueId = new Date().valueOf();
  //   let arr = categories;

  //   const updateArray = (cats) => {
  //     return cats.map((child) => {
  //       if (child.id === parentId) {
  //         child.children.push({
  //           id: uniqueId,
  //           title: value[child.id],
  //           children: [],
  //         });
  //       }

  //       if (child.children.length) {
  //         updateArray(child.children);
  //       }

  //       return child;
  //     });
  //   };

  //   setValue((prevState) => ({
  //     ...prevState,
  //     [parentId]: '',
  //   }));

  //   updateArray(arr);
  //   setCategories(arr);
  // };

  // const handleChange = (e, id) => {
  //   const val = e.target.value;

  //   setValue((prevState) => ({
  //     ...prevState,
  //     [id]: val,
  //   }));
  // };

  // const renderInput = (id) => {
  //   return (
  //     <div>
  //       <input
  //         type="input"
  //         value={value[id] || ''}
  //         onChange={(e) => handleChange(e, id)}
  //       />
  //       <button type="button" onClick={() => addCat(id)}>
  //         Add
  //       </button>
  //     </div>
  //   );
  // };

  const createTree = ({ id, title, children }) => (
    <CategoryItem key={id} label={title} id={id}>
      {!!children.length &&
        children.map((category) => (
          <Fragment key={category.id}>{createTree(category)}</Fragment>
        ))}
    </CategoryItem>
  );

  return (
    <Container>
      {data.map((category) => (
        <Fragment key={category.id}>{createTree(category)}</Fragment>
      ))}
    </Container>
  );
};

export default Recursive;
