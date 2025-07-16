import React from "react";
import "./Header.css"
import {Link} from 'react-router-dom';


function Header() {
  


  return (
    <>
      
        <div class="container topContainer">
          <div class="row">
            <div class="col-2">
              <img src="https://images-static.nykaa.com/fashion-images/pub/media/logo-full.svg" alt=""/>
            </div>
           {/* <div class="col-2"><Link to="/homepage">Nykahome</Link></div> */}

{/* -------------- */}
          
            <div class="col-1 custom">
              <Link to="Women">
                Women
              </Link>
            </div>
            <div class="col-1 custom">
              <Link to="Men">
                Men
              </Link>
            </div>
            <div class="col-1 custom">
              <Link to="Kids">
                Kids
              </Link>
            </div>
            <div class="col-1 custom">
              <Link to="Home">
                Home
              </Link>
            </div> 
{/* ----------------- */}
          
            <div class="col-3">
             <input type="text"></input>
             <button>Search</button>
            </div>

            <div class="col-1 custom">
              <Link to="login">LogIn</Link>
            </div>
           
          </div>
        </div>
      
      
    </>
  );
}
export default Header;
