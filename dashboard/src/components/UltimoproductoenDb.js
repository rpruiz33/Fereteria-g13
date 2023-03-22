import React from 'react';
import { useEffect, useState} from 'react'

import {Link, Route, Switch} from 'react-router-dom';
function UltimoproductoEnDb(){

    const [producto, setProducto] = useState([true])
	
	useEffect(()=>{
		let endPoint = `http://localhost:3030/api/ultimo`
		fetch(endPoint)
		.then((res)=>res.json())
		.then((respuesta) => {
				setProducto(respuesta.data);
               
			})
		.catch(err => console.log(err))
	}, [])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={producto.imagen} style={{width: 40 +'rem'}} alt=" product "/>
                    </div>
                    <div className='nose'>
                    <h2>{producto.nombre}</h2>
                    <p>marca:{producto.marca}</p>
                    <p>Modelo : {producto.modelo}</p>
                    <p>descripcion : {producto.descripcion}</p>
                    <h3 className=''>$ {producto.precio}</h3>

                    
                </div>
                </div>
            </div>
        </div>

        
    )
}

export default UltimoproductoEnDb;
