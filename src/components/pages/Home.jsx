import React from "react";
import { NavLink } from 'react-router-dom';
import './AllStyle.css';




const Home = () => {
    return(
        <div className="women">
            <div className="card bg-dark text-white border 0">
                <img src="./assets/bg.jpg" className="card-img" alt="Background" height='772px'/>
                <div className="card-img-overlay">
                    <div className="container text-black">
                        <h5 className="card-title display-1 fw-bold">StyleLab</h5>
                        <p className="texthome">Ваша первая остановка к созданию
                            <br/> персонального стиля
                        </p>
                        <button type="button" className='btn btn-dark btn-lg mt-4' id="sidebarCollapse">   
                                <NavLink className="nav-link" to="/products">
                                    В лабораторию  <i className="fa fa-arrow-right"></i>
                                </NavLink>    
                        </button>
                    </div>      
                </div>
            </div>
        </div>
    );
}

export default Home;