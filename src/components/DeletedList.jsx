import React from 'react';
import DeletedItem from './DeletedItem';

function DeletedList({ deletedTodos, onRestore, onDeletePermanently }) {
  return (
    <div className="mb-12 mt-8 animate-fadeIn">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 h-1 w-12 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">
          Deleted Tasks
          <span className="ml-3 text-lg font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
            {deletedTodos.length}
          </span>
        </h2>
      </div>
      
      {deletedTodos.length === 0 ? (
        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-12 text-center border-2 border-dashed border-red-200">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <p className="text-lg text-gray-600 font-medium">No deleted tasks</p>
          <p className="text-sm text-gray-500 mt-2">Trash is empty</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {deletedTodos.map((todo) => (
            <DeletedItem 
              key={todo.id} 
              todo={todo} 
              onRestore={onRestore}
              onDeletePermanently={onDeletePermanently}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DeletedList;
