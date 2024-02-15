import "./Heading.css";
import IISC from './IISCPNG.png'; 
import NewLogo from './NewLogoPNG.png';
import HeadingNew from './HeadingNewPNG.png';

function Heading(){
 return(
    <>
    <div class="heading">
    {/* <h3> CDAC-Chennai</h3>
    <h4> Ministry of Electronics and Information Technology (MEAIT)<br/> Government of India.</h4>
    <h5>Authorized Training Center of CDAC-ACTS</h5> */}
    <img class="heading_logo" src={HeadingNew} width="600"></img>
     <div>
    <img class="chennailogo" src={IISC} alt="logo" width="200" />
    </div>

    <div>
    <img class="cdaclogo" src={NewLogo} alt="logo" width="200" />
    </div>
    </div>
    </>
 )
}

export default Heading;