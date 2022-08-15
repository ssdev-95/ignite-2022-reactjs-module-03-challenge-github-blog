import { createStyles } from '@mantine/core'
import Background from '../../assets/header-bg.svg'

export const useStyles = createStyles({
  header: {
    width: '100%',
    paddingTop: '2.5rem',
    paddingBottom: '7.5rem',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundImage: `url(${Background})`,
    backgroundPositionX: '50%',
    backgroundSize: 'cover',
    paddingHorizontal: 0,
  },
})
