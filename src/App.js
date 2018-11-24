import React, { useState, useRef, useMemo } from 'react';

import './App.css';
import { options } from './constants';

// Hooks
import useTextCase from './hooks/useTextCase';
import useCopy from './hooks/useCopy';

// Components
import CountDiplay from './components/CountDisplay';
import Footer from './components/Footer';
import If from './components/If';

function App() {
  const [outputValue, dispatch, types] = useTextCase();

  const [inputValue, setInputValue] = useState('');

  // refs
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const [copy, isCopied] = useCopy();

  const characterCount = useMemo(() => inputValue.length, [inputValue]);

  const wordCount = useMemo(
    () => (inputValue ? inputValue.trim().split(/\s+/).length : 0),
    [inputValue],
  );

  function selectOutput() {
    outputRef.current.select();
  }

  function handleClear() {
    // clear the values of both the input and output
    dispatch({ type: types.clear });
    setInputValue('');
  }

  return (
    <div className="App">
      <h1 className="title">text-case</h1>
      <textarea
        autoFocus
        ref={inputRef}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="textarea"
        placeholder="Enter text"
      />
      <div style={{ height: '15px' }}>
        <If condition={!!inputValue}>
          <button onClick={handleClear} className="small-button">
            clear
          </button>
        </If>
      </div>

      <div className="count-wrapper">
        <CountDiplay label="Character Count" value={characterCount} />
        <CountDiplay label="Word Count" value={wordCount} />
      </div>

      <div className="button-wrapper">
        {options.map(option => (
          <button
            key={option.name}
            className="option-button"
            disabled={!inputValue.length}
            onClick={() =>
              dispatch({ type: types[option.name], payload: inputValue })
            }
          >
            {option.label}
          </button>
        ))}
      </div>
      <h3>OUTPUT:</h3>
      <textarea
        ref={outputRef}
        value={outputValue}
        disabled={!outputValue.length}
        onFocus={selectOutput}
        className="textarea"
        style={{ backgroundColor: 'lightgray' }}
      />
      <If condition={!!outputValue}>
        <div>
          <button
            onClick={() => copy(outputRef.current)}
            className="small-button"
            disabled={!outputValue.length}
          >
            copy
          </button>
          <div>{isCopied && <small>copied!</small>}</div>
        </div>
      </If>

      <Footer />
    </div>
  );
}

export default App;
