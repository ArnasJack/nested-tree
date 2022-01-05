import React from 'react';
import { orderBy } from 'lodash';
import mocks from '../../mocks';

const Tree = ({ children }) => {
  return <ul>{children}</ul>;
};

const Item = ({ item, children }) => {
  return (
    <li>
      {item.title}
      {children}
    </li>
  );
};

const Iterative = ({ initialData }) => {
  const renderItems = (arr) => {
    const flatArray = orderBy(arr, ['id']);

    var array = [];
    const nodeMap = {};

    for (let i = 0; i < flatArray.length; i++) {
      var item = {
        ...flatArray[i],
        children: [],
      };

      const subTree = [];

      nodeMap[item.id] = subTree;

      if (!item.parentId) {
        array.push(
          <Item key={item.id} item={item}>
            {subTree}
          </Item>
        );
      }

      if (item.parentId) {
        nodeMap[item.parentId].push(
          <Item key={item.id} item={item}>
            <Tree>{subTree}</Tree>
          </Item>
        );
      }
    }

    return <Tree>{array}</Tree>;
  };

  return renderItems(initialData);
};

export default Iterative;
