
/*
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 160,
    marginRight: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
});*/

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    minHeight: 40,
  },
});