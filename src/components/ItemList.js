import React from 'react';

function ItemList({ items, setCurrentItem, deleteItem }) {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.description}
            <button onClick={() => setCurrentItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
