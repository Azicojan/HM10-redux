// FavoritesPage.js

import { useSelector } from 'react-redux';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className='App'>
      <h2>Favorites</h2>
      {favorites.map((favorite) => (
        <div key={favorite.id}>{favorite.title}</div>
      ))}
    </div>
  );
};

export default FavoritesPage;
