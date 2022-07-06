import './App.css';
import Products from './admin/Products';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from './main/Main';
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';

function App() {
  return (
    <div className="App">
      
      
            <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Main/>} />
              <Route exact path='/admin/products' element={<Products />} />
              <Route exact path='/admin/products/create' element={<ProductsCreate />} />
              <Route exact path='/admin/products/:id/edit' element={<ProductsEdit />} />
              </Routes>
            </BrowserRouter>

    </div>
  );
}

export default App;
