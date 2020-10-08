import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { removeCardFromDeck, modCard } from '../reducers/deckReducer';
import { initCardMod, modTitle, modDesc } from '../reducers/cardModReducer';

const CardDisplayModal = (props) => {
  const [modifyTitle, setModifyTitle] = useState(false);
  const [modifyDesc, setModifyDesc] = useState(false);

  // read in card info from UserCard
  const { show, hide, data } = props;
  // get card data from redux
  const { title, description, tasks } = props.cardMod;

  function hideModal() {
    hide();
    setModifyTitle(false);
    setModifyDesc(false);
  }

  function deleteCard() {
    props.removeCardFromDeck(data.cardId, data.deckId);
    hide();
  }

  function setInitialState() {
    props.initCardMod(
        modifyTitle ? title : data.title,
        modifyDesc ? description : data.description,
        data.tasks
      );
  }

  function enableDescMod() {
    setInitialState();
    setModifyDesc(true);
  }

  function enableTitleMod() {
    setInitialState();
    setModifyTitle(true);
  }

  function submitModification() {
    const changedCard = {
      title,
      description,
      tasks,
      id: data.cardId
    };

    props.modCard(changedCard, data.cardId, data.deckId);
    setModifyTitle(false);
    setModifyDesc(false);
    hide();
  }

  return (
    <Modal show={show} onHide={hideModal}>
      <form onSubmit={submitModification}>
        <Modal.Header closeButton>
          <div onClick={enableTitleMod}>
            {modifyTitle
              ? <input 
                value={title}
                onChange={({ target }) => props.modTitle(target.value)}
              />
              : data.title}
            </div>
        </Modal.Header>
        <Modal.Body>
          <div onClick={enableDescMod}>
            {modifyDesc
              ? <input
                value={description}
                onChange={({ target }) => props.modDesc(target.value)}
              />
              : data.description}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hideModal}>
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
    cardMod: state.cardMod
  };
}

const mapDispatchToProps = {
  removeCardFromDeck,
  initCardMod,
  modTitle,
  modDesc,
  modCard
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CardDisplayModal);
