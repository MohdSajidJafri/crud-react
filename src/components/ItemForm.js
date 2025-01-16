import React, { useState, useEffect } from 'react';

function ItemForm({ currentItem, createItem, updateItem }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name);
      setDescription(currentItem.description);
    }
  }, [currentItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: currentItem ? currentItem.id : Date.now(),
      name,
      description,
    };

    if (currentItem) {
      updateItem(newItem);
    } else {
      createItem(newItem);
    }

    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>{currentItem ? 'Edit Item' : 'Create Item'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">{currentItem ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
}

export default ItemForm;
