import './App.css';
import Card from './components/card/Card';
import cards from './components/card/data';
import style300 from './assets/styles/300.module.css';
import style450 from './assets/styles/450.module.css';
import style550 from './assets/styles/550.module.css';
import style1000 from './assets/styles/1000.module.css';

function App() {
  const themes = [style300, style450, style550, style1000];
  return (
    <div className="App">
      {cards.map((card, i) => (
        <Card
          price={card.price}
          key={card.id}
          speed={card.speed}
          isSelected={card.isSelected}
          theme={themes[i]}
        />
      ))}
    </div>
  );
}

export default App;
