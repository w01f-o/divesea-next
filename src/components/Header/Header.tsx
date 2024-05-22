import { FC } from "react";
import { Col, Container, Row } from "@w01f-o/react-grid-layout";
import headerStyles from "./header.module.scss";
import Link from "next/link";
import LogoIcon from "@/components/UI/Icons/LogoIcon";
import NavBar from "@/components/Header/NavBar/NavBar";
import Input from "@/components/UI/Input/Input";
import SearchIcon from "@/components/UI/Icons/SearchIcon";
import Button from "@/components/UI/Button/Button";

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <Container>
        <Row className={headerStyles.row}>
          <Col xxl={1}>
            <Link href="/" title="Home page">
              <LogoIcon />
            </Link>
          </Col>
          <Col xxl={5}>
            <NavBar />
          </Col>
          <Col xxl={4}>
            <Input
              type={"text"}
              placeholder={"Search Art Work / Creator"}
              icon={{ element: <SearchIcon />, position: "left" }}
            />
          </Col>
          <Col xxl={2}>
            <Button title={"Connect wallet"} background={"black"}>
              Connect wallet
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
