import React,{useState} from "react";
import axios from "axios";
import "./Home.css";

function Home(){
    
    

    //this is where we store our products
    const [products, setProducts]=useState([]);
    //this tells us if we are loading
    const [loading, setLoading]=useState(false);
   
    //function for button onclick
    function loadProducts(){
        setLoading(true);//start loading the products

        // API call to fetch women's products
        axios
        .get("https://fakestoreapi.com/products/category/women's clothing")
        .then((response) => {
        setProducts(response.data); // Store products in state
        setLoading(false); // Stop loading the products
        })
        .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading in case of error
        });
    }


    
    return(
        <>
       
        <h1 style={{textAlign:"center",color:"lightpink",margin:"50px"}}>Click The Below Button to view the products</h1>
        <button className="buttonClass" onClick={loadProducts}>
            Api Products
            {loading ? "Loading..." : "  Load products"}
        </button>
         {/* Display products */}
        
        <div className="products-container">
            {products.map((product) => (
            <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p><b>Price: </b>${product.price}</p>
            </div>
            ))}
        </div>

        </>
    )
}
export default Home;