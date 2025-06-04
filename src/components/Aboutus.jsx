import React from "react";
import Footer from "./Footer";
import { FaGem, FaLeaf, FaHeart, FaAward } from "react-icons/fa";

const AboutUs = () => {
  // Theme object for consistent styling
  const theme = {
    colors: {
      primary: "#a8896c",
      secondary: "#b39274",
      text: "#333",
      lightBg: "#f9f7f4",
      white: "#fff",
    },
    fonts: {
      main: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      accent: "'Playfair Display', serif",
    },
    spacing: {
      section: "60px",
      paragraph: "20px",
    },
    breakpoints: {
      tablet: "768px",
      mobile: "480px",
    },
  };

  // Styles with responsive design
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: `${theme.spacing.section} 20px`,
      fontFamily: theme.fonts.main,
      backgroundColor: theme.colors.white,
      color: theme.colors.text,
      lineHeight: 1.6,
    },
    heroSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "40px",
      textAlign: "center",
    },
    heroImage: {
      width: "100%",
      maxHeight: "500px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "30px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
      ":hover": {
        transform: "scale(1.01)",
      },
    },
    heading1: {
      color: theme.colors.primary,
      fontSize: "3em",
      marginBottom: "20px",
      fontFamily: theme.fonts.accent,
      fontWeight: "700",
      letterSpacing: "1px",
      "@media (max-width: 768px)": {
        fontSize: "2.2em",
      },
    },
    heading2: {
      color: theme.colors.primary,
      fontSize: "1.8em",
      marginTop: "50px",
      marginBottom: "20px",
      fontFamily: theme.fonts.accent,
      fontWeight: "600",
      position: "relative",
      display: "inline-block",
      ":after": {
        content: '""',
        position: "absolute",
        bottom: "-10px",
        left: "0",
        width: "50px",
        height: "3px",
        backgroundColor: theme.colors.secondary,
      },
    },
    tagline: {
      fontSize: "1.3em",
      color: theme.colors.secondary,
      fontStyle: "italic",
      marginBottom: "30px",
    },
    paragraph: {
      fontSize: "1.1em",
      marginBottom: theme.spacing.paragraph,
      maxWidth: "800px",
      lineHeight: "1.8",
    },
    highlight: {
      fontWeight: "bold",
      color: theme.colors.secondary,
    },
    list: {
      paddingLeft: "20px",
      maxWidth: "800px",
    },
    listItem: {
      marginBottom: "15px",
      display: "flex",
      alignItems: "flex-start",
    },
    listIcon: {
      color: theme.colors.primary,
      marginRight: "10px",
      marginTop: "3px",
    },
    imageGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      margin: "40px 0",
    },
    gridImage: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "8px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      ":hover": {
        transform: "scale(1.03)",
        boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
      },
    },
    teamSection: {
      backgroundColor: theme.colors.lightBg,
      padding: "40px",
      borderRadius: "8px",
      margin: "50px 0",
    },
    teamGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "30px",
      marginTop: "30px",
    },
    teamCard: {
      backgroundColor: theme.colors.white,
      borderRadius: "8px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease",
      ":hover": {
        transform: "translateY(-10px)",
      },
    },
    teamImage: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "20px",
      border: `3px solid ${theme.colors.primary}`,
    },
    teamName: {
      fontWeight: "600",
      fontSize: "1.2em",
      margin: "10px 0",
      color: theme.colors.primary,
    },
    teamPosition: {
      color: theme.colors.secondary,
      fontStyle: "italic",
      marginBottom: "15px",
    },
    valuesSection: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      margin: "50px 0",
      gap: "20px",
    },
    valueCard: {
      flex: "1",
      minWidth: "250px",
      backgroundColor: theme.colors.lightBg,
      padding: "30px",
      borderRadius: "8px",
      textAlign: "center",
    },
    valueIcon: {
      fontSize: "2.5em",
      color: theme.colors.primary,
      marginBottom: "20px",
    },
  };

  // Team data
  const teamMembers = [
    {
      name: "Elena Rodriguez",
      position: "Founder & Lead Designer",
      image: "images/worker2.jpeg",
      bio: "With over 15 years in jewelry design, Elena brings passion and precision to every piece.",
    },
    {
      name: "Marcus Chen",
      position: "Master Goldsmith",
      image: "images/worker1.jpeg",
      bio: "A third-generation jeweler, Marcus ensures each piece meets our exacting standards.",
    },
    {
      name: "Sophie Laurent",
      position: "Sustainability Director",
      image: "images/worker3.jpeg",
      bio: "Sophie oversees our ethical sourcing and environmental initiatives.",
    },
  ];

  // Values data
  const values = [
    {
      title: "Exceptional Craftsmanship",
      icon: <FaGem style={styles.valueIcon} />,
      description: "Every piece is handcrafted by skilled artisans using time-honored techniques.",
    },
    {
      title: "Sustainable Practices",
      icon: <FaLeaf style={styles.valueIcon} />,
      description: "We're committed to ethical sourcing and minimizing our environmental impact.",
    },
    {
      title: "Customer Love",
      icon: <FaHeart style={styles.valueIcon} />,
      description: "Your satisfaction is our priority, from design to aftercare.",
    },
    {
      title: "Timeless Quality",
      icon: <FaAward style={styles.valueIcon} />,
      description: "We create heirloom-quality pieces meant to last generations.",
    },
  ];

  return (
    <div style={styles.container}>
      <section style={styles.heroSection}>
        <h1 style={styles.heading1}>About Soluna Jewelry</h1>
        <p style={styles.tagline}>Where Art Meets Adornment</p>
        <img 
          src="images/uselogo.png" 
          alt="Soluna Jewelry showcase" 
          style={styles.heroImage}
        />
      </section>

      <section>
        <p style={styles.paragraph}>
          Welcome to a world where timeless elegance is more than just a
          statement—it's a promise. At <span style={styles.highlight}>Soluna Jewelry</span>, jewelry
          is not merely an accessory; it's a celebration of individuality,
          moments, and memories.
        </p>
      </section>

      <section>
        <h2 style={styles.heading2}>Our Story</h2>
        <p style={styles.paragraph}>
          Born from a passion for artistry and the pursuit of beauty,{" "}
          <span style={styles.highlight}>Soluna Jewelry</span> was founded with a simple vision: to
          create pieces that speak before you do. Inspired by nature,
          architecture, and the quiet strength of the people who wear them, our
          collections blend heritage with modernity. <img src="images/next.jpg" alt="" /> <img src="images/use2.jpg" alt="" />
        </p>
        <p style={styles.paragraph}>
          Each piece starts as a sketch and is handcrafted by skilled artisans
          using traditional techniques and contemporary design. The result?
          Jewelry that's as unique as your story.
        </p>
      </section>

      <div style={styles.imageGrid}>
        <img src="images/process.jpeg" alt="Design process" style={styles.gridImage} />
        <img src="images/craft.jpeg" alt="Crafting jewelry" style={styles.gridImage} />
        <img src="images/finished.jpeg" alt="Finished piece" style={styles.gridImage} />
      </div>

      <section>
        <h2 style={styles.heading2}>Our Philosophy</h2>
        <p style={styles.paragraph}>
          We believe jewelry should do more than sparkle—it should{" "}
          <em>resonate</em>. Whether it's a gift to yourself or someone special,
          our creations are designed to empower, enchant, and endure.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <FaGem style={styles.listIcon} />
            <div>
              <strong>Craftsmanship First:</strong> We partner with artisans who
              take pride in precision and passion.
            </div>
          </li>
          <li style={styles.listItem}>
            <FaLeaf style={styles.listIcon} />
            <div>
              <strong>Ethical & Sustainable:</strong> Responsibly sourced gems and
              thoughtfully chosen metals.
            </div>
          </li>
          <li style={styles.listItem}>
            <FaAward style={styles.listIcon} />
            <div>
              <strong>Timeless by Design:</strong> Trends fade, but meaning and
              beauty endure.
            </div>
          </li>
        </ul>
      </section>

      <section style={styles.teamSection}>
        <h2 style={styles.heading2}>Meet Our Team</h2>
        <p style={styles.paragraph}>
          Behind every Soluna piece is a team of passionate individuals dedicated to excellence.
        </p>
        <div style={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={styles.teamCard}>
              <img src={member.image} alt={member.name} style={styles.teamImage} />
              <h3 style={styles.teamName}>{member.name}</h3>
              <p style={styles.teamPosition}>{member.position}</p>
              <p style={styles.paragraph}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={styles.heading2}>Our Values</h2>
        <div style={styles.valuesSection}>
          {values.map((value, index) => (
            <div key={index} style={styles.valueCard}>
              {value.icon}
              <h3 style={{...styles.heading2, fontSize: "1.4em", margin: "10px 0"}}>{value.title}</h3>
              <p style={styles.paragraph}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 style={styles.heading2}>Our Promise</h2>
        <p style={styles.paragraph}>
          When you wear <span style={styles.highlight}>Soluna Jewelry</span>, you wear more than
          jewelry—you wear a story. Yours. Ours. One that's still being written,
          one sparkle at a time.
        </p>
      </section>

      <div style={styles.imageGrid}>
        <img src="images/collect.jpeg" alt="Soluna jewelry collection" style={styles.gridImage} />
        <img src="images/display.jpeg" alt="Elegant jewelry display" style={styles.gridImage} />
        <img src="images/details.jpeg" alt="Handcrafted details" style={styles.gridImage} />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;