import axios from "axios";
import { useEffect, useState } from "react";
import "./ProductOperations.css";

export const URL = "http://localhost:3000/products";

function ProductOperation(){

    let [products,setProducts] = useState([]);
    let [error,setError] = useState("");
    let [product,setProduct] = useState({pname:"",price:"",qty:""});
    let [msg,setMessage] = useState("");
    let [buttonValue,setButtonValue] = useState("Add Product");

    // useEffect called whenever msg changes
    useEffect(()=>{
        loadProductsDetailsES6Style();
    },[msg])

    // Load product details
    let loadProductsDetailsES6Style = async () =>{
        try{
            let result = await axios.get(URL);
            setProducts(result.data);
        }catch(error){
            setError(error.message);
        }
    }

    // Add or Update product
    let storeOrUpdateProduct = async (event)=>{
        event.preventDefault();
        setMessage("");

        try{

            if(buttonValue === "Add Product"){

                let result = await axios.post(URL,product);
                setMessage(result.statusText);

            }else{

                let result = await axios.put(URL+"/"+product.id,product);
                setMessage(result.statusText);
                setButtonValue("Add Product");

            }

        }catch(error){
            setError(error.message);
        }

        setProduct({pname:"",price:"",qty:""});
    }

    // Delete product
    let deleteProduct = async (pid)=>{

        setMessage("");

        let result = await axios.delete(URL+"/"+pid);

        setMessage(result.statusText);
    }

    // Set product for update
    let setToUpdate = (updateProduct)=>{

        setProduct(updateProduct);

        setButtonValue("Update Product");

    }

    return(

        <div className="container">

            <span className="message">{msg}</span>
            <span className="error">{error}</span>

            <h2 className="heading">
                Product Operation with Rest API using Axios
            </h2>

            <form onSubmit={storeOrUpdateProduct} className="product-form">

                <input
                type="text"
                name="pname"
                className="input-field"
                value={product.pname}
                placeholder="Enter Product Name"
                onChange={(event)=>
                    setProduct({...product,pname:event.target.value})
                }
                />

                <input
                type="text"
                name="price"
                className="input-field"
                value={product.price}
                placeholder="Enter Product Price"
                onChange={(event)=>
                    setProduct({...product,price:event.target.value})
                }
                />

                <input
                type="text"
                name="qty"
                className="input-field"
                value={product.qty}
                placeholder="Enter Product Quantity"
                onChange={(event)=>
                    setProduct({...product,qty:event.target.value})
                }
                />

                <input
                type="submit"
                value={buttonValue}
                className="submit-btn"
                />

            </form>

            <p className="product-count">
                Number of products are {products.length}
            </p>

            <table className="product-table">

                <thead>

                    <tr>

                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                        <th>Update</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        products.map(product=>

                            <tr key={product.id}>

                                <td>{product.id}</td>
                                <td>{product.pname}</td>
                                <td>{product.price}</td>
                                <td>{product.qty}</td>

                                <td>

                                    <input
                                    type="button"
                                    value="Delete"
                                    className="delete-btn"
                                    onClick={()=>deleteProduct(product.id)}
                                    />

                                </td>

                                <td>

                                    <input
                                    type="button"
                                    value="Update"
                                    className="update-btn"
                                    onClick={()=>setToUpdate(product)}
                                    />

                                </td>

                            </tr>

                        )
                    }

                </tbody>

            </table>

        </div>

    )

}

export default ProductOperation;