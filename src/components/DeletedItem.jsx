import React from 'react';

function DeletedItem({ todo, onRestore, onDeletePermanently }) {
  return (
    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 border-l-4 border-red-500 group hover:scale-[1.02] opacity-80 hover:opacity-100">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            <h3 className="text-xl font-bold text-gray-700 line-through">
              {todo.title}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4 ml-7 line-through">
            {todo.description || <span className="italic text-gray-400">No description</span>}
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-4">
        <button 
          onClick={() => onRestore(todo.id)}
          className="flex-1 min-w-[120px] bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Restore</span>
        </button>
        <button 
          onClick={() => onDeletePermanently(todo.id)}
          className="flex-1 min-w-[120px] bg-gradient-to-r from-gray-800 to-gray-900 hover:from-black hover:to-gray-800 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200 flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Delete Forever</span>
        </button>
      </div>
    </div>
  );
}

export default DeletedItem;
