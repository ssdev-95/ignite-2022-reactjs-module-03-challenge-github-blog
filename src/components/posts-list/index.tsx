import { Card, Container, Text, Title } from '@mantine/core'
import {  useFetch } from '../../hooks/useFetch'
import { formatTimePassed } from '../../utils/formatter'
import { useStyles } from './styles'

export function PostList() {
  const { classes } = useStyles()
	const { issues } = useFetch()

  return (
	  <Container className={classes.list}>
  		{issues.map((issue) => (
    	  <Card
				  key={issue.id}
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
					  <Text className={classes.bodyText}>
						  {issue.body}
						</Text>
					</Container>
				</Card>
  	  ))}
  	</Container>
	)
}
