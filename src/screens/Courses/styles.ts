import { withStyles } from "@hooks/withStyles"

export const useStyles = withStyles(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingBottom: 78,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 12,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.filter,
    borderRadius: 20,
    paddingVertical: 8,
    paddingLeft: 10,
    paddingRight: 5,
  },
  filterButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "800",
    marginRight: 3,
  },
  filterIcon: {
    marginLeft: 4,
  },
  list: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: colors.red,
    textAlign: "center",
  },
  emptyListText: {
    color: colors.white,
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
}))
