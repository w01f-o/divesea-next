import { FC } from "react";
import { Col, Container, Row } from "@w01f-o/react-grid-layout";
import headerStyles from "./header.module.scss";
import Link from "next/link";
import Logo from "@/components/UI/Icons/Logo";
import NavBar from "@/components/Header/NavBar/NavBar";
import Button from "@/components/UI/Button/Button";
import Search from "@/components/Header/Search";
import "swiper/css";

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <Container>
        <Row className={headerStyles.row}>
          <Col xxl={1}>
            <Link href="/" title="Home page">
              <Logo fill="black" />
            </Link>
          </Col>
          <Col xxl={5}>
            <NavBar />
          </Col>
          <Col xxl={4}>
            <Search />
          </Col>
          <Col xxl={2}>
            <Button title={"Connect wallet"} background={"black"}>
              Connect wallet
            </Button>
          </Col>
          <Col xs={12}></Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
