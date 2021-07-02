import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [item, setItem] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, isSetEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("plz fill data...");
    }
    else if (inputData && !toggleSubmit) {
      setItem(
        item.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );
      setToggleSubmit(true);
      setInputData('');
      isSetEditItem(null);
    }
    else {
      const allInputData = { id: new Date().getTime().toString(), name: inputData }
      setItem([...item, allInputData]);
      setInputData('');
    }
  }

  const deleteItem = (indx) => {
    const updateItem = item.filter((elem) => {
      return indx !== elem.id;
    });
    setItem(updateItem);
  }

  const removeAll = () => {
    setItem([]);
  }

  const editItem = (id) => {
    let newEditItem = item.find((elem) => {
      return elem.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    isSetEditItem(id);
  }
  return (
    <>
      <div>
        <div>
          <figure>
            <figcaption>Add List Here</figcaption>
          </figure>

          <div className="addItem">
            <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
            {
              toggleSubmit ?
                <button onClick={addItem}>Add</button>
                :
                <button onClick={addItem}>Edit</button>
            }
          </div>

          <div className="showItem">
            {
              item.map((elem) => {
                return (
                  <>
                    <input type="text" value={elem.name} />
                    <button onClick={() => editItem(elem.id)}>Add</button>
                    <button onClick={() => deleteItem(elem.id)}>delete</button>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default App;

