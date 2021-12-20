import React from 'react';

import mocks from '../../mocks';

const Iterative = () => {
  const renderChildren = (children) => {
    return (
      <ul>
        {children.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    );
  };

  const renderCategories = (child) => {
    return child.map(({ id, title, children }) => (
      <ul key={id}>
        <li>
          <span>{title}</span>
          {children.length ? renderChildren(children) : null}
        </li>
      </ul>
    ));
  };

  return renderCategories(mocks);
};

export default Iterative;
