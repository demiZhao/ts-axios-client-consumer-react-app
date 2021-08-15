import { PetsApi } from 'PetStore';
import { useState, useEffect } from "react"

import logo from './logo.svg';
import './App.css';

function App() {
  const [petList, setPetList] = useState([]);

  useEffect(async () => {
    try {
      new PetsApi()
        .listPets()
        .then((response) =>
          setPetList(response.data.map((pet) => JSON.stringify(pet)))
        );
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{petList}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
