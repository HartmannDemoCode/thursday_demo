import { useState, useEffect } from "react";
import "./App.css";
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";

const url = 'http://localhost:3000/api';

function App() {
  const [persons, setPersons] = useState([]);
  const [person, setPerson] = useState({})

  useEffect(() => {
    fetch(url).then((res)=>res.json())
    .then((data)=>{
      setPersons(data);
    })

  },[person]);

  return (
    <>
      <PersonList persons={persons} setPerson={setPerson}/>
      <PersonForm setPerson={setPerson}/>
    </>
  );
}

export default App;
