import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import UserCard from './UserCard';
import NewCardModal from './NewCardModal';

// read in deck card info
const Deck = ({ header, cards, deckId }) => {
  const [cbIsHovered, setCbIsHovered] = useState(false);
  const [showNewCardModal, setShowNewCardModal] = useState(false);

  const addCardButtonStyles = {
    color: cbIsHovered ? 'black' : 'grey',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    backgroundColor: cbIsHovered ? 'grey' : '#f1f1f1'
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
              variant='light'
              onClick={handleModalShow}
              style={ addCardButtonStyles }

              onMouseEnter={() => setCbIsHovered(true)}
              onMouseLeave={() => setCbIsHovered(false)}
            >
              + Add another card
            </Button>
          </Card.Text>

        </Card.Body>
      </Card>

      <NewCardModal show={showNewCardModal} hide={handleModalClose} deckId={deckId}/>
    </div>
  );
};

export default Deck;
