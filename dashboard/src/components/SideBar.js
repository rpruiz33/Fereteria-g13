import React from 'react';
import image from '../assets/images/img-logo.png';
import ContentWrapper from './ContentWrapper';
import CategoriaInDb from './CategoriaInDb';
import UltimoProductoenDb from './UltimoproductoenDb';
import ContentRowProductos from './ContentRowProductos';

import {Link, Route, Switch} from 'react-router-dom';



function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul
                className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
           

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" exact="true" >
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="ferreteria El Cosito" />
                    </div>
                </Link>



                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    {/* <a className="nav-link" href="/"><i className="fas fa-fw fa-tachometer-alt"></i> <span>Dashboard - DH movies</span></a> */}
                    <Link className="nav-link" to="/" ><i className="fas fa-fw fa-tachometer-alt"></i><span>Ferreteria el cosito</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />
 
                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">MENU</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    {/* <a className="nav-link collapsed" href="/"><i className="fas fa-fw fa-folder"></i><span>Pages</span></a> */}
                    <Link className="nav-link collapsed" to="/UltimoProductoenDb" ><i className="fas fa-fw fa-folder"></i><span>Ultimo producto</span></Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/"><i className="fas fa-fw fa-chart-area"></i><span>Charts</span></a> */}
                    <Link className="nav-link" to="/ContentRowProductos" ><i className="fas fa-fw fa-chart-area"></i><span>Graficos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    {/* <a className="nav-link" href="/"><i className="fas fa-fw fa-table"></i><span>Tables</span></a> */}
                    <Link className="nav-link" to="/CategoriaInDb"><i className="fas fa-fw fa-table"></i><span>Categorias</span></Link>
                </li>
                 {/*<!-- Nav Item - Tables -->*/}
                 <li className="nav-item nav-link">
           
                </li>
                {/*<!-- Divider -->*/}
              
              
             
            
            </ul>
            {/*<!-- End of Sidebar -->*/}
            {/* <Switch>
            
             
            <Route path="/ContentRowProductos">
                    <ContentRowProductos />
                </Route>
                <Route path="/UltimoproductoenDb ">
                    <UltimoproductoenDb />
                </Route>
          
                <Route path="/CategoriaInDb">
                    <CategoriaInDb />
                </Route>
               

               
            </Switch> */}
            

        </React.Fragment>
    );
}
export default SideBar;
