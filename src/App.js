import { useState } from "react";

function App() {
  const [todoState, setTodoState] = useState([]);
  const [formState, setFormState] = useState({ text: "" });
  const ins = formState.text;

  const handleOnChange = (event) => {
    event.preventDefault();
    setFormState((formState) => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTodoState(todoState => [
      ...todoState,
      { ...formState, isDone: false }
    ]);
    setFormState({ text: "" });
  }



  function Search() {
    fetch(`https://api.github.com/users/${ins}`)
      .then(response => response.json())
      .then(json => console.log(json));
  };
  return (

    <div>

      <form onSubmit={handleOnSubmit}>
        <label for="text">Github username:</label><br /><br />
        <input name="text" type="text" placeholder="e.g. faceebook"
          onChange={handleOnChange}
          value={formState.text}

        />
        <button type="submit">Search</button>
      </form>

    </div>
  );
}

export default App;