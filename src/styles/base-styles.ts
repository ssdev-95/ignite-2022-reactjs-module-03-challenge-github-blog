import { createStyles } from '@mantine/core'

export const useBaseStyles = createStyles((theme) => ({
  container: {
		backgroundColor: theme.colors['gray-800'],
		minHeight: '100vh',
		minWidth: '100vw',
		padding: 0
	}
}))
