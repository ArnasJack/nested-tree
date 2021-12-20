export const addChildren = (initialArray, parentId, title) => {
  var arr = initialArray;

  const addValue = (array) =>
    array.map((item) => {
      const { id, children } = item;

      if (id !== parentId && children.length) {
        addValue(children);
      }

      if (id === parentId) {
        children.push({
          id: `${children.length}-${id}`,
          title,
          children: [],
        });
      }

      return item;
    });

  return addValue(arr);
};