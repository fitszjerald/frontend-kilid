import React from 'react';
import Searchbar from './Searchbar';


class MainSection extends React.Component{
  
    render(){
        return(
            <div>
            <section>
                <div className="search-sec">
                    <div style={{backgroundColor: 'rgba(0,0,0,0.31)',height: 600}}>
                        <div className="sec1">
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 text-center text-light d-none d-sm-block">
                                        <h3>خرید خانه با کیلید</h3>
                                    </div>
                                    {/* <!--................text-one-res..........--> */}
                                    <div className="col-sm-12 text-center text-light d-block d-sm-none">
                                        <h3>ارزیابی هوشمند قیمت ملک</h3>
                                    </div>
                                    {/* <!--...................................--> */}
                                </div>
                                <div className="row justify-content-center" style={{paddingTop: 20}}>
                                    <div className="col-lg-6 text-center text-light d-none d-sm-block">
                                        <h5>کلید شما را در یافتن خانه یاری می کند</h5>
                                    </div>
                                    {/* <!--......................res//////////////--> */}
                                    <div className="col-lg-6 text-center text-light d-block d-sm-none">
                                        <h5>بدون مراجعه به املاک تنها با کد پستی
                                            قیمت ملک خود را تخمین بزنید</h5>
                                    </div>
                                    {/* <!--........................................--> */}
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 text-center">
                                        <Searchbar/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                        <div style={{marginTop: 128}}>
                        <div className="sec2">
                            <div className="container">
                                <div className="row my-auto justify-content-around text-light text-btn">
                                    <div className="col-lg-2 my-auto">
                                        <button className="btn-price">قیمت خانه شما</button>
                                    </div>
                                    {/* <!--...........res........--> */}
                                    <div className="col-lg-2 my-auto">
                                        <button className="btn-price-res">اطلاعات بازار مسکن</button>
                                    </div>
                                    {/* <!--......................--> */}
                                    <div className="col-lg-3 my-auto text-price">
                                        <h6>قیمت خانه شما امروز چند است؟</h6>
                                    </div>
                                    {/* <!--..........res..........--> */}
                                    <div className="col-lg-3 col-sm-12  text-price-res">
                                        <p style={{fontSize: 14}}>در صورتی که به اطلاعات بازار مسکن علاقه مندید
                                            می توانید از آدرس بالا استفاده کنید</p>
                                    </div>
                                    {/* <!--.......................--> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </section>    
            </div>
        )
    }
}

export default MainSection;