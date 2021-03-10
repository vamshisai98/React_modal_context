import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from '../App';

const Modal = () => {
  const { show, setShow, onAdd } = useContext(GlobalContext);
  const handleClose = () => {
    setShow(false);
  };

  const [details, setDetails] = useState({
    name: '',
    place: '',
    age: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: [e.target.value] });
  };

  const inpRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!inpRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className='modal'>
      <div className='modal-box' ref={inpRef}>
        <div className='modal-content'>
          <div className='form'>
            <form>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                onChange={handleChange}
                value={details.name}
              />

              <label htmlFor='place'>Place</label>
              <input
                type='text'
                name='place'
                onChange={handleChange}
                value={details.place}
              />

              <label htmlFor='age'>age</label>
              <input
                type='number'
                name='age'
                onChange={handleChange}
                value={details.age}
              />

              <button type='button' onClick={() => onAdd(details)}>
                Add
              </button>
              <button type='button' onClick={handleClose}>
                close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
