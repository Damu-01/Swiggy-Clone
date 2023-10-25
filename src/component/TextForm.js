import { useState } from "react";
// import React from 'react';   
const TextForm = () => {

  // const [text, settext] = useState('Enter Text here');
  const darkMode = {
    backgroundColor: 'black',
    color: 'white'
  }
  const lightMode = {
    backgroundColor: 'white',
    color: 'black'
  }
  const [mode, setMode] = useState(lightMode);

  const handleChange = (event) => {
    // settext(event.target.value);
  }

  const toggleMode = () => {
    // alert("hii");
    if (mode.backgroundColor === "white") {
      setMode(darkMode);
      console.log(mode, "mode");
    }
    else {
      setMode(lightMode);
      console.log(mode, "mode");
    }
  }

  return (
    <div className="container mt-3">
      <h2>Textarea</h2>
      <form action="/action_page.php">
        <div className="mb-3 mt-3">
          <label htmlFor="comment">Enter Text Here</label>
          <textarea style={mode} className="form-control" rows="5" id="comment"
            name="text"
            onChange={handleChange} ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={toggleMode}>Mode</button>
      </form>
      <div className=""></div>
    </div>
  )
}

export default TextForm;



