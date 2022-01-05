import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { addItem, removeItem } from '../../utils';

import CategoryItem from '../CategoryItem';
import { Container } from './style';

const Recursive = ({ initialData }) => {
  const [data, setData] = useState(initialData);

  const handleAdd = (parentId, title) => {
    const newItem = {
      id: uuidv4(),
      title,
      children: [],
    };

    setData(addItem(data, parentId, newItem));
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
