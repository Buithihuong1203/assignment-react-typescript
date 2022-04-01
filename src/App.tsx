import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../src/pages/layouts/WebsiteLayout';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductType } from './type/Product';
import { useEffect, useState } from 'react';
import { add, list, remove, update } from './api/product';
import ProductList from './components/ProductList';
import ProductDetail from './pages/ProductDetail';
import Products from '../src/pages/Products';
import Homepage from '../src/pages/HomePage';
import Adminlayout from './pages/layouts/AdminLayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { toast, ToastContainer } from 'react-toastify';
import ProductAdd from './pages/ProductAdd';
import ProductManager from './pages/ProductManager';
import ProductEdit from './pages/ProductEdit';


function App() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      //console.log(data)
      setProducts(data);
    };
    getProducts();

  }, []);
  const onHandleAdd = async (product: ProductType) => {
    try {
      const { data } = await add(product);
      if (data) {
        toast.success("Thêm thành công");
      }
    } catch (error) {

    }

  }
  const onHandleRemove = async (id: number) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id));

  }

  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product);
      //console.log(data)
      setProducts(products.map(item => item._id === data.id ? product : item))
      if (data) {
        toast.success("Sửa thành công");
      }
    } catch (error) {

    }
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />} >
          <Route index element={<Homepage products={products} />} />
          <Route path="product"  >
            <Route index element={<Products products={products} />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

        <Route>
          <Route path='/admin' element={<Adminlayout />} >
            <Route path="product">
              <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />

            </Route>
          </Route>
        </Route>
      </Routes>
      <ToastContainer />

    </div>
  )
}

export default App
