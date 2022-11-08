import React from "react";
import Image from "next/image";

import { StyledHeader } from "./styles";

function Header({ name, job, github }) {
  return (
    <StyledHeader>
      <section className="user-info">
        <Image
          src={`https://github.com/${github}.png`}
          alt="Profile Picture"
          width="80"
          height="80"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <h2>{name}</h2>
          <p>{job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

export default Header;
