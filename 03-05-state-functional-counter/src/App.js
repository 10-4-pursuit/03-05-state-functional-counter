// App.js
import React from 'react';
import Counter from './Counter'; // Adjust the path based on your project structure

function App() {
  return (
    <React.Fragment>
      <h1 style={{ color: 'blue' }}>Welcome to React</h1>
      <p style={{ color: 'green' }}>My name is Lanell. I am a Pursuit Fellow.</p>

      <button
        style={{ backgroundColor: 'orange', color: 'white', padding: '10px', cursor: 'pointer' }}
        onClick={() => alert('Button clicked!')}
      >
        Click me
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.elements.inputField.value);
        }}
      >
        <input type="text" name="inputField" placeholder="Enter something" />
        <button style={{ backgroundColor: 'purple', color: 'white', cursor: 'pointer' }} type="submit">
          Submit
        </button>
      </form>

      <Counter />
    </React.Fragment>
  );
}

export default App;
