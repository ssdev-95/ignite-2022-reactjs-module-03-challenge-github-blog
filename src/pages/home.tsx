import { Container, useMantineTheme } from '@mantine/core'
import { ProfileCard } from '../components/profile-card'

export function Home() {
  const theme = useMantineTheme()

  return (
	  <Container style={{ backgroundColor: theme.colors['gray-900']}}>
		  <ProfileCard />
		</Container>
	)
}
