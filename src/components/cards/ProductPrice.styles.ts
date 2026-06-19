/*
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
  },

  mrp: {
    fontSize: 14,
    textDecorationLine: "line-through",
    opacity: 0.6,
  },
});*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  price: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginRight: 8,
  },

  mrp: {
    fontSize: 14,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
});