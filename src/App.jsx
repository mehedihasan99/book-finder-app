import { useState } from 'react'
import { Provider } from 'react-redux'
import Page from './components/Page'
import { ThemeContext } from './context'
import store from './utils/store'
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <div className={`${darkMode ? 'dark' : ''}`}>
            <Page />
          </div>
        </ThemeContext.Provider>
      </Provider>
    </>
  )
}

export default App
