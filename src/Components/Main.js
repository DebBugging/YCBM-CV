import React, { Component } from "react";
import schedule from "../photos/schedule.png";

class Main extends Component {
  render() {
    return (
      <div className="main-section">
        <h2>Take control of your websites and applications</h2>
        <h3>
          I will work hard using the powerful features I know to make your
          websites fast and easy.
        </h3>
        <a role="link" title="Click to Schedule" href="http://www.lifecodeson.com/contact-me/" target="_blank">
        <img src={schedule} alt="Schedule an interview."></img>
        </a>

        <div className="about-me">

          <p>Wife, mother, and self-taught front-end web developer. Self-taught means that I learned everything from scratch and had the tenacity to keep going without any incentive pushing me forward except for my own dreams and passion. It means that I reached out and found a supportive community on my own and that I learned how to work alongside others from far away. I am dedicated. I have taken the time to research topics that I'm not familiar with and I have learned to ask questions and give answers. I am going to use the skills that I have to keep advancing.</p>

          <p>I am currently living in Costa Rica and am fully bilingual (English/Spanish). I really love the values of this company and know that I would make a great fit. Please look around and click on my CV's.</p> 

          <p>I look forward to hearing back soon. Have a great week!</p>

        </div>
  </div>
      );
  }
}

export default Main;
