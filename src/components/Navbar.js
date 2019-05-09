import React from 'react';
import logo from '../assets/dark-logo.png'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div>
            <header className="menu rtl">
                <div className="container-fluid">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                            <div className="col-lg-1 col-sm-6">
                                <img src={logo}
                                    className="rounded float-right"/>
                            </div>
                            <div className="col-lg-9 col-sm-6 navbar-res">
                                <button className="navbar-toggler btn-menures" type="button" data-toggle="collapse"
                                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">خرید</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">رهن واجاره</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">جستجو روی نقشه</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">سپردن ملک</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">قیمت خانه شما</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">اطلاعات بازار</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">اژانس های املاک</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">تبلیغات</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 d-none d-lg-block" style={{paddingRight: 40}}>
                                <div className="div-sign">
                                    <button className="btn-menu btn-sign">ثبت نام</button>
                                </div>

                            </div>
                            <div className="col-lg-1 d-none d-lg-block">
                                <div className="div-sign">
                                    <button className="btn-menu btn-log">ورود</button>
                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </header>    
            </div>
        )
    }
}

export default Navbar;