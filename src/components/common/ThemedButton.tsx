import {
Pressable,
Text,
StyleSheet,
} from "react-native";

import { useTheme } from "@/core/theme/useTheme";

interface ThemedButtonProps {
title: string;
onPress: () => void;
}

export default function ThemedButton({
title,
onPress,
}: ThemedButtonProps) {
const { theme } = useTheme();

return (
<Pressable
onPress={onPress}
style={[
styles.button,
{
backgroundColor:
theme.primary,
borderRadius:
theme.borderRadius,
},
]}
> <Text style={styles.text}>
{title} </Text> </Pressable>
);
}

const styles = StyleSheet.create({
button: {
paddingVertical: 12,
paddingHorizontal: 16,
alignItems: "center",
justifyContent: "center",
},

text: {
color: "#FFFFFF",
fontWeight: "600",
},
});
