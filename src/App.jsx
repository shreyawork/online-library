import { BrowserRouter as Router,Route,Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/Store';
import HomePage from './Components/HomePage';
import BrowseBookPage from './Components/BrowseBookPage';
import AddBookPage from './Components/AddBookPage';
import BookDetailsPage from './Components/BookDetailsPage';
import NotFoundpage from './Components/NotFoundPage';
import './App.css'

const App=() =>(
  <Provider store={store}>
  <Router>
  <Routes>
   <Route path='/' Component={HomePage} />
   <Route path='/Browse' Component={BrowseBookPage} />
   <Route path="/add-book" element={<AddBookPage />} />
   <Route path='/book/:bookId' element={<BookDetailsPage/>} />
   <Route path ="" Component={NotFoundpage} />
   <Route path="/books/:category" exact element={<BrowseBookPage />} />


  </Routes>
  </Router>
  </Provider>
);
export default App;
