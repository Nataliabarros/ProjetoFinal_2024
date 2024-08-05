import React, { useState } from 'react';



function Crud() {
  // Estado para gerenciar os itens
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  // Função para adicionar um item
  const addItem = () => {
    if (currentItem.trim()) {
      setItems([...items, currentItem]);
      setCurrentItem("");
    }
  };

  // Função para deletar um item
  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // Função para preparar a edição de um item
  const editItem = (index) => {
    setIsEditing(true);
    setCurrentItem(items[index]);
    setEditingIndex(index);
  };

  // Função para atualizar um item
  const updateItem = () => {
    if (currentItem.trim()) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? currentItem : item
      );
      setItems(updatedItems);
      setIsEditing(false);
      setCurrentItem("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="Crud">
      <header>
        <h1>CRUD App</h1>
      </header>
      <div>
        <input
          type="text"
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)}
        />
        <button onClick={isEditing ? updateItem : addItem}>
          {isEditing ? "Atualizar" : "Adicionar"}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>Editar</button>
            <button onClick={() => deleteItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
