import { useStyles } from './styles'
import Logo from '/assets/logo.svg'

export function Header() {
  const { classes } = useStyles()

	return (
	  <header className={classes.header}>
		  <img
			  src={Logo}
				height={64}
				alt=""
			/>
		</header>
	)
}
