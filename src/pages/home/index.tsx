import { useEffect, useState } from 'react'
import { Container } from '@mantine/core'
import { ProfileCard } from '../../components/profile-card'
import { SearchForm } from '../../components/search-form'
import { PostList } from '../../components/posts-list'
import { useFetch, IssuePreview, User } from '../../hooks/useFetch'
import { Loader } from '../../components/loader'

export function Home() {
  const [issues, setIssues] = useState<IssuePreview[]>([])
	const [user, setUser] = useState<User>({} as User)
  const { fetchIssues, fetchUserData } = useFetch()

  useEffect(() => {
	  fetchUserData()
		  .then((res) => setUser(res))
			.catch(console.log)
	  fetchIssues()
		 .then((res) => setIssues(res))
		 .catch(console.log)
	}, [])

	if(
	  !Object.keys(user).length ||
		!issues.length
	) {
	  return <Loader />
	}

  return (
    <Container>
      <ProfileCard user={user} />
			<SearchForm issuesCount={issues.length} />
			<PostList issues={issues} />
    </Container>
  )
}
