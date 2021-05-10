import React from "react";
import { Alert, Image, View } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { Theme } from "@/presentation/styles";
import { Text } from "@/presentation/components";
import styles from "@/presentation/pages/home/styles";
import { useCallback } from "react";
import { GetMyPlaylists } from "@/domain/usecases";

interface AlbumsListProps {
  data?: GetMyPlaylists.Model;
}

export const AlbumsList = ({ data }: AlbumsListProps) => {
  const moreOption = useCallback(() => {
    Alert.alert("Mais opções", "Você tocou em mais opções");
  }, []);

  return (
    <FlatList
      testID="album-list-test-id"
      data={data?.items}
      showsVerticalScrollIndicator={false}
      style={styles.albums_flat_list}
      contentContainerStyle={styles.albums_flat_list_container}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }: { item: GetMyPlaylists.Model["items"][0] }) => (
        <View
          style={styles.algums_item}
          onStartShouldSetResponder={() => true}
          onStartShouldSetResponderCapture={() => true}
          onMoveShouldSetResponderCapture={() => true}
          onMoveShouldSetResponder={() => true}
          testID="list-item"
        >
          <Image
            style={styles.album_image}
            source={{ uri: item.images[0].url }}
          />
          <View style={styles.album_middle_content}>
            <Text>{truncate(item.name, 45)}</Text>
            <Text variant="dark">{item.tracks.total}</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={moreOption}
            style={styles.album_more_button}
            testID="more-options-album"
          >
            <Feather name="more-horizontal" size={20} color={Theme.mainColor} />
          </TouchableWithoutFeedback>
        </View>
      )}
    />
  );
};

function truncate(text: string, length: number = 35) {
  const regex = new RegExp("(?=.*$).{" + length + "}");

  const matcher = text.match(regex);

  const truncated = matcher?.[0] ? `${matcher?.[0]}...` : null;

  return truncated || text;
}
