import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {
  updateCardTitle,
  updateCardDescription,
  clearCardForm
} from '../reducers/newCardReducer';

import { addCardToDeck } from '../reducers/deckReducer';

const NewCardModal = (props) => {

  const { title, description, tasks } = props.newCard;

  function hideModal() {
    props.hide();
    props.clearCardForm();
  }

  function addCard(event) {
    event.preventDefault();
    const newCard = {
      title,
      description,
      tasks: [],
      deck: props.deckId
    };

    props.addCardToDeck(newCard, props.deckId);
    props.clearCardForm();
    props.hide();
  }

  return (
    <Modal show={props.show} onHide={hideModal}>
      <form onSubmit={addCard}>
        <Modal.Header closeButton>
          <Modal.Title>New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={title}
            placeholder='Enter a title...'
            onChange={({ target }) => props.updateCardTitle(target.value)}
          />
          <br/>
          <br/>
          <textarea
            value={description}
            placeholder='Description...'
            onChange={({ target }) => props.updateCardDescription(target.value)}
            style={{ width: '80%', height: '5rem' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hideModal}>
          Close
          </Button>
          <Button variant='primary' type='submit'>Add</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    newCard: state.newCard
  };
};

const mapDispatchToProps = {
  updateCardTitle,
  updateCardDescription,
  clearCardForm,
  addCardToDeck
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardModal);
