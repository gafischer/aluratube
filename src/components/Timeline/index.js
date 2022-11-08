import React from "react";
import Image from "next/image";

import { StyledTimeline } from "./styles";

function Timeline({ searchValue, playlists }) {
  const playlistNames = Object.keys(playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName, index) => {
        const videos = playlists[playlistName];

        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video, index) => {
                  return (
                    <a
                      key={index}
                      href={video.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={video.thumb}
                        alt="Video Thumb"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default Timeline;
