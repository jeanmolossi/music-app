import React from "react";
import { View } from "react-native";
import { Text } from "../../../../components";
import styles from "../../styles";

interface SocialsInfoProps {
  name?: string;
  followers?: number;
  country?: string;
}

export const SocialsInfo = ({
  name = "John Doe",
  followers = 0,
  country = "BR",
}: SocialsInfoProps) => {
  return (
    <View style={styles.socials_info}>
      <View style={styles.social_data}>
        <Text style={styles.social_label}>Nome</Text>
        <Text style={styles.social_text}>{name}</Text>
      </View>
      <View style={styles.social_data}>
        <Text style={styles.social_label}>Followers</Text>
        <Text style={styles.social_text}>{followers}</Text>
      </View>
      <View style={styles.social_data}>
        <Text style={styles.social_label}>País</Text>
        <Text style={styles.social_text}>{country}</Text>
      </View>
    </View>
  );
};

export default SocialsInfo;
