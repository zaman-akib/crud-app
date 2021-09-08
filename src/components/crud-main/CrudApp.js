import React from 'react'
import ToDoList from '../todo/TodoList';
import { GlobalProvider } from '../../context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-col bg-gray-400 font-trebuchet p-5 m-20 md:mx-28 sm:mx-20 lg:mx-48 xl:mx-96 border rounded-xl shadow-lg">
        <div className="text-3xl text-center pb-5 font-bold underline">To-Dos</div>
        <ToDoList />
      </div>
    </GlobalProvider>
  )
}

export default App;
