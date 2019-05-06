import React from 'react';
// import axios from 'axios';


class CitySelect extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            content:[
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
    // componentDidMount(){

    //     axios.get('a.b.com/api/getallcities')
    //     .then(res =>(
    //         this.setState({
    //             content:res
    //         })
    //     )
    //     )
    // }
    render(){
        const {content} = this.state
        
        const resultsList = content.map(item =>{
            return(
               <option value={item.nameFa}>{item.location}</option>
                              
            )
        }
        )
        return(
            <div>
            <div className="container rtl">
                <div className="row justify-content-sm-center ">
                    <div className="col-lg-12 col-sel-cit">
                        <form>
                        <select className="sel-cit">
                            <option value="">نام شهر مورد نظر خود را انتخاب کنید</option>
                            {resultsList}
                        </select>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default CitySelect;