import React from 'react'

function ListItems({itemData, deleteTodo}) {

     
  return (
    <div>

        <li className="p-2 bg-zinc-200 accent-blue-200 rounded flex mb-2">
            <span>{itemData.content}</span>
            <button onClick={()=>deleteTodo(itemData)} className="ml-auto bg-red-600 w-6 h-6 rounded text-zinc-200">X</button>

        </li>
    </div>
  )
}

export default ListItems
