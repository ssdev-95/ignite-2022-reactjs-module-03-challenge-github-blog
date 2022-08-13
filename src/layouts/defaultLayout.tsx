import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Header } from '../components/header'
import { useBaseStyles } from '../styles/base-styles'

export function DefaultLayout() {
  const { classes } = useBaseStyles()
  return (
	  <Container className={classes.container}>
		  <Header />
			<Outlet />
		</Container>
	)
}
