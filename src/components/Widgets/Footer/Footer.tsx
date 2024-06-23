import { FC } from "react";
import { Col, Container, Row } from "@w01f-o/react-grid-layout";
import footerStyles from "./footer.module.scss";
import { footerLinks } from "@/constants/footerLinks";
import Logo from "@/components/Shared/Icons/Logo";
import Instagram from "@/components/Shared/Icons/Instagram";
import In from "@/components/Shared/Icons/In";
import Facebook from "@/components/Shared/Icons/Facebook";
import Twitter from "@/components/Shared/Icons/Twitter";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row className={footerStyles.row}>
          <Col xs={6}>
            <div className={footerStyles.logo}>
              <Logo fill="white" />
              <span>DiveSea</span>
            </div>
          </Col>
          <Col xs={6}>
            <nav className={footerStyles.nav}>
              <ul>
                {footerLinks.map((link) => (
                  <li key={link.id}>{link.title}</li>
                ))}
              </ul>
            </nav>
          </Col>
        </Row>
        <span className={footerStyles.separator}></span>
        <Row className={footerStyles.row}>
          <Col xs={6}>
            <div className={footerStyles.copyright}>
              © 2023 EATLY All Rights Reserved.
            </div>
          </Col>
          <Col xs={6}>
            <div className={footerStyles.social}>
              <Instagram />
              <In />
              <Facebook />
              <Twitter />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
