export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">

      <header className="sticky top-0 z-50 bg-stone-400/80 dark:bg-stone-800/80 backdrop-blur-sm shadow-md mb-2">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-left items-center h-16 space-x-8">
            <a href='/' className="text-2xl font-bold text-gray-900 dark:text-white">Elliot Reese</a>
            <a href="/#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a href="/#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projects
            </a>
            <a href="/#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Skills
            </a>
            <a href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>


      <div className="max-w-4xl mx-auto text-center mt-4">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">FRC 2022 Robot</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">
          For this year, I once again oversaw the design process of the entire robot.
        </p>
        
      </div>
    </div>
  )
}