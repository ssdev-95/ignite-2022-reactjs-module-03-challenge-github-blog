import { Card, Container, Text, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { MarkdownBox } from '../markdown-box'
import { IssuePreview } from '../../hooks/useFetch'
import { formatTimePassed } from '../../utils/formatter'
import { useStyles } from './styles'

type PostCardProps = {
  issue:IssuePreview
}

export function PostCard({ issue }:PostCardProps) {
  const { classes } = useStyles()
	const navigate = useNavigate()

	const handleClick = () => {
	  navigate(`/post?n=${issue.issueNumber}`)
	}

	const markdownPreview = issue.body.split('\n')[0]

  return (
	  <Card
			onClick={handleClick}
			className={classes.cardContainer}
		>
		  <Container className={classes.cardHeader}>
			  <Title className={classes.title}>
				  {issue.title}
				</Title>

				<Text className={classes.time}>
				  {formatTimePassed(issue.createdAt)}
				</Text>
			</Container>

			<Container className={classes.bodyWrapper}>
			  <MarkdownBox markdown={markdownPreview} />
			</Container>
		</Card>
	)
}
