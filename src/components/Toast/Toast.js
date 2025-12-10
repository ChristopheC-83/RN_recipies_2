import { s } from "./Toast.style";

import { View, Text, Animated, StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import { useToastStore } from "../../store/toastStore";

export default function GlobalToast() {
  const { toast, hideToast } = useToastStore();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (toast.visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
      const timer = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => hideToast());
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  if (!toast.visible) return null;

  return (
    <Animated.View style={[s.container, { opacity }, s[toast.type]]}>
      <Text style={s.text}>{toast.text}</Text>
    </Animated.View>
  );
}
