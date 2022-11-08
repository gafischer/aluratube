import React from "react";
import Image from "next/image";

import { StyledFavorites } from "./styles";

function Favorites({ favorites }) {
  const favoritesLimit = 10;

  return (
    <StyledFavorites>
      <section>
        <h2>aluratube favoritos</h2>
        <div className="grid-container">
          {favorites.slice(0, favoritesLimit).map((favorite, index) => {
            return (
              <div key={index}>
                <a
                  href={`https://github.com/${favorite.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={`https://github.com/${favorite.github}.png`}
                    alt="Profile Picture"
                    width="100"
                    height="100"
                    style={{ borderRadius: "50%" }}
                  />
                  <span>{`@${favorite.github}`}</span>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </StyledFavorites>
  );
}

export default Favorites;
