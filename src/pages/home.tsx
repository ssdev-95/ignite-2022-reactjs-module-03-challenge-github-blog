import { useEffect} from 'react'
import { Container } from '@mantine/core'
import { ProfileCard } from '../components/profile-card'
import { SearchForm } from '../components/search-form'
import { PostList } from '../components/posts-list'
import { useFetch } from '../hooks/useFetch'

export function Home() {
  const { fetchIssues } = useFetch()

  useEffect(() => {
	  fetchIssues()
	}, [])

  return (
    <Container>
      <ProfileCard />
			<SearchForm />
			<PostList />
    </Container>
  )
}
