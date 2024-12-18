import {Fragment,useState,useEffect} from 'react';
import ProductDetail from '../components/productCard';
import { useSearchParams } from 'react-router-dom';

const Home = ()=>{

    const [products,setProducts] = useState([]);
    const [searchParams,setSearchParams] = useSearchParams();

    useEffect(()=>{
            fetch(process.env.REACT_APP_API_URL + "/products?"+searchParams).then( (res)=> res.json()).then( (res)=> setProducts(res['products']));
    },[searchParams])    
    return(
        <Fragment>
    

            <h1 id="products_heading">Our Products</h1>

            <section id="products" className="container mt-5">
                    <div className="row">
                        {products.map(product=><ProductDetail product={product}/>)}
                    </div>
            </section>

            
        </Fragment>
    )
}

export default Home;