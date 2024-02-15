import "./Navbar1.css";
import React, { useState, useRef , useEffect } from 'react';

const Navbar1 = ({onClick}) => {
  const [showStudentsDropdown, setShowStudentsDropdown] = useState(false);
  const [showPlacementDropdown, setShowPlacementDropdown] = useState(false);
  const selectorRef = useRef(null);
  const dropdownRef = useRef(null);
  
  const selectorRef1 = useRef(null);
  const dropdownRef1 = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !selectorRef.current.contains(event.target)
      ) {
        setShowStudentsDropdown(false);
      }
    }

    if (showStudentsDropdown) document.addEventListener("click", handleClickOutside);
    else document.removeEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [showStudentsDropdown]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef1.current.contains(event.target) &&
        !selectorRef1.current.contains(event.target)
      ) {
        setShowPlacementDropdown(false);
      }
    }

    if (showPlacementDropdown) document.addEventListener("click", handleClickOutside);
    else document.removeEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [showPlacementDropdown]);


  const toggleStudentsDropdown = () => {
    setShowStudentsDropdown(!showStudentsDropdown);
  };

  const togglePlacementDropdown = () => {
    setShowPlacementDropdown(!showPlacementDropdown);
  };
  return (
   <div className="Main_Navbar" >
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      <nav className="navbar navbar-expand-lg navbar-light ">
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"> 
          <ul className="navbar-nav">
          <li> <a className="navbar-brand"  onClick={() => onClick("Home")}>Home</a></li>

            <li className="nav-item dropdown" id="hoverEffect">
              <a className="nav-link dropdown-toggle"  onClick={toggleStudentsDropdown}  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ref={selectorRef}>
                &nbsp;&nbsp; Students
              </a>
              <div className={showStudentsDropdown ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown1" ref={dropdownRef}>
                <a className="dropdown-item" href="http://localhost:8080/JSPTest/FEB_2023.jsp" value="FEB23">  FEB 2023 </a>
                <a className="dropdown-item" href="http://localhost:8080/JSPTest/SEPT_2022.jsp" value="SEPT22">  SEPT 2022 </a>
                <a className="dropdown-item" href="http://localhost:8080/JSPTest/FEB_2022.jsp" value="FEB22"> FEB 2022 </a>
              </div>
            </li>
            <li className="nav-item dropdown" id="hoverEffect">
              <a className="nav-link dropdown-toggle"  onClick={togglePlacementDropdown}  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ref={selectorRef1}>
                &nbsp;&nbsp; Placement Record
              </a>
              <div className={showPlacementDropdown ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdown2" ref={dropdownRef1}>
                <a className="dropdown-item" href="http://localhost:8080/JSPTest/Placement_FEB-2023.jsp" value="FEB23"> FEB 2023 </a>
                <a className="dropdown-item" href="http://localhost:8080/JSPTest/Placement_SEPT-2022.jsp" value="SEPT22"> SEPT 2022 </a>
                <a className="dropdown-item" href="http://localhost:8080/JSPTest/Placement_FEB-2022.jsp" value="FEB22"> FEB 2022 </a>
              </div>
            </li>

            <li>
            <a className="navbar-brand courses"  onClick ={() => onClick("Courses")} > &nbsp;&nbsp; Courses </a>
            
            <a className="navbar-brand aboutUs"  onClick ={() => onClick("AboutUs")} > &nbsp; About Us </a>
            <a className="navbar-brand contactUs"   onClick ={() => onClick("ContactUs")} > &nbsp; Contact Us </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>

  );
};

export default Navbar1;
