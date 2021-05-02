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

interface AlbumsListProps {
  data: any[];
}

export const AlbumsList = ({ data }: AlbumsListProps) => {
  const moreOption = useCallback(() => {
    Alert.alert("Mais opções", "Você tocou em mais opções");
  }, []);

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      style={styles.albums_flat_list}
      contentContainerStyle={styles.albums_flat_list_container}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View
          style={styles.algums_item}
          onStartShouldSetResponder={() => true}
          onStartShouldSetResponderCapture={() => true}
          onMoveShouldSetResponderCapture={() => true}
          onMoveShouldSetResponder={() => true}
        >
          <Image style={styles.album_image} source={{ uri: item.cover }} />
          <View style={styles.album_middle_content}>
            <Text>{item.title}</Text>
            <Text variant="dark">{item.year}</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={moreOption}
            style={styles.album_more_button}
          >
            <Feather name="more-horizontal" size={20} color={Theme.mainColor} />
          </TouchableWithoutFeedback>
        </View>
      )}
    />
  );
};
