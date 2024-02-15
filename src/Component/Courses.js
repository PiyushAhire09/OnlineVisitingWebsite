import "./Courses.css"



function Courses(){
    return(
        <>
        <div className="Coursecontainer">
    {/* <h1>Available Courses</h1> */}

    <div className="course dac">
        <h4>PG DAC - Post Graduate Diploma in Advanced Computing</h4>
        <p><strong>Duration:</strong> 6 Months</p>
        <p><strong>Description:</strong> PG-DAC is the most popular PG Diploma course of C-DAC. The course is targeted 
towards engineering graduates and MCA/MSc who wish to venture into the domain of 
advanced computing. The course aims to groom the students to enable them to work on 
current technology scenarios as well as prepare them to keep pace with the changing face 
of technology and the requirements of the growing IT industry. The entire course syllabus, 
courseware, teaching methodology and the course delivery have been derived from the rich 
research and development background of C-DAC. Running successfully for 25 years, the 
PG-DAC course has produced thousands of professionals, who are well positioned in the 
industry today. The major modules covered in PG-DAC are:
</p>
   
   <h5 className="Course_content"> Course Content</h5>
        <div className="subjects">
          <ul className="subjectsUl">
            <li>  Operating System Concepts </li>
            <li>  C++ Programming </li>
            <li>   Object Oriented Programming in Java</li>
            <li>  Algorithms & Data Structures </li>
            <li>  Database Technologies </li>
            <li>  Software Development Methodologies </li>
            <li>  Web Programming Technologies </li>
            <li>  Web-based Java Programming </li>
            <li>   Microsoft .Net Technologies </li>
            <li>    Aptitude & Effective Communication </li>
            <li>    Software Project </li>
          </ul>
        </div>
       
    </div>

    <div className="course dbda">
        <h4>PG DBDA - Post Graduate Diploma in Big Data Analytics</h4>
        <p><strong>Duration:</strong> 6 Months </p>
        <p><strong>Description:</strong> PG-DBDA will educate the aspirants who want to make an impact in the corporate and 
academic world in the domain of big data analytics as data scientist and researcher, big 
data leads/administrators/managers, business analysts and data visualization specialists. 
The course is also suitable for those who are already working in analytics to enhance their 
theoretical and conceptual knowledge as well as those with analytical aptitude and would 
like to start career in big data analytics in different business sectors. The collaboration with 
the different multi-national companies at the level of mutual research interests and 
customer related projects will ease the path for campus recruitment. The students will be 
able to work with big data platform, analyze various big data analysis techniques for useful 
business applications, design efficient algorithms for mining the data from large volumes, 
analyze the HADOOP and Map Reduce technologies associated with big data analytics, 
and explore big data applications. Modules covered in PG-DBDA are:</p>
 
<h5 class="Course_content"> Course Content</h5>
<div className="subjects">
          <ul className="subjectsUl">
            <li>   Linux Programming and Cloud Computing </li>
            <li>  Python and R programming </li>
            <li>   Object Oriented Programming with Java 8</li>
            <li>  Advanced Analytics using Statistics </li>
            <li>   Data Collection and DBMS (Principles, Tools & Platforms) </li>
            <li>  Big Data Technologies </li>
            <li> Data Visualization - Analysis and Reporting </li>
            <li>   Practical Machine Learning </li>
            <li>    Aptitude & Effective Communication </li>
            <li>    Software Project </li>
          </ul>
        </div>
         
    </div>
</div>
        </>
    )
}

export default Courses;