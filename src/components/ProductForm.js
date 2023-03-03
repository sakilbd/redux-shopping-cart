import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAdd } from "../redux/products/actions";


function ProductForm() {
    const c = console.log.bind(console);
    const stateData = useSelector((state)=>state.productReducer)
    const dispatch = useDispatch()
    const submitHandler = (e)=>{
        e.preventDefault();
        let formData = {}
        let formDataTags = e.target;
        let length = formDataTags.length-1; // as button needs to be excluded
       for(let idx = 0;idx<length;idx++){
        formData[formDataTags[idx].name] =formDataTags[idx].value
       }
       dispatch(productAdd(formData))
       
      
    }
  return (
    <div>
      {/* <!-- Product Input Form --> */}
      <div class="formContainer">
        <h4 class="formTitle">Add New Product</h4>
        <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={submitHandler}>
          {/* <!-- product name --> */}
          <div class="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              class="addProductInput"
              id="lws-inputName"
              type="text"
              name="product_name"
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div class="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              class="addProductInput"
              id="lws-inputCategory"
              type="text"
              name="product_catagory"
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div class="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              class="addProductInput"
              id="lws-inputImage"
              type="text"
              name="product_image_link"
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div class="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div class="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                class="addProductInput"
                type="number"
                id="lws-inputPrice"
                name="product_unit_price"
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div class="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                class="addProductInput"
                type="number"
                id="lws-inputQuantity"
                name="product_quantity"
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          {/* color hardcoded beacut of live server transparent issue */}
          <button type="submit" id="lws-inputSubmit" class="submit" style={{ background:'rgb(23,28,42)' }}> 
            Add Product
          </button>
        </form>
      </div>
      {/* <!-- Product Input Form Ends --> */}
    </div>
  );
}

export default ProductForm;
