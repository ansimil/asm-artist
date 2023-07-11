import './App.css';
import Navbar from './components/Navbar';
import NewsCardContainer from './components/NewsCardContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <details className='details-container news-details'>
        <summary className='summary-container news-summary'>
        <h4 className='summary__header'>news</h4>
        </summary>
        <NewsCardContainer />
      </details>
      <details className='details-container news-details'>
        <summary className='summary-container news-summary'>
        <h4 className='summary__header'>music</h4>
        </summary>
      </details>
      <details className='details-container news-details'>
        <summary className='summary-container news-summary'>
        <h4 className='summary__header'>about</h4>
        </summary>
      </details>
      <details className='details-container news-details'>
        <summary className='summary-container news-summary'>
        <h4 className='summary__header'>contact</h4>
        </summary>
      </details>
      
    </div>
  );
}

export default App;
