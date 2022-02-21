import ActiveLink from "./Sys/ActiveLink";
import React from "react";

const SideberLeft: React.FC = () => {
  return (
    <div>
      <header className="SideColumn-right menu">
        <nav>
          <ul className="nav1">
            <li>
              <ActiveLink href="/contact" activeClassName="headerState">
                <a className="scaleLinks">Contact</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/picture" activeClassName="headerState">
                <a className="scaleLinks">Picture</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/blog" activeClassName="headerState">
                <a className="scaleLinks">Blog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/links" activeClassName="headerState">
                <a className="scaleLinks">Link</a>
              </ActiveLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SideberLeft;
