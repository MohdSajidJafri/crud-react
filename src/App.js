import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './App.css'; // Import the app.css file
import './index.css';

function App() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);

  const createItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
    setCurrentItem(null);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <ItemForm
        currentItem={currentItem}
        createItem={createItem}
        updateItem={updateItem}
      />
      <ItemList
        items={items}
        setCurrentItem={setCurrentItem}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
