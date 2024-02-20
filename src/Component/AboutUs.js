import React from 'react';
import "./AboutUs.css";
import collegeimg from './collegeimg.jpg'

function AboutUs() {
    return (
        <>
            {/* <h1>About Us</h1> */}
            <div className="Aboutcontainer">
                <h2>InfinityTech School of Computer Engineering (ITSC)</h2>
                <hr />
                <div className="clgimages">
                    <img src={collegeimg} alt="CollegePhoto"/>
                </div>

                <div className="Aboutcontainer purple-container">

                    <p><b>InfinityTech School of Computer Engineering (ITSC)</b> is a premier institution dedicated to providing high-quality education and training in the field of computer engineering.</p>
                    <p>Established with a vision to nurture future technocrats and innovators, ITSC offers a comprehensive curriculum designed to equip students with the necessary skills and knowledge to excel in the rapidly evolving technology industry.</p>
                    <p>Our institution prides itself on a faculty comprised of experienced professionals and experts in the field who are committed to fostering a dynamic learning environment.</p>
                    <p>Through a combination of theoretical instruction and hands-on practical experience, we aim to empower our students to tackle real-world challenges and contribute meaningfully to the field of computer engineering.</p>
                    <p>At ITSC, we believe in holistic development and strive to cultivate not only technical proficiency but also critical thinking, problem-solving abilities, and effective communication skills in our students.</p>
                    <p>We are dedicated to providing a supportive and inclusive community where students from diverse backgrounds can thrive and succeed.</p>
                    <p>With state-of-the-art facilities and industry partnerships, ITSC offers ample opportunities for internships, research projects, and career development initiatives.</p>
                    <p>Our graduates emerge as well-rounded professionals poised to make significant contributions to the technology sector and drive innovation forward.</p>
                    <p>Whether you are a prospective student, a parent, or an industry partner, we invite you to explore our website and learn more about the exciting opportunities available at InfinityTech College of Computer Engineering. Join us as we shape the future of technology together.</p>
                </div>

                <div className="Aboutcontainer blue-container">
                    <div className="Aboutright-container">
                        <h2>VISION</h2>
                        <hr />
                        <p>To serve and have a transformative impact on society by constantly pursuing excellence in technical education, innovation, and entrepreneurship for human development with strong ethical values.<br />At <b>InfinityTech College of Computer Engineering (ITSC)</b>, our Computer and IT Department envisions a future where technology empowers individuals and transforms communities. We strive to be at the forefront of innovation, fostering a dynamic learning environment that prepares students to excel in a rapidly evolving digital landscape.</p>
                    </div>
                </div>

            </div>

            <div className="Aboutcontainer green-container">
                <div className="Aboutright-container">
                    <h2>MISSION</h2>
                    <hr />
                    <p>Our mission is to provide exceptional education and training in computer science, information technology, and related fields, equipping students with the knowledge, skills, and ethical foundation necessary for success in their careers and contributions to society. We are committed to:</p>
                    <ol>
                        <li><strong>Academic Excellence:</strong> Delivering rigorous and relevant curricula that blend theory with practical application, preparing students to solve complex challenges and adapt to emerging technologies.</li>
                        <li><strong>Student-Centered Learning:</strong> Fostering a supportive and inclusive learning environment where students are engaged, empowered, and encouraged to pursue their passions and fulfill their potential.</li>
                        <li><strong>Industry Partnerships:</strong> Collaborating with industry leaders and professionals to ensure our programs remain current and aligned with industry needs, providing students with valuable opportunities for internships, co-ops, and real-world projects.</li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
