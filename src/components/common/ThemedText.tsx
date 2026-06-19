import { ReactNode } from "react";
import {
Text,
TextProps,
} from "react-native";

import { useTheme } from "@/core/theme/useTheme";

interface ThemedTextProps
extends TextProps {
children: ReactNode;
}

export default function ThemedText({
children,
style,
...rest
}: ThemedTextProps) {
const { theme } = useTheme();

return (
<Text
{...rest}
style={[
{
color: theme.text,
},
style,
]}
>
{children} </Text>
);
}
