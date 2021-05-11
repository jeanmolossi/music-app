import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldSetBadge: false,
    shouldShowAlert: true,
    shouldPlaySound: false,
  }),
});
