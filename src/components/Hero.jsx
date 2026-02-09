import React from 'react';

function Hero() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Stay Organized,
            <span className="block text-yellow-300">Stay Productive</span>
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
            Manage your tasks effortlessly with our intuitive todo app. Archive completed tasks, 
            restore when needed, and keep your workflow clean.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 text-white font-semibold">
              <span className="text-3xl font-bold">3</span>
              <span className="text-sm ml-2">Active States</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 text-white font-semibold">
              <span className="text-3xl font-bold">∞</span>
              <span className="text-sm ml-2">Possibilities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
