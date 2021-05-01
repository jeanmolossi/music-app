import React, { ReactNode, useMemo } from "react";
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from "react-native";
import { Theme } from "../../styles";

interface TextProps extends RNTextProps {
  variant?: "light" | "suave" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  bold?: boolean;
  children?: ReactNode;
}

export const Text = ({
  children,
  variant = "light",
  size = "md",
  bold = false,
  style,
  ...rest
}: TextProps) => {
  const variantStyle = useMemo(() => {
    return styles[variant || "light"];
  }, [variant]);

  const sizeStyle = useMemo(() => {
    return styles[size || "md"];
  }, [size]);

  const boldAdjust = useMemo(() => {
    if (bold) return { fontFamily: "Poppins_Bold" };
    return null;
  }, [bold]);

  return (
    <RNText
      style={StyleSheet.flatten([
        styles.text,
        boldAdjust,
        variantStyle,
        sizeStyle,
        style,
      ])}
      {...rest}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Theme.contrastTextColor,
    fontFamily: "Poppins_Regular",
  },

  light: {
    color: Theme.contrastTextColor,
  },

  suave: {
    color: Theme.middleContrastTextColor,
  },

  dark: {
    color: Theme.lowContrastTextColor,
  },

  sm: {
    fontSize: 14,
  },
  md: {
    fontSize: 16,
  },
  lg: {
    fontSize: 24,
  },
  xl: {
    fontSize: 32,
  },
});
