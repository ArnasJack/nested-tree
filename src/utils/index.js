const modifyArray = (arr, modifier) => {
  const recursiveLoop = (array) =>
    array.map((item) => {
      const didModify = modifier({ current: item, parent: array });

      if (!didModify && item.children.length) {
        recursiveLoop(item.children);
      }

      return item;
    });

  return recursiveLoop(arr);
};

export const addItem = (array, parentId, item) => {
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
  const modifier = ({ current, parent }) => {
    if (current.id === itemId) {
      parent.splice(
        parent.findIndex((item) => item.id === itemId),
        1
      );

      return true;
    }

    return false;
  };

  return modifyArray(array, modifier);
};
