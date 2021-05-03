/**
 * @typedef Scopes
 * @section Images
 * @param ugc-image-upload
 * -
 * - Description: Write access to user-provided images.
 * - Visible to users: Upload images to Spotify on your behalf.
 * - Endpoints:
 * -- Upload a Custom Playlist Cover Image: https://developer.spotify.com/documentation/web-api/reference/#endpoint-upload-custom-playlist-cover
 * @section Listening History
 * @param user-read-recently-played
 * -
 * - Description: Read access to a user’s recently played tracks.
 * - Visible to users:  Access your recently played items
 * - Endpoints:
 * -- Get Current User's Recently Played Tracks: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-the-users-currently-playing-track
 * @param user-top-read
 * -
 * - Description: Read access to a user's top artists and tracks.
 * - Visible to users: 	Read your top artists and content.
 * - Endpoints:
 * -- Get a User's Top Artists and Tracks: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-top-artists-and-tracks
 * @param user-read-playback-position
 * -
 * - Description: Read access to a user’s playback position in a content.
 * - Visible to users: Read your position in content you have played.
 * - Endpoints:
 * -- Get an Episodes: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-an-episode
 * -- Get Several Episodes: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-episodes
 * -- Get a Show: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-episodes
 * -- Get Several Shows: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-multiple-shows
 * -- Get a Show's Episodes: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-shows-episodes
 * @section Spotify Connect
 * @param user-read-playback-state
 * -
 * - Description: Read access to a user’s recently played tracks.
 * - Visible to users: Access your recently played items.
 * - Endpoints:
 * -- Get a User's Available Devices: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-users-available-devices
 * -- Get Information About The User's Current Playback: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-information-about-the-users-current-playback
 * -- Get the User's Currently Playing Track: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played
 * @param user-modify-playback-state
 * -
 * - Description: Write access to a user’s playback state
 * - Visible to users: Control playback on your Spotify clients and Spotify Connect devices.
 * - Endpoints:
 * -- Pause a User's Playback: https://developer.spotify.com/documentation/web-api/reference/#endpoint-pause-a-users-playback
 * -- Seek To Position In Currently Playing Track: https://developer.spotify.com/documentation/web-api/reference/#endpoint-seek-to-position-in-currently-playing-track
 * -- Set Repeat Mode On User’s Playback: https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-repeat-mode-on-users-playback
 * -- Set Volume For User's Playback: https://developer.spotify.com/documentation/web-api/reference/#endpoint-set-volume-for-users-playback
 * -- Skip User’s Playback To Next Track: https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-next-track
 * -- Skip User’s Playback To Previous Track: https://developer.spotify.com/documentation/web-api/reference/#endpoint-skip-users-playback-to-previous-track
 * -- Start/Resume a User's Playback: https://developer.spotify.com/documentation/web-api/reference/#endpoint-start-a-users-playback
 * -- Toggle Shuffle For User’s Playback: https://developer.spotify.com/documentation/web-api/reference/#endpoint-toggle-shuffle-for-users-playback
 * -- Transfer a User's Playback: https://developer.spotify.com/documentation/web-api/reference/#endpoint-transfer-a-users-playback
 * -- Add An Item To The End Of User's Current Playback Queue: https://developer.spotify.com/documentation/web-api/reference/#endpoint-seek-to-position-in-currently-playing-track
 * @param user-read-currently-playing
 * -
 * - Description: Read access to a user’s currently playing content
 * - Visible to users: Read your currently playing content
 * - Endpoints:
 * -- Get the User's Currently Playing Track: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-recently-played
 * @section Playback
 * @param app-remote-control
 * -
 * - Description: Remote control playback of Spotify. This scope is currently available to Spotify iOS and Android SDKs.
 * - Visible to users: Communicate with the Spotify app on your device
 * - Endpoints:
 * -- iOS SDK: https://developer.spotify.com/documentation/ios/
 * -- Android SDK: https://developer.spotify.com/documentation/android/
 * @param streaming
 * -
 * - Description: Control playback of a Spotify track. This scope is currently available to the Web Playback SDK. The user must have a Spotify Premium account
 * - Visible to users: Play content and control playback on your other devices
 * - Endpoints:
 * -- Web Playback SDK: https://developer.spotify.com/documentation/web-playback-sdk/
 * @section Playlists
 * @param playlist-modify-public
 * -
 * - Description: Write access to a user's public playlists
 * - Visible to users: Manage your public playlists
 * - Endpoints:
 * -- Follow a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-playlist
 * -- Unfollow a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-playlist
 * -- Add Items to a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist
 * -- Change a Playlist's Details: https://developer.spotify.com/documentation/web-api/reference/#endpoint-change-playlist-details
 * -- Create a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-create-playlist
 * -- Remove Items from a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-playlist
 * -- Reorder a Playlist's Items: https://developer.spotify.com/documentation/web-api/reference/#endpoint-reorder-or-replace-playlists-tracks
 * -- Replace a Playlist's Items: https://developer.spotify.com/documentation/web-api/reference/#endpoint-reorder-or-replace-playlists-tracks
 * -- Upload a Custom Playlist Cover Image: https://developer.spotify.com/documentation/web-api/reference/#endpoint-upload-custom-playlist-cover
 * @param playlist-modify-private
 * -
 * - Description: Write access to a user's private playlists
 * - Visible to users: Manage your private playlists
 * - Endpoints:
 * -- Follow a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-playlist
 * -- Unfollow a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-playlist
 * -- Add Items to a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-add-tracks-to-playlist
 * -- Change a Playlist's Details: https://developer.spotify.com/documentation/web-api/reference/#endpoint-change-playlist-details
 * -- Create a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-create-playlist
 * -- Remove Items from a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-playlist
 * -- Reorder a Playlist's Items: https://developer.spotify.com/documentation/web-api/reference/#endpoint-reorder-or-replace-playlists-tracks
 * -- Replace a Playlist's Items: https://developer.spotify.com/documentation/web-api/reference/#endpoint-reorder-or-replace-playlists-tracks
 * -- Upload a Custom Playlist Cover Image: https://developer.spotify.com/documentation/web-api/reference/#endpoint-upload-custom-playlist-cover
 * @param playlist-read-private
 * -
 * - Description: Read access to user's private playlists
 * - Visible to users: Access your private playlists
 * - Endpoints:
 * -- Check if Users Follow a Playlist: https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-if-user-follows-playlist
 * -- Get a List of Current User's Playlists: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists
 * -- Get a List of a User's Playlists: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists
 * @param playlist-read-collaborative
 * -
 * - Description: Include collaborative playlists when requesting a user's playlists
 * - Visible to users: Access your collaborative playlists
 * - Endpoints:
 * -- Get a List of Current User's Playlists: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists
 * -- Get a List of a User's Playlists: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-list-users-playlists
 * @section Follow
 * @param user-follow-modify
 * -
 * - Description: Write/delete access to the list of artists and other users that the user follows
 * - Visible to users: Manage who you are following
 * - Endpoints:
 * -- Follow Artists or Users: https://developer.spotify.com/documentation/web-api/reference/#endpoint-follow-artists-users
 * -- Unfollow Artists or Users: https://developer.spotify.com/documentation/web-api/reference/#endpoint-unfollow-artists-users
 * @param user-follow-read
 * -
 * - Description: Read access to the list of artists and other users that the user follows
 * - Visible to users: Access your followers and who you are following
 * - Endpoints:
 * -- Check if Current User Follows Artists or Users: https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-current-user-follows
 * -- Get User's Followed Artists: https://developer.spotify.com/documentation/web-api/#endpoint-get-followed
 * @section Library
 * @param user-library-modify
 * -
 * - Description: Write/delete access to a user's "Your Music" library
 * - Visible to users: Manage your saved content
 * - Endpoints:
 * -- Remove Albums for Current User: https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-albums-user
 * -- Remove User's Saved Tracks: https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-tracks-user
 * -- Remove User's Saved Episodes: https://developer.spotify.com/documentation/web-api/reference/#endpoint-remove-episodes-user
 * -- Save Albums for Current User: https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-albums-user
 * -- Save Tracks for User: https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-tracks-user
 * -- Save Episodes for User: https://developer.spotify.com/documentation/web-api/reference/#endpoint-save-episodes-user
 * @param user-library-read
 * -
 * - Description: Read access to a user's library
 * - Visible to users: Access your saved content
 * - Endpoints:
 * -- Check User's Saved Albums: https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-albums
 * -- Check User's Saved Tracks: https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-tracks
 * -- Get Current User's Saved Albums: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-albums
 * -- Get a User's Saved Tracks: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-tracks
 * -- Check User's Saved Episodes: https://developer.spotify.com/documentation/web-api/reference/#endpoint-check-users-saved-episodes
 * -- Get User's Saved Episodes: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-saved-episodes
 * @section Users
 * @param user-read-email
 * -
 * - Description: Read access to user’s email address
 * - Visible to users: Get your real email address
 * - Endpoints:
 * -- Get Current User's Profile: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-current-users-profile
 * @param user-read-private
 * -
 * - Description: Read access to user’s subscription details (type of user account)
 * - Visible to users: Access your subscription details
 * - Endpoints:
 * -- Search for an Item: https://developer.spotify.com/documentation/web-api/reference/#endpoint-search
 * -- Get Current User's Profile: https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-current-users-profile
 */
export type Scopes =
  | "ugc-image-upload"
  | "user-read-recently-played"
  | "user-top-read"
  | "user-read-playback-position"
  | "user-read-playback-state"
  | "user-modify-playback-state"
  | "user-read-currently-playing"
  | "app-remote-control"
  | "streaming"
  | "playlist-modify-public"
  | "playlist-modify-private"
  | "playlist-read-private"
  | "playlist-read-collaborative"
  | "user-follow-modify"
  | "user-follow-read"
  | "user-library-modify"
  | "user-library-read"
  | "user-read-email"
  | "user-read-private";
