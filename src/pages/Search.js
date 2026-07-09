import React, { useContext } from 'react'
import ProductContext from '../context/cearteContext'
import { Link } from 'react-router-dom';




export default function Search() {
    const {product,search}=useContext(ProductContext)


let list=[]
if(search.length>0){
     list=product.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))
    console.log(list);}
    else{
         list=[]
    }
    
    const listShow =list.map((e)=>{
    return (
<>
        <Link to={`/Products/${e.id}`} className='text-dark'>
      <div
        className=" container  "
        key={e.id}
        style={{ margin: "10px"  }}
      >
        
            <p>{e.title}</p>
            

           
      </div>
      </Link>
      </>
    );
  })
  return (
    <div className="container mt-5" style={{ minHeight: "100vh" }}>
    <div>Search {list.length}</div>
    {search.length>0 &  list.length>0?listShow:"not found"}
    </div>
  )
}
