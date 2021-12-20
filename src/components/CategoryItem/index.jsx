import React, { useState } from 'react';
import OpenedIcon from '@material-ui/icons/ExpandMore';
import ClosedIcon from '@material-ui/icons/ChevronRight';
import AddCircle from '@material-ui/icons/AddCircleOutline';

import {
  Container,
  Header,
  HeaderInner,
  Label,
  Button,
  AddButton,
} from './style';

const ChildrenItem = ({ children, label, id, onAddCallBack }) => {
  const [toggleAddButton, setToggleAddButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = () => {
    const val = prompt('Enter name:');

    if (val) {
      onAddCallBack(id, val);
    }
  };

  return (
    <Container>
      <Header
        onMouseEnter={() => setToggleAddButton(true)}
        onMouseLeave={() => setToggleAddButton(false)}
      >
        <HeaderInner
          hasChildren={!!children}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Label>{label}</Label>

          {!!children.length && (
            <AddButton>{isOpen ? <OpenedIcon /> : <ClosedIcon />}</AddButton>
          )}
        </HeaderInner>

        {toggleAddButton && (
          <Button type="button" onClick={handleAdd}>
            <AddCircle />
          </Button>
        )}
      </Header>

      {isOpen && children && children}
    </Container>
  );
};

export default ChildrenItem;
