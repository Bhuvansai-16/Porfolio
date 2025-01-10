<<<<<<< HEAD
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

=======
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

>>>>>>> 5a7a55546c51f4b79b7ce2f7aff24278c8aca90d
export default Games;