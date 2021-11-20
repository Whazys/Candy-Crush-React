import {useState, useEffect} from 'react';

const width = 8
const candyColor = [
    'blue',
    'green',
    'orange',
    'purple',
    'red',
    'yellow'
]

const App= () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const createBoard = () => {
    const randomColorArrangement = []
    for (let i = 0; i < width * width; i++){
        const randomColor = candyColor[Math.floor(Math.random() * candyColor.length)]
        randomColorArrangement.push(randomColor)
    }
      setCurrentColorArrangement(randomColorArrangement)
  }

  useEffect(() => {
      createBoard();
  }, [])

    console.log(currentColorArrangement)

  return (
    <div className="app">
        <div className="game">
            {currentColorArrangement.map((candyColor, index) => (
                <img
                    key={index}
                    style={{backgroundColor: candyColor}}
                    alt={candyColor}
                />
            ))}
        </div>
    </div>

  );
}

export default App;
