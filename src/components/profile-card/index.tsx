import { Avatar, Card, Text, Title } from '@mantine/core'

import { useStyles } from './styles'

export function ProfileCard() {
  const { classes } = useStyles()
  return (
    <Card className={classes.container}>
      <Avatar
        src="https://github.com/xSallus.png"
        className={classes.avatar}
        alt=""
      />
      <div className={classes.infoWrapper}>
        <div className={classes.header}>
          <Title>Salomao Souza</Title>
          <a
            href="https://github.com/xSallus?tag=repositories"
            target="_blank"
            rel=",noopener noreferrer"
          >
            Github &gt;
          </a>
        </div>
        <Text className={classes.bio}>
          Passionate frontend developer, wood for every obra
        </Text>
        <div className={classes.footer}>
          <Text className={classes.info}>xSallus</Text>
          <Text className={classes.info}>Not applicable</Text>
          <Text className={classes.info}>32 followers</Text>
        </div>
      </div>
    </Card>
  )
}
