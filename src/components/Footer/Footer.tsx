import { FC } from "react";
import { Container, Row } from "@w01f-o/react-grid-layout";
import footerStyles from "./footer.module.scss";
import ToggleSwitch from "@/components/UI/ToggleSwitch/ToggleSwitch";

const Footer: FC = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row>
          <ToggleSwitch />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
