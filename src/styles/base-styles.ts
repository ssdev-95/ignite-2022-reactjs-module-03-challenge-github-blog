import { createStyles } from '@mantine/core'

export const useBaseStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors['gray-800'],
    minHeight: '100vh',
    minWidth: '100vw',
    padding: 0,
		paddingBottom: '2.5rem',

		'button:focus, input:focus': {
			outline: 0,
			boxShadow: `0 0 0 1px ${theme.colors.blue}`
		}
  }
}))
