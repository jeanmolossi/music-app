import React from "react";
import { View } from "react-native";
import { Text } from "../../../../components";
import styles from "../../styles";

interface SocialsInfoProps {}

export const SocialsInfo = ({}: SocialsInfoProps) => {
  return (
    <View style={styles.socials_info}>
      <View style={styles.social_data}>
        <Text style={styles.social_label}>Songs</Text>
        <Text style={styles.social_text}>119</Text>
      </View>
      <View style={styles.social_data}>
        <Text style={styles.social_label}>Followers</Text>
        <Text style={styles.social_text}>67.9k</Text>
      </View>
      <View style={styles.social_data}>
        <Text style={styles.social_label}>Following</Text>
        <Text style={styles.social_text}>3.159</Text>
      </View>
    </View>
  );
};

export default SocialsInfo;
