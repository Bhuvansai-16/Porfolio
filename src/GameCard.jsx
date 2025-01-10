<<<<<<< HEAD
import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.imageUrl} alt={game.title} className="game-image" />
      <h3 className="game-title">{game.title}</h3>
      <a href={game.link} target="_blank" rel="noopener noreferrer" className="game-link">
        Play Now
      </a>
    </div>
  );
};

=======
import React from 'react';

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.imageUrl} alt={game.title} className="game-image" />
      <h3 className="game-title">{game.title}</h3>
      <a href={game.link} target="_blank" rel="noopener noreferrer" className="game-link">
        Play Now
      </a>
    </div>
  );
};

>>>>>>> 5a7a55546c51f4b79b7ce2f7aff24278c8aca90d
export default GameCard;