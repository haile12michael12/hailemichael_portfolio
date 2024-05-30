import React from "react";
import aboutImage2 from '../assets/aboutImage3.png'
import ParticlesComponent from '../config/particles';
import '../index.css'
const About = () => {
  return (
    <div name="about" className="w-vw h-vh min-h-[750px] bg-gradient-to-b from-gray-800 to-black  text-white flex items-center justify-center pt-9 ">
      <div  id="particles">
        <ParticlesComponent />
      </div>
      <div className=" w-vw  lg:max-w-[87%]  mx-auto flex flex-col md:flex-row items-center justify-around  z-10 gap-11 ">
        <div className="flex justify-center hidden items-center mx-auto  min-w-[350px] md:w-auto md:block">
          <img className="max-h-[500px] mx-auto z-50" src={aboutImage2} alt="imagee"></img>
        </div>
        <div className="p-8 mx-auto flex flex-col justify-center  h-full px-11 ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-[#0B8AC4] border-gray-500">
              About
            </p>
          </div>
          <p className=" font-semibold text-xl">HI there👋🏻, </p>

          <p className="text-xl mt-10 text-justify ">
          I am <span className="text-[#0B8AC4] font-bold ">Hailemichael Assefa</span>
          ,Passionate and Experienced full stack developer with expertise in designing, developing, and deploying web applications using a variety of technologies. Strong background in both front-end and back-end development, with a proven track record of delivering high-quality, scalable, and maintainable software solutions.
           with a strong foundation 
          </p>

          <br/>

          <p className="text-xl text-justify">
          I'm well-versed in database design and management, version control
           with Git, Agile development methodologies, responsive design principles, and 
           user experience (UX) and user interface (UI) design. With meticulous attention 
           to detail and a commitment to excellence,
           I ensure that every project I undertake meets the highest standards of quality and usability.
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default About;
