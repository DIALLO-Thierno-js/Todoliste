// src/App.js

import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import ListItems from './ListItems';

function App() {
  // Définir l'état initial avec trois éléments de la liste de tâches
  const [todoList, setTodoList] = useState([
    { id: nanoid(5), content: "item1" },
    { id: nanoid(5), content: "item2" },
    { id: nanoid(5), content: "item3" },
  ]);

  const [todo, setTodo] = useState(""); // Correction de la déclaration de l'état

  // Fonction pour supprimer une tâche
  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  // Fonction pour ajouter une nouvelle tâche
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim()) {
      setTodoList([...todoList, { id: nanoid(5), content: todo }]);
      setTodo("");
    }
  }

  return (
    <div className="h-screen bg-slate-900">
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl text-slate-100 mb-4">To do list</h1>

        <form onSubmit={handleSubmit} className="accent-blue-100">
          <label htmlFor="todo-item" className="text-slate-50">
            Ajouter une chose à faire
          </label>
          <input 
            id="todo-item"
            value={todo}
            onChange={(e) => setTodo(e.target.value)} // Correction de la syntaxe onChange
            type="text"
            className="mt-block w-full rounded"
          />
          <button type="submit" className="mt-4 py-2 bg-slate-50 rounded min-w-[115px] mb-2">
            Ajouter
          </button>
        </form>

        <ul>
          {todoList.length === 0 && (
            <li className="text-slate-100">Vous n'avez rien dans votre liste de tâches</li>
          )}
          {todoList.map(item => (
            <ListItems
              key={item.id}
              itemData={item}
              deleteTodo={() => deleteTodo(item.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
