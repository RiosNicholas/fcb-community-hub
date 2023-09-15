import './App.css';
import Header from './components/Header';
import EventContainer from './components/EventContainer';
import BackgroundImage from './assets/fcb-huddle.png'; // Import the background image

function App() {
  const backgroundStyle = {
    background: `rgba(0, 0, 0, 0.1) url(${BackgroundImage})`, // Adjust the opacity value (0.1 for 10% opacity)
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Set a minimum height to fill the screen
  };

  return (
    <div className='mb-16' style={backgroundStyle}>
      <Header />
      <EventContainer />
    </div>
  );
}

export default App;
