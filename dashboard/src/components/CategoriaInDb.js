import { useState, useEffect } from "react";
import CategoriasMap from "./CategoriasMap";

function CategoriaInDb() {
  const [categorias, setCategorias] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3030/api/products")
      .then((res) => res.json())
      .then((response) => {
        setCategorias(response.respuesta.countByCategory);
      });
  }, []);

  return (
    <>
     
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categorias en base de datos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              { categorias && categorias.length ? (
                categorias.map((categoria, index) => {
                  return <CategoriasMap {...categoria} key={index} />;
                })
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriaInDb;
