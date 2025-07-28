import { withStyles } from "@hooks/withStyles"

export const useStyles = withStyles(({ colors }) => ({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  textContainer: {
    padding: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
}))
