import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    padding: '1.5rem',
    // height: '16.25rem',
    backgroundColor: theme.colors['gray-600'],
  },
  cardHeader: {
    width: '100%',
    height: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  title: {
    color: theme.colors.white,
    fontSize: '1.8rem',
    width: '60%',
    height: '100%',
    overflow: 'hidden',
    lineHeight: 2,
    textOverflow: 'ellipsis',
  },
  time: {
    color: theme.colors['gray-300'],
  },
  bodyWrapper: {
    width: '100%',
    flex: 1,
    color: theme.colors['gray-200'],
    overflow: 'hidden',
  },
}))
