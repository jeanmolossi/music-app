import React from "react";
import { PopularList } from "@/presentation/pages/home/components";
import { render } from "@testing-library/react-native";

const data_mock = {
  message: "Selección del editor",
  playlists: {
    href:
      "https://api.spotify.com/v1/browse/featured-playlists?timestamp=2021-05-10T03%3A43%3A34&offset=0&limit=20",
    items: [
      {
        collaborative: false,
        description: "Slow down with some calming keys.",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1s9knjP51Oa",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX1s9knjP51Oa",
        id: "37i9dQZF1DX1s9knjP51Oa",
        images: [
          {
            height: null,
            url:
              "https://i.scdn.co/image/ab67706f00000003ec69f78942a99131ab104df5",
            width: null,
          },
        ],
        name: "Calm Vibes",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYyMDI4NjM5NiwwMDAwMDA3ODAwMDAwMTc5NDA5ODU3MmQwMDAwMDE2ZDE1NDk3NWNm",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX1s9knjP51Oa/tracks",
          total: 297,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DX1s9knjP51Oa",
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 12,
  },
};

const makePopularListSut = () => {
  const popular_list_render = render(<PopularList data={data_mock} />);

  return {
    popular_list_render,
  };
};

describe("Home/PopularList", () => {
  test("Render", async () => {
    const { popular_list_render } = makePopularListSut();

    const { findByTestId } = popular_list_render;

    const list = await findByTestId("popular-list-test-id");

    expect(list.children.length).toBe(1);
  });
});
