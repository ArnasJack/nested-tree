import React, { Fragment, useState } from 'react';

import mocks from '../../mocks';
import { addChildren, removeItem } from '../../utils';

import CategoryItem from '../CategoryItem';
import { Container } from './style';

const Recursive = () => {
  const [data, setData] = useState(mocks);

  const handleAdd = (parentId, title) => {
    setData(addChildren(data, parentId, title));
  };

  const handleRemove = (id) => {
    setData(removeItem(data, id));
  };

  const createTree = ({ id, title, children }) => (
    <CategoryItem
      key={id}
      label={title}
      id={id}
      onAddCallback={handleAdd}
      onRemoveCallback={handleRemove}
    >
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
