import React, { useState } from 'react';
import dataText from './dataText';

function GeneratorText() {
  const [text, setText] = useState([]);
  const [values, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(values);

    // if minus -1,...dst print 1
    if (values < 0) {
      amount = 1;
    }
    // if high 10 print max array
    if (values > 10) {
      amount = 9;
    }
    // console.log(typeof amount);
    setText(dataText.slice(0, amount));
  };
  return (
    <div>
      <div className='title'>
        <h3>
          || text generator || <br />
          <span>dummy text</span>
        </h3>
      </div>
      <div className='section'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='name'>text </label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={values}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button type='submit' className='btn'>
            tambah text
          </button>
        </form>
        <article>
          {text.map((teks, index) => {
            return <p key={index}>{teks}</p>;
          })}
        </article>
      </div>
    </div>
  );
}

export default GeneratorText;
