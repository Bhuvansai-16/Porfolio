import GameCard from './GameCard';

const games = [
  {
    id: 1,
    title: 'Game 1',
    imageUrl: './src/game1.png',
    link: 'https://kzmov5xo2b0w0jqu7sde.lite.vusercontent.net/'
  }
  // Add more games as needed
];

const Games = () => {
  return (
    <div id="games">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Games;