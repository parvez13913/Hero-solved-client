import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Todo from './Pages/Todo/Todo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Todo />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
