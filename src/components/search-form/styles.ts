import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  form: {
    marginTop: '3rem',
    marginBottom: '2rem',
    marginInline: 'auto',
    width: '864px',
    maxWidth: '100%',
  },
  input: {
    width: '100%',
    padding: '1rem',
    color: theme.colors.white,
    backgroundColor: theme.colors['gray-900'],
    border: `1px solid ${theme.colors['gray-500']}`,
    borderRadius: '4px',
    '::placeholder': {
      color: theme.colors['gray-400'],
    },
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    color: theme.colors.white,
  },
}))
