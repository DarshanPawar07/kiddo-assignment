
/*
import { StyleSheet } from "react-native";

export default StyleSheet.create({
container: {
width: "100%",
height: 180,
borderRadius: 16,
overflow: "hidden",
marginBottom: 16,
},

image: {
width: "100%",
height: "100%",
},
});
*/
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,

    elevation: 5,
  },

  image: {
    width: "100%",
    height: 190,
  },
});