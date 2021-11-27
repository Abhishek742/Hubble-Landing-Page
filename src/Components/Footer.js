import { Container } from "./Styles/Container.styled";
import { Flex } from "./Styles/Flex.styled";
import { StyledFooter } from "./Styles/Footer.styled";
import SocialIcons from "./SocialIcons";
import React from "react";
const Footer = () =>{
    return(
        <StyledFooter>
            <Container>
                <img src = "./images/logo_white.svg" alt="" />
                <Flex>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper ante non enim tristique vulputate in vitae erat.</li>
                    <li>+91 8927889208</li>
                    <li>contactus@huddle.com</li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                {/* Social Icons */}
                <SocialIcons />
            </Flex>
            <p>&copy; 2021 Huddle. All rights reserved </p>
            </Container>
        </StyledFooter>
    )
}
export default Footer;