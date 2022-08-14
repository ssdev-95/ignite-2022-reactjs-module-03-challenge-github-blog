import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
	list: {
		width: '864px',
		maxWidth: '100%',
		display: 'grid',
		gap: '1rem',
		gridTemplateColumns: 'repeat(2, 1fr)',
		'@media(max-width:869px)': {
			gridTemplateColumns: '1fr'
		}
	},
	cardContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1.25rem',
		padding: '1.5rem',
		height: '16.25rem',
		backgroundColor: theme.colors['gray-600']
	},
	cardHeader: {
		width: '100%',
		height: '25%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	title: {
		color: theme.colors.white,
		fontSize: '1.75rem'
	},
	time: {
		color: theme.colors['gray-300']
	},
	bodyWrapper: {
		width: '100%',
		flex: 1
	},
	bodyText: {
		color: theme.colors['gray-200']
	}
}))
