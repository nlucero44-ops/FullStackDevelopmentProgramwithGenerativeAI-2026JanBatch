import { useState } from "react";
function ProductOperation() {
const [products,setProducts]=useState([]);  // array of product object  
const [product,setProduct]=useState({pid:"",pname:"",price:"",url:""}) // product object 
const [buttonMsg,setButtonMsg]=useState("Add Product");
const [idFlag,setIdFlag]=useState(false);

let storeOrUpdateProduct = (event)=> {
    console.log("Event fired");
    event.preventDefault();     // disable action default behaviour 
    console.log(product)
    
    if(product.pid=="" || product.pname=="" || product.price=="" || product.url==""){
        alert("Please enter all field")
        return;
    }
    
    // find if record not present it return undefined else it return that record. 

        if(buttonMsg=="Add Product"){

                let isPresent = products.find(p=>p.pid==product.pid);
                if(isPresent==undefined){
                setProducts([...products,product]); 
                alert("Product added successfully")
                }else {
                alert("Product id must be unique")
                }


        }else {

                alert("Ready to update")
                setButtonMsg("Add Product");
                setIdFlag(false);
        }


    setProduct({pid:"",pname:"",price:"",url:""})
}

let deleteProduct = (pid)=> {
    //alert("product id "+pid)
    // it create new array with condition inside filter. 
    let filterProducts = products.filter(p=>p.pid!=pid);
    setProducts(filterProducts);    // update new product in products state variable. 
    alert("product deleted successfully")
}

let setToUpdateProduct = (updateProduct)=> {
    //console.log(updateProduct);
    setProduct(updateProduct);  // set updateProduct value to product state variable 
    // using value we display old value in form. 
    setButtonMsg("Update Product");
    setIdFlag(true)
}
    return(
        <div>
            <h2>Product CRUD Operation</h2>
            <form onSubmit={storeOrUpdateProduct}>
                <input type="text" name="pid" value={product.pid}
                placeholder="Enter the Product id" 
                onChange={(event)=>setProduct({...product,pid:event.target.value})}
                readOnly={idFlag}/>
                <br/>

                <input type="text" name="pname" value={product.pname}
                placeholder="Enter the Product name" 
                onChange={(event)=>setProduct({...product,pname:event.target.value})}/>
                <br/>

                <input type="text" name="price" value={product.price}
                placeholder="Enter the Product price" 
                onChange={(event)=>setProduct({...product,price:event.target.value})}/>
                <br/>

                <input type="text" name="url" value={product.url}
                placeholder="Enter the Product url" 
                onChange={(event)=>setProduct({...product,url:event.target.value})}/>
                <br/>

                <input type="submit" value={buttonMsg}/>
            </form>
            <hr/>
            <table border="1">
                <caption>Product Details</caption>
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>
                        <tr key={index}>
                            <td>{product.pid}</td>
                            <td>{product.pname}</td>
                            <td>{product.price}</td>
                            <td><img src={product.url} width="50px" height="50px"/></td>
                            <td>
                            <input type="button" value="Delete" onClick={()=>deleteProduct(product.pid)}/>
                            </td>

                            <td>
                            <input type="button" value="Update" onClick={()=>setToUpdateProduct(product)}/>
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