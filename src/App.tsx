import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/Websitelayout';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductType } from './type/Product';
import { useEffect, useState } from 'react';
import { list } from './api/product';
import ProductList from './components/ProductList';
import ProductDetail from './pages/ProductDetail';
import Products from '../src/pages/Products';
import Homepage from './pages/Homepage';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      //console.log(data)
      setProducts(data);
    };
    getProducts();

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />} >
          <Route index element={<Homepage products={products} />} />
          <Route path="product"  >
            <Route index element={<Products products={products} />} />
            <Route path="/product/:id" element={<ProductDetail />} />


          </Route>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
