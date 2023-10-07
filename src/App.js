import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Menu from './components/Menu';
import Footer from './components/Footer';
import HeadPhones from './components/HeadPhones';
import Speakers from './components/Speakers';
import EarPhones from './components/EarPhones';
import ProductDetail from './components/ProductDetail';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout';
// import SummaryItems from './components/SummaryItems';
import Thankyou from './components/Thankyou';


function App() {

  const [product, setProduct] = useState({});
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(value => setDate(value))
  }, [])

  function viewProduct(slug) {
    data.map(item => item.slug == slug && setProduct(item))
  }

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#141414" }}>
        <Menu />
      </div>
      <Routes>
          <Route exact path="/" element={ 
            <Home send={slug => viewProduct(slug) } /> }> 
          </Route>

          <Route exact path="/headphones" element={ 
            <HeadPhones send={slug => viewProduct(slug) } /> }> 
          </Route>

          <Route exact path="/speakers" element={ 
            <Speakers send={slug => viewProduct(slug) } /> }> 
          </Route>

          <Route exact path="/earphones" element={ 
            <EarPhones send={slug => viewProduct(slug) } /> }> 
          </Route>

          <Route exact path="/prdDetail" element={ 
            <ProductDetail product={product} send={slug => viewProduct(slug)} /> }> 
          </Route>

          <Route exact path="/checkout" element={ 
            <Checkout send={slug => viewProduct(slug) } /> }> 
          </Route>

          <Route exact path="/checkout" element={ 
            <Thankyou send={slug => viewProduct(slug) } /> }> 
          </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
