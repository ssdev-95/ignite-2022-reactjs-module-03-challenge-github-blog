import { useState, useEffect } from 'react'
import { Container, Text, Title, Divider } from "@mantine/core";
import { useSearchParams, Navigate } from 'react-router-dom'

import { useFetch, FullPost} from "../../hooks/useFetch";
import { formatTimePassed } from '../../utils/formatter'
import { Comment } from '../../components/issue-comment'
import { MarkdownBox } from '../../components/markdown-box'
import { Loader } from '../../components/loader'
import { useStyles } from './styles';

export function Post() {
  const { fetchIssueDetails } = useFetch()
  const [params] = useSearchParams()
	const { classes } = useStyles()
	const [issue, setIssue] = useState<FullPost>(
	  {} as FullPost
	)

	const issueNumber = params.get('n')

	useEffect(() => {
	  issueNumber && fetchIssueDetails(+issueNumber)
		  .then(setIssue)
	},[])

	if(!issueNumber) {
	  <Navigate to="/" />
	}

	if(!Object.keys(issue).length) {
	  return <Loader />
	}

	const hasComments = issue.comments && issue.comments.length

	const commentsCountText = `${hasComments ? issue.comments.length : 0} comments`

  return (
	  <Container className={classes.content}>
  	  <Container className={classes.header}>
			  <Container className={classes.links}>
  		  	<a href="/">&lt; go back</a>

					<a
  				  href={issue.repositoryURL}
						target="_blank"
    				rel="noreferrer, noopener"
  				>
					  See on Github
  				</a>
  			</Container>

  			<Title className={classes.title}>
  			  {issue.title}
  			</Title>

  			<Container className={classes.infos}>
  			  <Text>{issue.author}</Text>

  				<Text>
	  			  {formatTimePassed(issue.createdAt)}
					</Text>

		  		<Text>{commentsCountText}</Text>
			  </Container>
  		</Container>

      <Container className={classes.body}>
  		  <MarkdownBox markdown={issue.body} />
			</Container>

		 {hasComments && (
		   <Divider className={classes.divider}/>
		 )}

			{hasComments && (
			  <Container className={classes.comments}>
				  <Title>Comments</Title>
			    {issue.comments.map(comment => (
				    <Comment
						  key={comment.id}
							comment={comment}
						/>
			   	))}
			  </Container>
			)}
		</Container>
	)
}
