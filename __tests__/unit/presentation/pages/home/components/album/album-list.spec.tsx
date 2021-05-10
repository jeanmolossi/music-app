import { fireEvent, waitFor } from "@testing-library/react-native";
import { makeAlbumListSut } from "__tests__/mocks";

describe("Home/AlbumList", () => {
  test("Render", async () => {
    const { album_list_render } = makeAlbumListSut();

    const { getByTestId } = album_list_render;

    const list = getByTestId("album-list-test-id");

    expect(list.children).toHaveLength(1);
  });

  test("More options", async () => {
    const { album_list_render } = makeAlbumListSut();

    const { getByTestId } = album_list_render;

    const button = getByTestId("more-options-album");
    const view = getByTestId("list-item");

    fireEvent(button, "onPress");
    fireEvent(view, "onStartShouldSetResponder");
    fireEvent(view, "onStartShouldSetResponderCapture");
    fireEvent(view, "onMoveShouldSetResponderCapture");
  });
});
