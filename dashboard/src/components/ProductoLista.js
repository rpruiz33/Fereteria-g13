import React from "react";
import { useEffect, useState} from 'react'
import ProductListRow from "./ProductListRow";

function ProductoLista() {
    const [producto, setProducto] = useState([])
	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/lista`
		fetch(endPoint)
		.then(res=>res.json())
		.then((respuesta) => {
				setProducto(respuesta.data);
			})
		.catch(err => console.log(err))
	}, [])

    return (
      
    <div className="card shadow mb-4">
      <h2>TODOS LOS PRODUCTOS EN LA BASE DE DATOS</h2>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                
                <thead>
                  
                    <tr>
                        <th>nombre</th>
                        <th>marca</th>
                        <th>modelo</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                    producto.map( ( row , i) => {
                        return <ProductListRow { ...row} key={i}/>
                    })
                    }

                </tbody>
            </table>
        </div>
    </div>
</div>
  );
}

export default ProductoLista;
