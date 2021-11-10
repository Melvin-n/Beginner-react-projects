import React from 'react'
function App() {
  return (
    <div>
    <h1>Search by name.</h1>
      <form method='post' action='http://localhost:4000/digimon/name/'>
        <input name='name' placeholder='name'type='text'></input>
        <button className='btn btn-primary' type='submit'>Search</button>
      </form>

    </div>
  );
}

export default App;
