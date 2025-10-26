import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation with Dark Mode Toggle */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">Tailwind CSS Core Concepts</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Core Concepts Demo
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the powerful utility-first CSS framework through interactive examples
          </p>
        </div>

        {/* 1. Utility Classes Demo */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            1. Utility Classes
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Build complex designs with simple utility classes
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg text-center">
              <p className="text-3xl mb-2">🎨</p>
              <p className="font-semibold">Gradients</p>
            </div>
            <div className="p-4 border-4 border-dashed border-pink-500 rounded-xl text-center bg-pink-50 dark:bg-pink-900/20">
              <p className="text-3xl mb-2">🎯</p>
              <p className="font-semibold text-pink-700 dark:text-pink-300">Borders</p>
            </div>
            <div className="p-4 bg-yellow-400 rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg">
              <p className="text-3xl">✨</p>
            </div>
          </div>
        </div>

        {/* 2. Hover, Focus, and States */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            2. States: Hover, Focus, and More
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interactive states for better user experience
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-all hover:shadow-lg">
              Hover Me
            </button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg focus:ring-4 focus:ring-green-300 focus:outline-none transition-all">
              Focus Me (Tab)
            </button>
            <button className="px-6 py-3 bg-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all">
              Disabled
            </button>
            <button className="px-6 py-3 bg-red-500 text-white rounded-lg active:bg-red-700 transform hover:scale-105 transition-transform">
              Active State
            </button>
          </div>
        </div>

        {/* 3. Responsive Design */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            3. Responsive Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Adaptive layouts for all screen sizes
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-lg text-center">
              <p className="text-2xl mb-2">📱</p>
              <p className="text-sm font-semibold">Small Screen</p>
              <p className="text-xs opacity-90">Hidden on mobile</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-lg text-center hidden sm:block">
              <p className="text-2xl mb-2">💻</p>
              <p className="text-sm font-semibold">Medium Screen</p>
              <p className="text-xs opacity-90">Visible on tablet+</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-lg text-center hidden lg:block">
              <p className="text-2xl mb-2">🖥️</p>
              <p className="text-sm font-semibold">Large Screen</p>
              <p className="text-xs opacity-90">Visible on desktop+</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-lg text-center hidden xl:block">
              <p className="text-2xl mb-2">📺</p>
              <p className="text-sm font-semibold">XL Screen</p>
              <p className="text-xs opacity-90">Visible on large desktop</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Resize your browser to see the responsive behavior
          </p>
        </div>

        {/* 4. Dark Mode */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            4. Dark Mode
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Beautiful dark mode with automatic color transitions
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">
                Adaptive Background
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Colors automatically adjust for dark mode
              </p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-200 dark:border-blue-700 rounded-lg">
              <h4 className="font-bold text-lg mb-3 text-blue-800 dark:text-blue-200">
                Contextual Colors
              </h4>
              <p className="text-blue-700 dark:text-blue-300">
                Text and borders adapt to theme
              </p>
            </div>
          </div>
        </div>

        {/* 5. Theme Variables */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            5. Theme Variables & Custom Colors
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Using custom brand colors from tailwind.config.js
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="h-32 bg-brand-50 flex items-center justify-center rounded-lg">
              <span className="text-sm font-semibold text-gray-700">Brand 50</span>
            </div>
            <div className="h-32 bg-brand-100 flex items-center justify-center rounded-lg">
              <span className="text-sm font-semibold text-gray-700">Brand 100</span>
            </div>
            <div className="h-32 bg-brand-500 flex items-center justify-center rounded-lg">
              <span className="text-sm font-semibold text-white">Brand 500</span>
            </div>
            <div className="h-32 bg-brand-700 flex items-center justify-center rounded-lg">
              <span className="text-sm font-semibold text-white">Brand 700</span>
            </div>
          </div>
        </div>

        {/* 6. Colors */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            6. Color System
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Tailwind's comprehensive color palette
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {[
              ['red', '500'],
              ['orange', '500'],
              ['yellow', '500'],
              ['green', '500'],
              ['blue', '500'],
              ['indigo', '500'],
              ['purple', '500'],
              ['pink', '500'],
            ].map(([color, shade]) => (
              <div
                key={color}
                className={`h-20 bg-${color}-${shade} rounded-lg flex items-center justify-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <span className="text-xs font-semibold text-white drop-shadow">{color}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Custom Styles */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            7. Custom Styles (Layers)
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Using @layer for custom components and utilities
          </p>
          <div className="space-y-4">
            <button className="btn-primary">
              Custom Button Component
            </button>
            <div className="space-y-2">
              <p className="text-gradient text-2xl font-bold">
                Custom Gradient Text Utility
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Created with @layer utilities
              </p>
            </div>
          </div>
        </div>

        {/* 8. Detecting Classes */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            8. Class Detection in Source Files
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Tailwind scans your files and only includes classes you use
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
            <code className="text-gray-800 dark:text-gray-200">
              {`// src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;`}
            </code>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Tailwind detects all classes used in your source files and includes them in the final CSS
          </p>
        </div>

        {/* 9. Functions & Directives */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            9. Directives & Functions
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Using @apply, theme(), and more
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm space-y-4">
            <div>
              <code className="text-gray-800 dark:text-gray-200">
                <span className="text-purple-600 dark:text-purple-400">@apply</span> - Apply utilities in CSS
              </code>
              <br />
              <code className="text-gray-800 dark:text-gray-200">
                <span className="text-purple-600 dark:text-purple-400">@layer</span> - Organize your custom styles
              </code>
              <br />
              <code className="text-gray-800 dark:text-gray-200">
                <span className="text-purple-600 dark:text-purple-400">theme()</span> - Access theme values
              </code>
              <br />
              <code className="text-gray-800 dark:text-gray-200">
                <span className="text-purple-600 dark:text-purple-400">@screen</span> - Media query functions
              </code>
            </div>
          </div>
        </div>

        {/* Advanced Examples */}
        <div className="card mb-8">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Advanced Concepts
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="transform hover:scale-105 transition-transform">
              <div className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <p className="text-3xl mb-3">🎭</p>
                <h4 className="font-bold text-white mb-2">Transformations</h4>
                <p className="text-white/90 text-sm">Scale, rotate, translate</p>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg hover:shadow-2xl transition-all animate-pulse">
              <p className="text-3xl mb-3">✨</p>
              <h4 className="font-bold text-white mb-2">Animations</h4>
              <p className="text-white/90 text-sm">Built-in & custom animations</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg hover:shadow-2xl transition-all blur-sm hover:blur-none">
              <p className="text-3xl mb-3">🎨</p>
              <h4 className="font-bold text-white mb-2">Filters</h4>
              <p className="text-white/90 text-sm">Blur, brightness, saturate</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-600 dark:text-gray-400">
          <p className="text-lg mb-2">🎉 Tailwind CSS Core Concepts</p>
          <p className="text-sm">Explore the power of utility-first CSS</p>
        </footer>
      </section>
    </div>
  )
}

export default App

