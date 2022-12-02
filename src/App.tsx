
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import See from './components/See'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/see' element={<See/>}/>

        </Routes>
      </BrowserRouter>
     {/* <Home/> */}
    </div>
  )
}

export default App
