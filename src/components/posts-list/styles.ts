import { createStyles } from '@mantine/core'

export const useStyles = createStyles({
  list: {
    width: '864px',
    maxWidth: '100%',
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    '@media(max-width:869px)': {
      gridTemplateColumns: '1fr',
    },
  },
})
