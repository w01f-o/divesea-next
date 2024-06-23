"use client";

import { FC } from "react";
import Link from "next/link";
import { routes } from "@/routes/routes";
import navbarStyles from "./navbar.module.scss";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const NavBar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={navbarStyles.nav}>
      <ul>
        {routes.map(
          (route) =>
            route.inNavBar && (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={clsx({
                    [navbarStyles.active]: pathname === route.path,
                  })}
                >
                  {route.name}
                </Link>
              </li>
            ),
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
