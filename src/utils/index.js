import { orderBy } from 'lodash';

const modifyArray = (initialArray, modifier) => {
  var modifiedArray = [...initialArray];

  const recursiveLoop = (array) => {
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      const didModify = modifier({ current, parent: array }, i);

      if (didModify) {
        return;
      }

      if (current.children.length) {
        recursiveLoop(current.children);
      }
    }
  };

  recursiveLoop(modifiedArray);

  return modifiedArray;
};

export const addItem = (array, parentId, item) => {
  if (!array.length) {
    return [item];
  }

  if (!parentId && parentId !== 0) {
    return [...array, item];
  }

  const modifier = ({ current }) => {
    const { id, children } = current;

    if (id === parentId) {
      children.push(item);

      return true;
    }

    return false;
  };

  return modifyArray(array, modifier);
};

export const removeItem = (array, itemId) => {
  if (!array.length) {
    return [];
  }

  const modifier = ({ current, parent }, index) => {
    if (array.length === 1 && array[0].id === itemId) {
      parent.length = 0;

      return true;
    }

    if (current.id === itemId) {
      parent.splice(index, 1);

      return true;
    }

    return false;
  };

  return modifyArray(array, modifier);
};

export const transformFlatArray = (arr) => {
  const flatArray = orderBy(arr, ['id']);

  var array = [];
  const nodeMap = {};

  for (let i = 0; i < flatArray.length; i++) {
    var item = {
      ...flatArray[i],
      children: [],
    };

    nodeMap[item.id] = item;

    if (!item.parentId) {
      array.push(item);
    }

    if (item.parentId) {
      nodeMap[item.parentId].children.push(item);
    }
  }

  return array;
};
