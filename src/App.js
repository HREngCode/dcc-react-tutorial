import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry ]; //... is how we spread an array apart
    setEntries(tempEntries);
  }

  return (
    <div className="App">
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
      
    </div>
  );
}

export default App;
