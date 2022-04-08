import './App.css';
import Home from "./pages/Home"
import { isMobile } from 'react-device-detect';

function App() {
  if (!isMobile) {
    // eslint-disable-next-line no-useless-concat
    window.location.href = "https://www.phezzan.xyz" + '?t='+Math.random()
    return <></>;
  }

  return (
    <Home/>
  );
}

export default App;
