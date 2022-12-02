
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Details from './components/Details';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/details/:flight_number" element={ <Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
