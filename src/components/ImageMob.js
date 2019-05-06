import React from 'react';

import appleImg from "../assets/Download_on_the_App_Store_Badge.svg.png";
import googleImg from "../assets/google-play-badge.png";
import mob1 from "../assets/Group 147.png";
import mob2 from "../assets/Group 148.png";
import mobboth from "../assets/Group 133.png";


class ImageMob extends React.Component{
    render(){
        return(
            <div>
                <section style={{marginTop: 40}}>
                    <div className="container rtl" style={{height: 400}}>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 text-center" style={{paddingTop: 100}}>
                                <div>
                                    <h5 className="text-pur">کیلید خود را همیشه همراه داشته باشید</h5>
                                </div>
                                <div style={{paddingTop: 40}}>
                                    <p>دریافت اپلیکیشن کیلید</p>
                                </div>
                                <div className="btn-app ">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-5 text-wid">
                                            <img src={appleImg} />
                                        </div>

                                        <div className="col-lg-5 text-wid">
                                            <img src={googleImg} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 img-mob-res d-none d-sm-block" style={{paddingTop: 90,paddingRight: 40}}>
                                <img src={mob1}/>
                            </div>
                            <div className="col-lg-3 img-mob-res d-none d-sm-block">
                                <img src={mob2}/>
                            </div>
                            {/* <!--.....................................res--> */}
                            <div className="col-lg-3 text-center d-block d-sm-none" style={{paddingTop: 40}}>
                                <img src={mobboth} />
                            </div>
                            {/* <!--...........................................--> */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default ImageMob;