import './App.css';
import Header from './components/Header';
import EventContainer from './components/EventContainer';
import BackgroundImage from './assets/fcb-huddle.png'; // Import the background image

function App() {
  const backgroundStyle = {
    background: `url(${BackgroundImage})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', 
  };

  return (
    <div className='mb-16' style={backgroundStyle}>
      <Header />
      <EventContainer />
    </div>
  );
}

export default App;
