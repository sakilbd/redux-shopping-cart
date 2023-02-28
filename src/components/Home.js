import React from 'react'
import ProductCard from './ProductCard'
import ProductForm from './ProductForm'
import { useSelector } from 'react-redux'

function Home() {
  const stateData = useSelector((state)=>state.productReducer)
  return (
    <div>
        <main class="py-16">
        <div class="productWrapper">
            {/* <!-- products container --> */}
            <div class="productContainer" id="lws-productContainer">
                {/* <!-- product item --> */}
                {
                  stateData.products.map((item,i)=>{
                    return (
                      <ProductCard key={i} productInfo = {item}/>
                    )
                  })
                }
               
                
                {/* <!-- product item ends --> */}

                
            </div>
            {/* <!-- products container ends --> */}
           <ProductForm/>
        </div>
    </main>
    </div>
  )
}

export default Home
