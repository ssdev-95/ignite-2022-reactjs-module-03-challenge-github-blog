import { createStyles } from '@mantine/core'
// TODO: remember card post bg grsy-600

export const useStyles = createStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: '864px',
    backgroundColor: theme.colors['gray-700'],
    marginInline: 'auto',
		marginTop: '-90px',
    padding: '2rem',
    display: 'flex',
    gap: '1.5rem',
    color: theme.colors['gray-200'],
    '@media (max-width: 800px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  avatar: {
    borderRadius: '10px',
    height: '9.25rem',
    width: '9.25rem',
  },
  infoWrapper: {
    flex: 1,
		padding: 0
  },
  header: {
		width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
		padding: 0,
		'& > a': {
			textDecoration: 'none',
			textTransform: 'uppercase',
			display: 'flex',
			alignItems: 'center',
			gap: '0.25rem',
			color: theme.colors.blue
		},
    '& > h1': {
      color: theme.colors.white,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
  },
  bio: {
    marginTop: '0.8rem',
    marginBottom: '1.8rem',
    fontSize: '1rem',
    lineHeight: 1.6,
		'@media(max-width:869px)': {
			textAlign: 'center'
		}
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
		padding: 0,
    gap: '2rem',
    '@media (max-width: 800px)': {
      justifyContent: 'space-between',
    },
  },
  info: {
    fontSize: '1rem',
    lineHeight: 1.6,
		display: 'flex',
		alignItems: 'center',
		gap: '0.25rem',	  
		'& > div': {
			display: 'flex',
			alignItems: 'center',
			'@media(max-width:869px)': {
				display: 'none'
			}
		}
  },
	icon: {
		height: '14px'
	}
}))
