import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "../../../../components";
import styles from "../../styles";

interface PopularListProps {
  data: any[];
}

export const PopularList = ({ data }: PopularListProps) => {
  return (
    <FlatList
      data={data}
      style={styles.flatlist_style}
      contentContainerStyle={styles.flatlist_content_style}
      horizontal
      decelerationRate="fast"
      snapToAlignment="start"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.flatlist_item_style}>
          <View style={styles.fl_cover_style}>
            <Image source={{ uri: item.cover, width: 60, height: 60 }} />
          </View>

          <Text>{item.title}</Text>

          <Pressable style={styles.popular_item_play}>
            <FontAwesome5 name="play" size={10} color="white" />
          </Pressable>
        </View>
      )}
    />
  );
};
