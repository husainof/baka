import React from 'react';
import "./Style.css";
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return(
        
        <footer className="page-footer font-small blue pt-4">
            <div className='separator'></div>

            <div className="container-fluid text-center bg-white text-md-left">

                <div className="row">

                
                <div className="col-md-6 mt-md-0 mt-3">

                    
                    <h5 className="text-uppercase">Контент</h5>
                    <p>Вскоре здесь будет краткое описание сайта.</p>

                </div>

                <hr className="clearfix w-100 d-md-none pb-3"/>

                <div className="col-md-3 mb-md-0 mb-3 ">

                    <h5 className="text-uppercase">Контакты</h5>
                    

                    <ul className="list-unstyled ">
                    <li id='contacts'>
                        <a href='https://vk.com/dancev198392'className='text-black text-decoration-none'>
                            
                            <i class="fa fa-vk"></i> Вконтакте
                        </a>
                    </li>
                    <li>
                        <a href='https://vk.com/dancev198392'className='text-black text-decoration-none'>
                            
                            <i class="fa fa-telegram"></i> Телеграм
                        </a>
                    </li>
                    <li>
                        <a href='#!'className='text-black text-decoration-none'>
                            
                            <i class="fa fa-instagram"></i> Инстаграм   
                        </a>
                    </li>
                    
                    </ul>

                </div>

                <div className="col-md-3 mb-md-0 mb-3">

                    <h5 className="text-uppercase">Партнеры</h5>

                    <ul className="list-unstyled">
                    <li>
                        <a href="#!" className='text-black'>Стать партнером</a>
                    </li>
               
                    </ul>

                </div>

                </div>

            </div>

            <div className='footerend'>
                <div className="footer-copyright text-center py-3">© 2023 Copyright: 
                    <a href="/" className='text-black'> StyleLab.com</a>
                </div>
            </div>
            

        </footer>

    );
}

export default Footer;