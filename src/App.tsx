import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />} />

      </Routes>

    </div>
  )
}

export default App
