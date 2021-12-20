import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Container, Header, HeaderInner, Label, Children } from './style';

const ChildrenItem = ({ children, label, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState('');

  return (
    <Container hasChildren={!!children}>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <HeaderInner>
          <Label>{label}</Label>
          {children.length && (
            <div>{isOpen ? <ExpandMoreIcon /> : <ChevronRightIcon />}</div>
          )}
        </HeaderInner>
        <button>add</button>
      </Header>
      {isOpen && children && <Children>{children}</Children>}
    </Container>
  );
};

export default ChildrenItem;
