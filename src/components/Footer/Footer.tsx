import { FC } from "react";
import { Container, Row } from "@w01f-o/react-grid-layout";
import footerStyles from "./footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row></Row>
      </Container>
    </footer>
  );
};

export default Footer;
