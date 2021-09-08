import React from 'react'
import ToDoMain from '../todo/TodoMain';
import { GlobalProvider } from '../../context/GlobalState'

function CrudApp() {
  return (
    <GlobalProvider>
      <div className="flex flex-col bg-gray-400 font-trebuchet p-5 m-20 md:mx-28 sm:mx-20 lg:mx-48 xl:mx-96 border rounded-xl shadow-lg">
        <div className="text-3xl text-center pb-5 font-bold underline">To-Dos</div>
        <ToDoMain />
      </div>
    </GlobalProvider>
  )
}

export default CrudApp;
