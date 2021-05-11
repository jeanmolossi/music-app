import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

async function schedulePushNotification() {
  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  await Notifications.dismissAllNotificationsAsync();
  await Notifications.setNotificationCategoryAsync(
    "test",
    [
      {
        buttonTitle: "Play",
        identifier: "play",
        options: { isDestructive: false, opensAppToForeground: false },
      },
      {
        buttonTitle: "Pause",
        identifier: "pause",
        options: { isDestructive: false, opensAppToForeground: false },
      },
    ],
    {
      customDismissAction: true,
      previewPlaceholder: "placeholder",
      showTitle: true,
      showSubtitle: true,
    }
  );

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Nova música! Ouça agora 🎵",
      body: "Você tem novas playlists recomendadas!",
      data: { data: "goes here" },
      categoryIdentifier: "test",
      autoDismiss: false,
      sticky: true,
    },
    trigger: { seconds: 5 },
  });
}

export function useNotificationsHandler() {
  const responseListener = useRef<any>();

  useEffect(() => {
    responseListener.current = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    return () => {
      if (responseListener.current)
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    schedulePushNotification();
  }, []);
}
