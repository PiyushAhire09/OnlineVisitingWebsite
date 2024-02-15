import "./ContactUs.css";

function ContactUs(){
    return(
        <>
        {/* <h1>Contact Us</h1> */}

<div className="contact-info">
  <div className="header" id="Adress" >
    <h2> Address </h2>
    <ul>
      <li>
          Street: Sector 8, Plot 1, near D-Mart,Ghansoli
          City: Navi Mumbai
          State: Maharashtra
          Phone number:  044-22542227
          Pin code : 400701
      </li>
    </ul>
  </div>

  <div className="header" id="email" >
    <h2> E-mail </h2>
    <p> ITSC Email : <a href="mailto:contactus@ITSC.edu.in">contactus@ITSC.edu.in</a></p>
    <p> Course-Enquiry : <a href="mailto:course-enquiry@ITSC.edu.in">course-enquiry@ITSC.edu.in</a></p>
  </div>

  <div className="header" id="contacts">
    <h2>Contact Numbers</h2>
    <p style={{textAlign:"center"}}> 044-22542226 <br/> 044-22542227 <br/>  044-22542273  </p>
  </div>
</div>

<div className="map" >
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.430698125656!2d72.99125858617586!3d19.120139565385514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0b5f2b2f115%3A0x61de8771901c2056!2sSmt.%20Indira%20Gandhi%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1707385089492!5m2!1sen!2sin"
     allowfullscreen="" loading="active" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        </>
    )
}

export default ContactUs;