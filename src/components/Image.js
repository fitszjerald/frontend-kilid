import React from 'react';

import img15 from "../assets/Mask Group 15.png";
import img14 from "../assets/Mask Group 14.png";
import img16 from "../assets/Mask Group 16.png";
import img17 from "../assets/Mask Group 17.png";

class Sample extends React.Component{
    render(){
        return(
            <div>
            <section className="image-col">
                <div className="container rtl" style={{padding:0}}>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-12">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-sm-12 img-res text-center mx-auto">
                                    <img className="res-sq2" src={img15}/>
                                </div>
                            </div>
                            <div className="row justify-content-sm-center">
                                <div className="col-lg-6 col-sm-6 img-res w-50 text-right" >
                                    <img className="res-sq1" src={img14}/>
                                </div>
                                <div className="col-lg-6 col-sm-6 img-res w-50 text-left">
                                    <img  className="res-sq1" src={img14}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-4 img-res d-none d-sm-block">
                                    <img  src={img14}/>
                                </div>
                                <div className="col-lg-8 img-res d-none d-sm-block">
                                    <img src={img16}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 img-res text-center">
                                    <img className="res-sq2" src={img15}/>
                                </div>
                                {/* <!--........................res...........--> */}
                                <div className="col-lg-8 img-res d-block d-sm-none text-center">
                                    <img className="res-sq3" src={img16}/>
                                </div>
                                {/* <!--.......................................--> */}
                                <div className="col-lg-4 img-res d-none d-sm-block">
                                    <img src={img17}/>
                                </div>
                            </div>
                                {/* <!--///////////////////////res///////////////--> */}
                                <div className="row justify-content-sm-center">
                                    <div className="col-lg-6 col-sm-6 img-res w-50 text-right d-block d-sm-none" >
                                        <img className="res-sq1" src={img14}/>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 img-res w-50 text-left d-block d-sm-none">
                                        <img  className="res-sq1" src={img14}/>
                                    </div>
                                </div>
                                {/* <!--..........................................--> */}

                        </div>
                    </div>
                </div>
            </section>

            </div>
        )
    }
}

export default Sample;