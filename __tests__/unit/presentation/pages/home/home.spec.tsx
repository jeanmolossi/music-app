import { act } from "@testing-library/react-hooks/native";
import { makeHomeSut } from "__tests__/mocks";

describe("Home", () => {
  describe("Render", () => {
    test("Renderiza a home corretamente", async () => {
      const { home_render } = makeHomeSut();

      const { getByTestId } = home_render;

      const container = getByTestId("animated-content-view");

      expect(container.children).toHaveLength(3);
    });
  });

  describe("useHomeHelpers", () => {
    test("onNavigationStateChange", async () => {
      const { props, useHomeHookSut } = makeHomeSut();
      const { result, waitForNextUpdate } = useHomeHookSut;

      jest
        .spyOn(props.remoteRecentlyPlayed, "load")
        .mockImplementationOnce(async () => ({
          href: "valid-link",
          cursors: {
            after: "",
            before: "",
          },
          items: [
            {
              context: {} as any,
              played_at: new Date().toISOString(),
              track: {} as any,
            },
            {
              context: {} as any,
              played_at: new Date().toISOString(),
              track: {} as any,
            },
          ],
          limit: 10,
        }))
        .mockImplementationOnce(async () => ({
          href: "valid-link",
          cursors: {
            after: "",
            before: "",
          },
          items: [],
          limit: 10,
        }));

      await act(async () => {
        result.current.onNavigationStateChange("fake_code");
      });

      expect(result.current.code).toBe("fake_code");

      await act(async () => {
        result.current.onNavigationStateChange("fake_code_2");
      });

      expect(result.current.code).toBe("fake_code_2");
    });
  });
});
