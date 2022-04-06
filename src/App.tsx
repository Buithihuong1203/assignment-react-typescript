import { Routes, Route } from 'react-router-dom';
import WebsiteLayout from '../src/pages/layouts/WebsiteLayout';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ProductType } from './type/Product';
import { useEffect, useState } from 'react';
import { addProduct, listProduct, removeProduct, updateProduct } from './api/product';
import ProductList from './components/ProductList';
import ProductDetail from './pages/ProductDetail';
import Products from '../src/pages/Products';
import Homepage from '../src/pages/HomePage';
import Adminlayout from './pages/layouts/AdminLayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { toast, ToastContainer } from 'react-toastify';
import ProductAdd from './pages/admin/product/ProductAdd';
import ProductManager from './pages/ProductManager';
import ProductEdit from './pages/admin/product/ProductEdit';
import PostManager from './pages/PostManager';
import PostEdit from './pages/admin/post/PostEdit';
import PostAdd from './pages/admin/post/PostAdd';
import { PostType } from './type/Post';
import Categories from './pages/Categories';
import { CategoryType } from './type/Category';
import Posts from './pages/Posts';
import PostDetail from './pages/PostDetail';
import { readCate, listCate, addCate, removeCate, updateCate } from './api/category';
import { addPost, listPost, removePost, updatePost } from './api/post';
import CategoryManager from './pages/CategoryManager';
import CategoryAdd from './pages/admin/categories/CategoryAdd';


function App() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    const getCategory = async () => {
      const { data } = await listCate();
      //console.log(data)
      setCategories(data);
    }
    getCategory();
  })


  useEffect(() => {
    const getProducts = async () => {
      const { data } = await listProduct();
      //console.log(data)
      setProducts(data);
    };
    getProducts();

  }, []);
  useEffect(() => {
    const getPost = async () => {
      const { data } = await listPost();
      //console.log(data)
      setPosts(data);
    };
    getPost();

  }, []);
  const onHandleAddCategory = async (categories: any, user: any, token: any) => {
    try {
      const { data } = await addCate(categories, user, token);
      setCategories([...categories, data])
    } catch (error) {

    }
  }
  const onHandleRemoveCategory = async (id: number, user: any, token: any) => {
    removeCate(id, user, token);
    setCategories(categories.filter(item => item._id !== id))

  }
  const onHandleUpdateCategory = async (categories: any, user: any, token: any) => {
    try {
      const { data } = await updateCate(categories, user, token);
      setCategories(categories.map(item => item._id === data.id ? categories : item))
    } catch (error) {

    }
  }
  const onHandleAddProduct = async (product: any, user: any, token: any) => {
    try {
      const { data } = await addProduct(product, user, token);
      setProducts([...products, data])
      if (data) {
        toast.success("Thêm thành công");
      }
    } catch (error) {

    }

  }
  const onHandleRemoveProduct = async (id: number, user: any, token: any) => {
    removeProduct(id, user, token);
    setProducts(products.filter(item => item._id !== id));

  }

  const onHandleUpdateProduct = async (product: any, user: any, token: any) => {
    try {
      const { data } = await updateProduct(product, user, token);
      //console.log(data)
      setProducts(products.map(item => item._id === data.id ? product : item))
    } catch (error) {

    }
  };
  const onHandleAddPost = async (post: PostType) => {
    try {
      const { data } = await addPost(post);
      if (data) {
        toast.success("Thêm thành công");
      }
    } catch (error) {

    }

  }
  const onHandleRemovePost = async (id: number) => {
    removePost(id);
    setPosts(posts.filter(item => item._id !== id));

  }

  const onHandleUpdatePost = async (post: PostType) => {
    try {
      const { data } = await updatePost(post);
      console.log(data)
      setPosts(posts.map(item => item._id === data.id ? post : item))
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
        <Route path='/post' element={<Posts />} />


        <Route>

          <Route path='/admin' element={<Adminlayout />} >
            <Route path='category'>
              <Route index element={<CategoryManager categories={categories} onRemoveCategory={onHandleRemoveCategory} />} />


            </Route>
            <Route path="product">
              <Route index element={<ProductManager products={products} onRemoveProduct={onHandleRemoveProduct} />} />
              <Route path="add" element={<ProductAdd onAddProduct={onHandleAddProduct} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdateProduct={onHandleUpdateProduct} />} />

            </Route>
            <Route path="post">
              <Route index element={<PostManager posts={posts} onRemovePost={onHandleRemovePost} />} />
              <Route path="add" element={<PostAdd onAddPost={onHandleAddPost} />} />
              <Route path=":id/edit" element={<PostEdit onUpdatePost={onHandleUpdatePost} />} />

            </Route>
          </Route>

        </Route>
      </Routes>
      <ToastContainer />

    </div>
  )
}

export default App
