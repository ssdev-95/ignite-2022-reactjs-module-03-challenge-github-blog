import { Container, Loader, Text } from '@mantine/core'
import { useForm } from 'react-hook-form'

import {
  zodResolver,
	IssueFormInput,
	issuesFormSchema
} from '../../services/zod'

import { useFetch } from '../../hooks/useFetch'
import { useStyles } from './styles'

export function SearchForm() {
  const { classes } = useStyles()
  const { fetchIssues, issues }  = useFetch()
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<IssueFormInput>({
	  resolver: zodResolver(issuesFormSchema)
	})

	async function onSubmitRequested(data: IssueFormInput) {
	  await fetchIssues(data.query)
		reset()
	}

  return (
	  <form
		  className={classes.form}
			onSubmit={handleSubmit(onSubmitRequested)}
		>
		  <Container className={classes.header}>
			  <Text>Posts</Text>
			  <Text>{`${issues.length} posts`}</Text>
			</Container>
		  {isSubmitting ? (
			  <Loader />
			) : (
    	  <input
				  className={classes.input}
					placeholder="Search issues"
					{...register('query')}
				/>
			)}
		</form>
	)
}
