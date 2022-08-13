import { createStyles } from '@mantine/core'
//TODO: remember card post bg grsy-600

export const useStyles = createStyles((theme) => ({
	container: {
		width: '100%',
		maxWidth: '864px',
		backgroundColor: theme.colors['gray-700'],
		marginInline: 'auto',
		paddingVertical: '2.5rem',
		paddingHorizontal: '3.5rem',
		display: 'flex',
		gap: '1.5rem',
		transform: 'translateY(-90px)',
		color: theme.colors['gray-200'],
		'@media (max-width: 800px)': {
			flexDirection: 'column',
			alignItems: 'center'
		}
	},
	avatar: {
		borderRadius: '10px',
		height: '9.25rem',
		width: '9.25rem'
	},
	infoWrapper: {
		flex: 1,
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& > h1': {
			color: theme.colors.white,
			fontSize: '1.5rem',
			lineHeight: 1.3
		}
	},
	bio: {
	  marginTop: '0.8rem',
		marginBottom: '1.8rem',
		fontSize: '1rem',
		lineHeight: 1.6
	},
	footer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '2rem',
		'@media (max-width: 800px)': {
			justifyContent: 'space-between'
		}
	},
	info: {
		fontSize: '1rem',
		lineHeight: 1.6
	}
}))
