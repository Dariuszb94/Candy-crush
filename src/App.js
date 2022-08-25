import { useEffect, useState } from 'react';

const width = 8;
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];

    for (let i = 0; i < width * width; i++) {
      const randomNumber = Math.random();
      const randomColorIndex = Math.floor(randomNumber * candyColors.length);
      const randomColor = candyColors[randomColorIndex];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className='app'>
      <div className='game'>
        {currentColorArrangement.map((candyColor, index) => (
          <img
            key={index}
            alt={candyColor}
            style={{ backgroundColor: candyColor }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
