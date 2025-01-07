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

export default GameCard;