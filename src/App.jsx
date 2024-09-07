import { useState } from 'react'
import Page from './components/Page'
import { ThemeContext } from './context'
function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode ? 'dark' : ''}`}>
        <Page />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
