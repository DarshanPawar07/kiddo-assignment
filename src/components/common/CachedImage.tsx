import { memo } from "react";
import { StyleProp, ImageStyle } from "react-native";
import { Image } from "expo-image";

interface CachedImageProps {
uri: string;
style?: StyleProp<ImageStyle>;
}

function CachedImageComponent({
uri,
style,
}: CachedImageProps) {
return ( <Image
   source={uri}
   style={style}
   contentFit="cover"
   cachePolicy="memory-disk"
 />
);
}

export default memo(CachedImageComponent);
