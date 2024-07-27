import styles from "../Styles/HeroStyles.module.css";
import heroImg from "../assets/profile-pic01.jpg";
import themeIcon from "../assets/sun-icon.svg";
import gitHubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import resume from "../assets/ChaoMouaResume.pdf";

function Hero() {
  return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Chao Moua Profile picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Chao <br /> Moua
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="http://https://github.com/chaomoua91"></a>
          <img src={gitHubIcon} alt="github icon" />
          <a href="http://https://https://www.linkedin.com/"></a>
          <img src={linkedinIcon} alt="Linkedin icon" />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro
          reiciendis animi adipisci incidunt cupiditate corrupti, dolores
          dolorum quasi ullam esse voluptas sint nam? Atque id quod quia amet
          dignissimos!
        </p>
        <a href={resume} download></a>
        <button className="hover">Resume</button>
      </div>
    </section>
  );
}

export default Hero;
