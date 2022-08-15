import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: '4px',
    backgroundColor: theme.colors['gray-600'],
    color: theme.colors['gray-100'],
    padding: '1.25rem',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    width: '100%',
    marginBottom: '1.25rem',
  },
  divider: {
    backgroundColor: theme.colors['gray-200'],
  },
  time: {
    color: theme.colors['gray-400'],
  },
  body: {
    color: theme.colors['gray-300'],
  },
}))
