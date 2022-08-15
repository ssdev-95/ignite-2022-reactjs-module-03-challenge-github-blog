import { Container } from '@mantine/core'
import { IssuePreview } from '../../hooks/useFetch'
import { PostCard } from '../post-card'
import { useStyles } from './styles'

type PostListProps = {
  issues:IssuePreview[]
}

export function PostList({ issues }:PostListProps) {
  const { classes } = useStyles()

  return (
	  <Container className={classes.list}>
  		{issues.map((issue) => (
    	  <PostCard key={issue.id} issue={issue} />
  	  ))}
  	</Container>
	)
}
