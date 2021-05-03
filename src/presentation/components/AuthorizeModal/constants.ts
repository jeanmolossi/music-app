import spotifyCredentials from "@/domain/config/credentials/spotify/spotify.credentials";
import { Scopes } from "@/domain/scopes/authorization-scopes";

const QueryParams = {
  client_id: spotifyCredentials.ClientID,
  response_type: "code",
  scope: encodeURIComponent(
    ([
      "ugc-image-upload",
      "user-read-recently-played",
      "user-top-read",
      "user-read-playback-position",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "app-remote-control",
      "streaming",
      "playlist-modify-public",
      "playlist-modify-private",
      "playlist-read-private",
      "playlist-read-collaborative",
      "user-follow-modify",
      "user-follow-read",
      "user-library-modify",
      "user-library-read",
      "user-read-email",
      "user-read-private",
    ] as Scopes[]).join(" ")
  ),
  redirect_uri: encodeURIComponent("http://response.ok"),
};

const encodedQuery = new URLSearchParams(QueryParams);

export const SPOTIFY_AUTHORIZE_URL =
  `https://accounts.spotify.com/authorize?` + encodedQuery.toString();
