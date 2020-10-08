import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { updateDeckTitle, clearDeckForm } from '../reducers/newDeckReducer';
import { addNewDeck } from '../reducers/deckReducer';

const NewDeckModal = (props) => {
  const { show, hide, newDeck } = props;

  function hideModal() {
    props.clearDeckForm();
    hide();
  }

  function addDeck(event) {
    event.preventDefault();
    const deck = {
      title: newDeck
    };

    props.addNewDeck(deck);
    hideModal();
  }

  return (
    <Modal show={show} onHide={hideModal}>
      <form onSubmit={addDeck}>
        <Modal.Header closeButton>
          <Modal.Title>
          New Deck
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            placeholder='Enter a title...'
            style={{ width: '80%' }}
            value={newDeck}
            onChange={({ target }) => props.updateDeckTitle(target.value)}
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
    newDeck: state.newDeck
  };
};

const mapDispatchToProps = {
  updateDeckTitle,
  clearDeckForm,
  addNewDeck
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeckModal);