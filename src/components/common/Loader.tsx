import {
ActivityIndicator,
View,
StyleSheet,
} from "react-native";

import { useTheme } from "@/core/theme/useTheme";

export default function Loader() {
const { theme } = useTheme();

return ( <View style={styles.container}> <ActivityIndicator
     size="large"
     color={theme.primary}
   /> </View>
);
}

const styles = StyleSheet.create({
container: {
padding: 24,
justifyContent: "center",
alignItems: "center",
},
});
