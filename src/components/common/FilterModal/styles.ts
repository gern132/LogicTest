import { withStyles } from "@hooks/withStyles"

export const useStyles = withStyles(({ colors }) => ({
  fullScreenContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  headerTitle: {
    marginTop: 24,
    marginBottom: 18,
    fontSize: 18,
    fontWeight: "800",
    color: colors.textGray,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    padding: 8,
  },
  content: {
    flex: 1,
    width: 336,
    alignSelf: "center",
  },
}))
