import React from "react";

function CategoriasMap(props) {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
            <p>Nombre: { props.nombre[0].toUpperCase() + props.nombre.slice(1) }</p>
            <p>Cantidad de productos: {props["cantidad de productos"]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoriasMap;
