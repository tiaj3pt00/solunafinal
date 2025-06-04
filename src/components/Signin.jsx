import React, { useState } from "react";
import styled from "styled-components";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged In!");
  };

  return (
    <>
      <Container>
        <SignInCard>
          <Logo>Soluna Jewelry</Logo>
          <Title>Sign In</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Sign In</Button>
          </Form>
          <Links>
            <LinkText>Forgot Password?</LinkText>
            <LinkText>Create an Account</LinkText>
          </Links>
        </SignInCard>
      </Container>
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <FooterContainer>
      {/* Main Footer Content */}
      <FooterContent>
        {/* About Us Section */}
        <FooterSection>
          <SectionTitle>About Soluna</SectionTitle>
          <Divider />
          <AboutText>
            Soluna offers a diverse range of jewelry, from fashion jewelry to fine jewelry, 
            all showcasing the brand's signature style and craftsmanship. Our collections 
            include necklaces, pendants, bracelets, rings, and earrings.
          </AboutText>
          <AboutText>
            Created by master jewelers, these pieces incorporate precious metals, 
            gemstones, and diamonds, resulting in high-quality, timeless designs like 
            the Volt, B Blossom, and Idylle Blossom collections.
          </AboutText>
          <JewelryIcons>
            <i className="fas fa-gem"></i>
            <i className="fas fa-ring"></i>
            <i className="fas fa-necklace"></i>
          </JewelryIcons>
        </FooterSection>

        {/* Contact Form Section */}
        <FooterSection>
          <SectionTitle>Reach Out To Us</SectionTitle>
          <Divider />
          <ContactForm>
            <FormGroup>
              <FormInput
                type="email"
                placeholder="Your email address"
                required
              />
              <InputIcon className="fas fa-envelope"></InputIcon>
            </FormGroup>
            <FormGroup>
              <FormTextarea
                rows="4"
                placeholder="Your message..."
                required
              ></FormTextarea>
              <InputIcon className="fas fa-comment"></InputIcon>
            </FormGroup>
            <SubmitButton type="submit">
              Send Message <i className="fas fa-paper-plane"></i>
            </SubmitButton>
          </ContactForm>
        </FooterSection>

        {/* Social Media Section */}
        <FooterSection>
          <SectionTitle>Connect With Us</SectionTitle>
          <Divider />
          <SocialText>
            ✨ We'd love to be part of your sparkle story! Whether you have a question 
            about our collections, need help finding the perfect piece, or simply want 
            to share your shine, we're here for you.
          </SocialText>
          <SocialLinks>
            <SocialLink href="https://facebook.com" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialLink>
            <SocialLink href="https://instagram.com" className="instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="https://x.com" className="twitter">
              <i className="fab fa-twitter"></i>
            </SocialLink>
            <SocialLink href="https://pinterest.com" className="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </SocialLink>
          </SocialLinks>
          <Newsletter>
            <NewsletterTitle>Subscribe to our newsletter</NewsletterTitle>
            <NewsletterInput>
              <NewsletterEmail type="email" placeholder="Your email" />
              <NewsletterButton><i className="fas fa-arrow-right"></i></NewsletterButton>
            </NewsletterInput>
          </Newsletter>
        </FooterSection>
      </FooterContent>

      {/* Copyright Footer */}
      <CopyrightFooter>
        <CopyrightText>
          &copy; 2025 Soluna Jewelry. All rights reserved.
        </CopyrightText>
        <DeveloperCredit>
          Crafted with <i className="fas fa-heart"></i> by Tia Jeptoo
        </DeveloperCredit>
      </CopyrightFooter>

      {/* Back to Top Button */}
      <BackToTop href="#top">
        <i className="fas fa-arrow-up"></i>
      </BackToTop>
    </FooterContainer>
  );
};

// Styled components for the main app
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, rgb(147, 211, 236), #1e2a47);
  font-family: "Times New Roman", serif;
  padding: 2rem;
`;

const SignInCard = styled.div`
  background: #f7f5f2;
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin: 2rem 0;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #b09b5b;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 26px;
  color: #1e2a47;
  margin-bottom: 30px;
  font-family: "Times New Roman", serif;
  font-weight: lighter;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;
  background: #fff;

  &:focus {
    border: 2px solid #b09b5b;
  }

  ::placeholder {
    color: #b0a29d;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #b09b5b;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #a08747;
    transform: scale(1.05);
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  color: #1e2a47;
`;

const LinkText = styled.span`
  color: #b09b5b;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #a08747;
  }
`;

// Styled components for the Footer
const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 0 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SectionTitle = styled.h5`
  color: #00d2ff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  position: relative;
  text-align: center;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
  margin: 0 auto 1.5rem auto;
`;

const AboutText = styled.p`
  color: #e6e6e6;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const JewelryIcons = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  i {
    font-size: 1.5rem;
    margin: 0 0.5rem;
    color: #00d2ff;
    transition: all 0.3s ease;

    &:hover {
      transform: rotate(15deg) scale(1.2);
      color: #fff;
    }
  }
`;

const ContactForm = styled.form`
  margin-top: 1rem;
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const FormInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding-left: 2rem;
  transition: all 0.3s ease;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2rem;

  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
    border-bottom-color: #00d2ff;
    box-shadow: none;
    color: #fff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const FormTextarea = styled.textarea`
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding-left: 2rem;
  transition: all 0.3s ease;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  resize: vertical;

  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
    border-bottom-color: #00d2ff;
    box-shadow: none;
    color: #fff;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const InputIcon = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
`;

const SubmitButton = styled.button`
  background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
  border: none;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 210, 255, 0.3);
  }
`;

const SocialText = styled.p`
  color: #e6e6e6;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 0.5rem;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &.facebook {
    background: linear-gradient(45deg, #3b5998, #0078d7);
  }

  &.instagram {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  }

  &.twitter {
    background: linear-gradient(45deg, #1da1f2, #009ff5);
  }

  &.pinterest {
    background: linear-gradient(45deg, #e60023, #ad081b);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const Newsletter = styled.div`
  margin-top: 2rem;
`;

const NewsletterTitle = styled.h6`
  color: #00d2ff;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const NewsletterInput = styled.div`
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
`;

const NewsletterEmail = styled.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0.5rem 1rem;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const NewsletterButton = styled.button`
  background: linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%);
  border: none;
  color: white;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%);
  }
`;

const CopyrightFooter = styled.div`
  background: #0f0f1a;
  padding: 1rem 0;
  color: #aaa;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
`;

const DeveloperCredit = styled.p`
  color: #00d2ff;
  margin: 0;

  i {
    color: #ff4d4d;
  }
`;

const BackToTop = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 210, 255, 0.3);
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export default App;