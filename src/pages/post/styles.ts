import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  content: {
    color: theme.colors.white,
    marginTop: '-90px',
  },

  header: {
    width: '869px',
    maxWidth: '100%',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: theme.colors['gray-600'],
  },
  title: {
    fontSize: '2rem',
  },
  links: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    '& > a': {
      textTransform: 'uppercase',
      textDecoration: 'none',
      color: theme.colors.blue,
      fontSize: '0.75rem',
    },
  },
  infos: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'center',
    padding: 0,
    color: theme.colors['gray-300'],
    '@media(min-width:870px)': {
      justifyContent: 'flex-start',
    },
  },
  body: {
    width: '869px',
    maxWidth: '100%',
    textIndent: '0.5rem',
    color: theme.colors['gray-200'],
    padding: 0,
    'blockquote, pre': {
      maxWidth: '100%',
      margin: 'auto',
      color: theme.colors['gray-400'],
    },
  },
  comments: {
    padding: 0,
    maxWidth: '869px',
    width: '100%',
    h1: {
      fontSize: '1.25rem',
      marginTop: '1.25rem',
      marginBottom: '1rem',
    },
  },
  divider: {
    maxWidth: '869px',
    marginInline: 'auto',
    marginVertical: '2rem',
    color: theme.colors['gray-200'],
  },
}))
