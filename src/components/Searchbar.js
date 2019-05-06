import React from 'react';
import {Link} from 'react-router-dom';

import Bgimg from "../assets/Mask Group 1.png";



class Searchbar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            id:'',
            content: [
                {
                location: " ابادان ",
                cityId: 1,
                type: "city",
                toShow: " شهر ابادان ",
                nameFa: " ابادان ",
                nameLat: "abadan",
                }
                ]
        }
    }

    handlechange=(e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }


    render(){
        return(
            <div>
            <form>
                 <div className="search-bar">
                   <input id='id' onChange={this.handlechange} className="inp-search rtl" type="search" placeholder="نام محله، منطقه و یا ایستگاه مترو مورد نظر را وارد کنید"/>
                    <div className="btn-res-col" >
                      <button type='submit' className="btn-search"><img src={Bgimg} /></button>
                    </div>
                 </div>
                </form>
            </div>
        )
    }
}

export default Searchbar;