import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Todo from './Pages/Todo/Todo';
import SingleTodo from './Pages/SIngleTodo/SingleTodo';
import Completed from './Pages/Completed/Completed';
import Calender from './Pages/Calender/Calender';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Todo />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/completed' element={<Completed />}></Route>
        <Route path='/calender/:id' element={<Calender />}></Route>
        <Route path='/todo/:id' element={<SingleTodo></SingleTodo>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
