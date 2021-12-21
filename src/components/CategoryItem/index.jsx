import React, { useState } from 'react';
import OpenedIcon from '@material-ui/icons/ExpandMore';
import ClosedIcon from '@material-ui/icons/ChevronRight';
import AddCircle from '@material-ui/icons/AddCircleOutline';
import RemoveCircle from '@material-ui/icons/RemoveCircleOutline';

import {
  Container,
  Header,
  HeaderInner,
  Label,
  Button,
  AddButton,
} from './style';

const ChildrenItem = ({
  children,
  label,
  id,
  onAddCallback,
  onRemoveCallback,
}) => {
  const [toggleAddButton, setToggleAddButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = () => {
    const val = prompt('Enter name:');

    if (val) {
      onAddCallback(id, val);
      setIsOpen(true);
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
          <div>
            <Button type="button" onClick={handleAdd}>
              <AddCircle />
            </Button>
            <Button type="button" onClick={() => onRemoveCallback(id)}>
              <RemoveCircle />
            </Button>
          </div>
        )}
      </Header>

      {isOpen && children && children}
    </Container>
  );
};

export default ChildrenItem;
