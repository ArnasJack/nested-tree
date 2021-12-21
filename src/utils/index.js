const modifyArray = (arr, modifier) => {
  const recursiveLoop = (array) =>
    array.map((item) => {
      const shouldContinue = modifier({ currentItem: item, parent: array });

      if (shouldContinue && item.children.length) {
        recursiveLoop(item.children);
      }

      return item;
    });

  return recursiveLoop(arr);
};

export const addChildren = (array, parentId, title) => {
  const modifier = ({ currentItem }) => {
    const { id, children } = currentItem;

    if (id === parentId) {
      children.push({
        id: `${children.length}-${id}`,
        title,
        children: [],
      });

      return false;
    }

    return true;
  };

  return modifyArray(array, modifier);
};

export const removeChildren = (array, itemId) => {
  const modifier = ({ currentItem, parent }) => {
    if (currentItem.id === itemId) {
      parent.splice(parent.findIndex((item) => item.id === itemId, 1));

      return false;
    }

    return true;
  };

  return modifyArray(array, modifier);
};
