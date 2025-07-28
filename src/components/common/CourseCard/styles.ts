import { withStyles } from "@hooks/withStyles"

export const useStyles = withStyles(({ colors }) => ({
  container: {
    width: 210,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: colors.white,
    elevation: 3,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  textContainer: {
    paddingVertical: 12,
    color: colors.text,
  },
  name: {
    fontSize: 14,
    fontWeight: "800",
    color: colors.text,
    textAlign: "center",
  },
}))
