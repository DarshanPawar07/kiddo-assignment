import { Linking } from "react-native";

export async function deepLink(
url: string
): Promise<void> {
const supported =
await Linking.canOpenURL(url);

if (!supported) {
console.warn(
`Cannot open URL: ${url}`
);
return;
}

await Linking.openURL(url);
}
