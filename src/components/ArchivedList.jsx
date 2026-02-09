import React from 'react';
import ArchivedItem from './ArchivedItem';

function ArchivedList({ archivedTodos, onRestore, onDelete }) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-1 w-12 rounded-full mr-4"></div>
        <h2 className="text-3xl font-bold text-gray-800">
          Archived Tasks
          <span className="ml-3 text-lg font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            {archivedTodos.length}
          </span>
        </h2>
      </div>
      
      {archivedTodos.length === 0 ? (
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-12 text-center border-2 border-dashed border-orange-200">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <p className="text-lg text-gray-600 font-medium">No archived tasks</p>
          <p className="text-sm text-gray-500 mt-2">Completed tasks will appear here</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {archivedTodos.map((todo) => (
            <ArchivedItem 
              key={todo.id} 
              todo={todo} 
              onRestore={onRestore}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArchivedList;
