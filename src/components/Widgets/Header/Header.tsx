import { FC } from "react";
import { Col, Container, Row } from "@w01f-o/react-grid-layout";
import headerStyles from "./header.module.scss";
import Link from "next/link";
import NavBar from "@/components/Widgets/Header/NavBar/NavBar";
import Search from "@/components/Widgets/Header/Search";
import "swiper/css";
import Logo from "@/components/Shared/Icons/Logo";
import Button from "@/components/Shared/UI/Button/Button";

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <Container>
        <Row className={headerStyles.row}>
          <Col xxl={1}>
            <Link href="/public" title="Home page">
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
