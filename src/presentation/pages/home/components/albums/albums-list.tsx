import React from "react";
import { Feather } from "@expo/vector-icons";
import { Alert, FlatList, Image, Pressable, View } from "react-native";
import { Theme } from "../../../../styles";
import styles from "../../styles";
import { Text } from "../../../../components";
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
        <View style={styles.algums_item}>
          <Image style={styles.album_image} source={{ uri: item.cover }} />
          <View style={styles.album_middle_content}>
            <Text>{item.title}</Text>
            <Text variant="dark">{item.year}</Text>
          </View>
          <Pressable onPress={moreOption} style={styles.album_more_button}>
            <Feather name="more-horizontal" size={20} color={Theme.mainColor} />
          </Pressable>
        </View>
      )}
    />
  );
};
