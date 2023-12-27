import './App.css'
import { Link, Route, Routes, useRoutes } from 'react-router-dom'
import { Home } from "./pages/Home"
import { BookList } from "./pages/BookList"
import { Book } from './pages/Book'
import { NewBook } from './pages/NewBook'
import { NotFound } from './pages/NotFound'
import { BookLayout } from './BookLayout'
import BookRoutes from './BookRoutes'

function App() {

  // let element = useRoutes([
  //   { 
  //     path: "/",
  //     element: <Home></Home>,
  //   },

  //   { 
  //     path: "*",
  //     element: <NotFound></NotFound>,
  //   }
  // ]);

  return ( 
    <> 
    {/* <Routes location="/books"> 
     <Route path='/books' element={<h1>Extra Content</h1>} />
    </Routes> */}



    <nav> 
      <ul> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
      </ul>
    </nav>
    <Routes> 
     <Route path='/' element={<Home />} />
     <Route path='/books/*' element={<BookRoutes></BookRoutes>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>


    </>
  )

}

export default App
