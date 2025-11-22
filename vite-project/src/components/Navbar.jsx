import React from 'react'



export default function Navbar() {
  return (
    <div className="w-full">
        <img src="images/logo.png" alt="Logo" class="logo"/>
        <div class="cart">
            <h5>MEN</h5>
            <h5>WOMEN</h5>
            <h5>KIDS</h5>
            <h5>BRANDS</h5>
        </div>

        <div class="search-bar">
            <input type="text" placeholder="Search for products, brands and more"/>
            <button>Search</button>
        </div>
        <div class="user-actions">
            <button class="header-icon">
                <i class="fa-solid fa-right-to-bracket"></i>
            </button>
            <button class="header-icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button class="header-icon favourite">
                <i class="fa-solid fa-heart"></i>
            </button>

        </div>
      </div>
      
  )
}
