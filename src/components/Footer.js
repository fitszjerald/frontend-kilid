import React from 'react';



class Footer extends React.Component{
    render(){
        return(
            <div>
            <footer class="footer">
                <div class="container-fluid rtl">
                    <div class="row">

                        <div class="col-lg-2 footer-link d-none d-sm-block" style={{paddingRight: 40}}>
                            <a class="d-block" href="#">درباره کیلید</a>
                            <a class="d-block" href="#">بلاگ</a>
                            <a class="d-block" href="#">تماس با ما</a>
                            <a class="d-block" href="#">فرصت های شغلی</a>
                            <a class="d-block" href="#">آژانس های املاک</a>
                            <a class="d-block" href="#">تبلیغات</a>
                        </div>
                        <div class="col-lg-2 footer-link d-none d-sm-block" >
                            <a class="d-block" href="#">خرید</a>
                            <a class="d-block" href="#">رهن و اجاره</a>
                            <a class="d-block" href="#">چستجو روی نقشه</a>
                            <a class="d-block" href="#">سپردن ملک</a>

                        </div>

                    </div>
                </div>
            </footer>
            </div>
        )
    }
}

export default Footer;