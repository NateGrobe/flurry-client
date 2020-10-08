import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UserCard from './UserCard';
import NewCardModal from './NewCardModal';
import './styles.css';

// read in deck card info
const Deck = ({ header, cards, deckId }) => {
  const [cbIsHovered, setCbIsHovered] = useState(false);
  const [ncIsHovered, setNcIsHovered] = useState(false);
  const [showNewCardModal, setShowNewCardModal] = useState(false);

  const newCardBtnHover = {
    color: cbIsHovered ? 'black' : 'grey',
    backgroundColor: cbIsHovered ? 'grey' : '#f1f1f1'
  };

  const rmDeckBtnHover = {
    color: ncIsHovered ? 'black' : 'grey',
    backgroundColor: ncIsHovered ? 'grey' : '#f1f1f1'
  };

  const handleModalShow = () => setShowNewCardModal(true);
  const handleModalClose = () => setShowNewCardModal(false);


  if (!cards) {
    return <div></div>;
  }

  return (
    <div>
      <Card
        style={{
          backgroundColor: '#f1f1f1' ,
          width: '20rem'
        }}
      >
        <Card.Body>
          <Card.Text
            style={{
              fontWeight: 'bold',
              fontSize: '14pt'
            }}
          >
            {header}
          </Card.Text>

          {cards.map(card =>
            <UserCard
              key={card.id}
              title={card.title}
              description={card.description}
              cardId={card.id}
              deckId={deckId}
            />
          )}

          <Card.Text>
            <Button
              id='new-card-button'
              variant='light'
              onClick={handleModalShow}
              style={newCardBtnHover}

              onMouseEnter={() => setCbIsHovered(true)}
              onMouseLeave={() => setCbIsHovered(false)}
            >
              + Add another card
            </Button>
            <Button
              id='rm-deck-btn'
              style={rmDeckBtnHover}
              onMouseEnter={() => setNcIsHovered(true)}
              onMouseLeave={() => setNcIsHovered(false)}
            >
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </Button>
          </Card.Text>

        </Card.Body>
      </Card>

      <NewCardModal show={showNewCardModal} hide={handleModalClose} deckId={deckId}/>
    </div>
  );
};

export default Deck;
