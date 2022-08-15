import { Card, Container, Text, Divider } from '@mantine/core'
import { MarkdownBox } from '../markdown-box'
import { PostComment } from '../../hooks/useFetch'
import { formatTimePassed } from '../../utils/formatter'
import { useStyles } from './styles'

type CommentProps = {
  comment:PostComment
}

export function Comment({ comment }: CommentProps) {
  const { classes } = useStyles()
	const dateFormatted = formatTimePassed(
	  comment.createdAt
	)

	return (
	  <Card className={classes.container}>
		  <Container className={classes.header}>
			  <Text>
				  {comment.author}
				</Text>
				<Text className={classes.time}>
				  {dateFormatted}
				</Text>
			</Container>

			<Divider className={classes.divider} />

			<Container className={classes.body}>
			  <MarkdownBox markdown={comment.body} />
			</Container>
		</Card>
	)
}
