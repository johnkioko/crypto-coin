import { Route, Routes } from 'react-router-dom';
import './App.css';
import Crytpos from './Components/Crytpos';
import Crypto from './Components/Crypto';
import NavBar from './Components/NavBar';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <>
            <NavBar />
            <Crytpos />
          </>
        )}
      />
      <Route
        path="/crypto-details"
        element={(
          <>
            <DetailsPage />
            <Crypto />
          </>
        )}
      />
    </Routes>
  );
}

export default App;
