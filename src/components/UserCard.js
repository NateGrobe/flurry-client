import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDisplayModal from './CardDisplayModal';
import './styles.css';

const UserCard = ({ title, description, cardId, deckId }) => {
  const [showCardDisplay, setShowCardDisplay] = useState(false);

  const handleCardShow = () => setShowCardDisplay(true);
  const handleCardHide = () => setShowCardDisplay(false);

  return (
    <div>
      <Card
        id='userCard'
        onClick={handleCardShow}
      >
        <Card.Body>
          <Card.Text>
            <strong>{title}</strong>
          </Card.Text>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <CardDisplayModal
        show={showCardDisplay}
        hide={handleCardHide}
        data={{
          title,
          description,
          cardId,
          deckId
        }}
      />
    </div>
  );
};

export default UserCard;
