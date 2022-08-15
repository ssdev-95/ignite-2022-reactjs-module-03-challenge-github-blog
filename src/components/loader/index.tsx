import { Container, Skeleton } from '@mantine/core'
import { useStyles } from './styles'

export function Loader() {
  const { classes } = useStyles()
  return (
    <Container className={classes.loader}>
      <Container className={classes.header}>
        <Skeleton height={92} width={92} circle mb={16} mx="auto" />

        <Container className={classes.div}>
          <Skeleton width="100%" height={24} mb={10} />
          <Skeleton width="100%" height={24} mb={10} />
          <Skeleton width="100%" height={24} mb={10} />
        </Container>
      </Container>

      <Skeleton width="100%" height={24} mb={10} />
      <Skeleton width="100%" height={24} />
    </Container>
  )
}
