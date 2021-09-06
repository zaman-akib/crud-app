import React from 'react'
import './index.css'
import ToDoList from './ToDoList';

function App() {
  return (
    <React.Fragment>
      <div className="flex flex-col font-trebuchet p-5 m-20 md:mx-28 sm:mx-20 lg:mx-48 border rounded-xl border-green-200 shadow-lg">
        <div className="text-3xl text-center pb-5 font-bold underline">To-Dos</div>
        <ToDoList />
      </div>
    </React.Fragment>
  )
}

export default App;
