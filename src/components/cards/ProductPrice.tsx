import { View, Text } from "react-native";

import styles from "./ProductPrice.styles";

interface ProductPriceProps {
  price: number;
  mrp?: number;
}

export default function ProductPrice({
  price,
  mrp,
}: ProductPriceProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        ₹{price}
      </Text>

      {mrp ? (
        <Text style={styles.mrp}>
          ₹{mrp}
        </Text>
      ) : null}
    </View>
  );
}