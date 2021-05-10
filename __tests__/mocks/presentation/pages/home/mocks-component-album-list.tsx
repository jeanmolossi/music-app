import React from "react";
import { AlbumsList } from "@/presentation/pages/home/components";
import { render } from "@testing-library/react-native";

const data_mock = {
  href:
    "https://api.spotify.com/v1/users/12146173730/playlists?offset=0&limit=20",
  items: [
    {
      collaborative: false,
      description:
        "Eletronicas 2021 🔥 Melhores Eletronicas | Alok | Vintage Culture | Cat Dealers | KVSH | Bruno Be | Dubdogz | Santti | Liu | Illusionize | Gabe | FISHER | Chemical Surf | Chris Lake | So Track Boa",
      external_urls: {
        spotify: "https://open.spotify.com/playlist/12CBmjXuOH7Cvm5iJ8LkH2",
      },
      href: "https://api.spotify.com/v1/playlists/12CBmjXuOH7Cvm5iJ8LkH2",
      id: "12CBmjXuOH7Cvm5iJ8LkH2",
      images: [
        {
          height: null,
          url:
            "https://i.scdn.co/image/ab67706c0000bebb7b1dffd9fae5fdd7b9ee7e73",
          width: null,
        },
      ],
      name: "Eletronicas 2021 🔥 Melhores Eletronicas",
      owner: {
        display_name: "Listn",
        external_urls: {
          spotify: "https://open.spotify.com/user/q21rjkxi3xbt3ldg7turwdk2y",
        },
        href: "https://api.spotify.com/v1/users/q21rjkxi3xbt3ldg7turwdk2y",
        id: "q21rjkxi3xbt3ldg7turwdk2y",
        type: "user",
        uri: "spotify:user:q21rjkxi3xbt3ldg7turwdk2y",
      },
      primary_color: null,
      public: false,
      snapshot_id:
        "NjYyLGExOTI0ODc0ODIxZGZjYWZjMTkyNDUyNWE0NWEwMTQ4ODNiMjI5NTQ=",
      tracks: {
        href:
          "https://api.spotify.com/v1/playlists/12CBmjXuOH7Cvm5iJ8LkH2/tracks",
        total: 89,
      },
      type: "playlist",
      uri: "spotify:playlist:12CBmjXuOH7Cvm5iJ8LkH2",
    },
  ],
  limit: 20,
  next:
    "https://api.spotify.com/v1/users/12146173730/playlists?offset=20&limit=20",
  offset: 0,
  previous: null,
  total: 36,
};

export const makeAlbumListSut = () => {
  const album_list_render = render(<AlbumsList data={data_mock} />);

  return {
    album_list_render,
    AlbumsList,
  };
};
