import { createContext, useEffect, useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import Table from './components/Table';
import './lib/font-awesome/css/all.min.css';

export const GlobalContext = createContext();

function App() {
  const [show, setShow] = useState(false);

  const [info, setInfo] = useState([]);

  const onAdd = (data) => {
    setInfo([...info, data]);
    setShow(false);
  };

  const handleDelete = (data) => {
    const removedArr = info.filter((o) => o.name !== data);
    setInfo(removedArr);
  };

  const handleClick = () => {
    setShow(true);
  };

  useEffect(() => {
    console.log(info);
  });

  return (
    <GlobalContext.Provider
      value={{ show, setShow, onAdd, info, handleDelete }}
    >
      <div className='App'>
        <div className='button'>
          <button onClick={handleClick} type='button'>
            ADD
          </button>
        </div>
        <Table />
        {show && <Modal />}
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
