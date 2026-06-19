import { Image } from "expo-image";

export async function preloadImages(
urls: string[]
): Promise<void> {
await Promise.all(
urls.map((url) =>
Image.prefetch(url)
)
);
}
