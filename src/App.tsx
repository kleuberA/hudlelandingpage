import { useState } from 'react'
import './App.css'
import Loading from './components/Loading';
import Home from './Pages/Home'

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() =>{
    setLoading(false);
  },3000)

  return (
    <div className="App">
      {loading == true ? <Loading/> : <Home/>}
    </div>
  )
}

export default App
