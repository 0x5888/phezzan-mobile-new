import './App.css';
import Home from "./pages/Home"
import { isMobile } from 'react-device-detect';

function App() {
  if (!isMobile) {
    // eslint-disable-next-line no-useless-concat
    window.location.href = "https://phezzan-web-new.vercel.app" + '?t='+Math.random()
  }

  return (
    <Home/>
  );
}

export default App;