const modifyArray = (initialArray, modifier) => {
  var newArray = [...initialArray];

  const recursiveLoop = (array) => {
    for (let i = 0; i < array.length; i++) {
      const current = array[i];
      const didModify = modifier({ current, parent: array });

      if (!didModify && current.children.length) {
        recursiveLoop(current.children);
      }
    }
  };

  recursiveLoop(newArray);

  return newArray;
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
    if (array.length === 1 && array[0].id === itemId) {
      parent.length = 0;

      return true;
    }

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
