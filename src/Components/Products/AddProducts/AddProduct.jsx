import React ,{useState}from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button'


const AddProduct = (props) => {
  const [productId,SetProductId]  =useState('')
  const [productPrice,SetProductPrice]  =useState('')
  const [productName,SetProductName]  =useState('')
    

const productIdHandler=(event)=>{
    
    
    SetProductId(event.target.value)

}
const productPriceHandler=(event)=>{
    SetProductPrice(event.target.value)

}
const ProductNameHandler=(event)=>{
    SetProductName(event.target.value)
    
}
const fromSubmitHandler=(event)=>{
    event.preventDefault();
   

    props.onAddProduct(productId,productPrice,productName)
    SetProductId('')
    SetProductPrice('')
    SetProductName('')
}

  return (
    <form onSubmit={fromSubmitHandler}>
        <Input type="number"
        label="Product ID"
        id="productId"
       onChange={productIdHandler}
       value={productId}
        />
        <Input type="number"
        label="Selling Price"
        id="price"
         onChange={productPriceHandler}
         value={productPrice}
        />
        <Input type="text"
        label="Product Name"
        id="productNames"
        value={productName}
        onChange={ProductNameHandler}/>
    <Button type='submit'>Add Product</Button>



    </form>
  )
}

export default AddProduct