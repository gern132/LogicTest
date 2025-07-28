import { withStyles } from "@hooks/withStyles"

export const useStyles = withStyles(({ colors }) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContent: {
    alignItems: "flex-start",
  },
  cardItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 6,
    width: "100%",
    justifyContent: "center",
  },
  cardItemDefault: { borderWidth: 2, borderColor: colors.gray },
  cardItemActive: {
    borderWidth: 2,
    borderColor: colors.green,
    backgroundColor: colors.green,
  },

  cardText: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text,
  },
  chipTextIdle: {
    color: "#333",
  },
  chipTextSelected: {
    color: colors.white,
  },
}))
