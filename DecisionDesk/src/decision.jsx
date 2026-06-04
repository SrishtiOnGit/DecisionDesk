import React, {useState} from 'react'
import './decision.css';

 function decision() {
    const [options,setOptions] = useState([]);
    const [input, setInput] = useState('');
    const [title, setTitle] = useState('');
    const [decision, setDecision] = useState('');

    return (
      <div className="container">
        <div>
            <h1 className="title">Decision Desk</h1>
            <p className="subtitle">Fill out this form to make a decision.</p>
            </div>
            <div className="decision-form">
                <input className="input" type="text" 
                value = {input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter an option'/>
                <button className="add-button" onClick={() => {
                    if(input.trim() !== '') {
                        setOptions([...options, input]);
                        setInput('');
                    }
                }}>Add Option</button>
                <ul>
                     {options.map((item, index) => (
                     <li key={index}>
                      {item}
                      <button
        className="remove-button"
        onClick={() => {
          setOptions(options.filter((_, i) => i !== index));
        }}
      >
        ❌
      </button>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="decision-code">
              <input
  className="input"
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="What decision are you making?"
/>
<button
  className="result-button"
  onClick={() => {
    const decision = options[Math.floor(Math.random() * options.length)];
    setDecision(decision);
  }}
>
  Generate Decision
</button>
              <p className="decision">{decision}</p>
            </div>
      </div>
    )
}


export default decision;