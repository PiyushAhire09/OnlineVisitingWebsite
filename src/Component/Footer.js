import "./Footer.css";


function Footer({onClick}){
    return(
        <>
        <footer>
        <div class="container">
            <div class="footer-content">
                <h3 className ="naming">Contact Us</h3>
                <p> ITSC Email :<a href="mailto:contactus@ITSC.edu.in"> contactus@ITSC.edu.in</a></p>
                <p>TelePhone :  044-22542226</p>
                <p>Address : Sector 8, Plot 1,D-Mart road, Ghansoli, Navi Mumbai, Maharashtra</p>
            </div>
            <div class="footer-content">
                <h3 className="naming">Quick Links</h3>
                 <ul class="list">
                    <li><a className="footerName" onClick ={() => onClick("Home")} >Home</a></li>
                    <li><a className="footerName" onClick ={() => onClick("Courses")} >Courses</a></li>
                    <li><a className="footerName" onClick ={() => onClick("AboutUs")} >AboutUs</a></li>
                    <li><a className="footerName" onClick ={() => onClick("ContactUs")} >ContactUs</a></li>
                 </ul>
            </div>
                  
        </div>
        <div class="bottom-bar">
            <p>&copy; 2023 ITSC . All rights reserved</p>
        </div>
    </footer>

        </>
    )
}

   export default Footer;
