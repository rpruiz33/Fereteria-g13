import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import ContentRowProductos from "./ContentRowProductos";
import Footer from "./Footer";
import SmallCard from "./SmallCard";
import CategoriaInDb from "./CategoriaInDb";
import UltimoproductoEnDb from "./UltimoproductoenDb";
import ProductoLista from "./ProductoLista";
import { Link, Route, Switch } from "react-router-dom";
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
                <TopBar />
                <ContentRowTop />
            </div>
            <div>     
                <Footer />
            </div>
        </div>
    );
}
export default ContentWrapper;
