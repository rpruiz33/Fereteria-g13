import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from 'react';


function ContentRowTop() {



    const [categoriasTotal, setCategoriasTotal] = useState(null);
      
    useEffect(() => {
      fetch("http://localhost:3030/api/categorias")
        .then((res) => res.json())
        .then((response) => {
          setCategoriasTotal(response.total);
        });
    }, []);

    const [usuarios, setUsuarios] = useState(null);
      
    useEffect(() => {
      fetch("http://localhost:3030/api/users")
        .then((res) => res.json())
        .then((response) => {
          setUsuarios(response.respuesta.count);
        });
    }, []);


        const [categorias, setCategorias] = useState(null);
      
        useEffect(() => {
          fetch("http://localhost:3030/api/products")
            .then((res) => res.json())
            .then((response) => {
              setCategorias(response.respuesta.count);
            });
        }, []);


    let productInDataBase = {
      
        color: 'primary', 
        titulo:"total de productos",
        valor: categorias,
        icono: 'fa-truck-loading'
    }

let amount = {
    color: "success",
    titulo: "Total de usuarios",
    valor: usuarios,
    
    icono:"fas fa-user" ,
};

let user = {
    color: "warning",
    titulo: "cantidad de categorias",
    valor: categoriasTotal,
    icono: "fas fa-award",
};

let cardProps = [productInDataBase, amount, user];

    return (
        <div className="row">
            {cardProps.map((producto, index) => {
                return <SmallCard {...producto} key={index} />;
            })}
        </div>
    );

}

export default ContentRowTop;
