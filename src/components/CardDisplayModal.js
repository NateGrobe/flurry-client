import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { removeCardFromDeck, updateCard } from '../reducers/deckReducer';

import { modTitle, modDesc } from '../reducers/cardModReducer'

const CardDisplayModal = (props) => {
  const [modifyTitle, setModifyTitle] = useState(false);
  const [modifyDesc, setModifyDesc] = useState(false);

  const { show, hide, data } = props;
  const { title, description, tasks } = props.cardData;

  function deleteCard() {
    props.removeCardFromDeck(data.cardId, data.deckId);
    hide();
  }

  function setInitialState() {
    props.clearCardForm();
    props.updateTitle(data.title);
    props.updateDescription(data.description);
  }

  function modifyDescription() {
    setInitialState();
    setModifyDesc(true);
  }

  function submitModification() {
  }

  return (
    <Modal show={show} onHide={hide}>
      <form onSubmit={submitModification}>
        <Modal.Header closeButton>
          {data.title}
        </Modal.Header>
        <Modal.Body>
          <div onClick={modifyDescription}>
            {modifyDesc
              ? <input
                value={description}
                onChange={({ target }) => props.updateDescription(target.value)}
              />
              : data.description
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hide}>
          Close
          </Button>
          <Button variant='danger' onClick={deleteCard}>Remove</Button>
          <Button variant='primary' onClick={submitModification}>
            Change
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    cardData: state.newCard
  };
}

const mapDispatchToProps = {
  removeCardFromDeck,
  updateTitle,
  updateDescription,
  clearCardForm
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CardDisplayModal);
