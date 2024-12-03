import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './Context.jsx'

createRoot(document.getElementById('root')).render(
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
)
