import {Route,Routes} from "react-router-dom";
import {Filter} from "./Components"
import './App.css';
import { Home,SearchResults,SingleHotel } from './pages';
function App() {
  return (
    
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel/>}/>
      <Route path = "/hotels/:address" element={<SearchResults/>}/>
      <Route path = "/filters" element={<Filter></Filter>}/>
    </Routes>
    
  );
}

export default App;
