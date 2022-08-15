import { Avatar, Card, Text, Title } from '@mantine/core'
import { User } from '../../hooks/useFetch'

import ArrowUpRight from '../../assets/arrow-up-right.svg'
import UserGroup from '../../assets/user-group.svg'
import Building from '../../assets/building.svg'
import GithubLogo from '../../assets/github.svg'

import { useStyles } from './styles'

type ProfileCardProps = {
  user:User
}

export function ProfileCard({ user }: ProfileCardProps) {
  const { classes } = useStyles()

  return (
    <Card className={classes.container}>
      <Avatar
        src={user.avatarURL}
        className={classes.avatar}
        alt=""
      />
      <div className={classes.infoWrapper}>
        <div className={classes.header}>
          <Title>{user.name}</Title>
          <a
            href={user.profileURL}
						target="_blank"
						rel="external"
          >
            Github&nbsp;
						<img
						  src={ArrowUpRight}
							className={classes.icon}
							alt=""
						/>
          </a>
        </div>
        <Text className={classes.bio}>
          {user.bio}
        </Text>
        <div className={classes.footer}>
          <Text className={classes.info}>
					  <img
						  src={GithubLogo}
							className={classes.icon}
						  alt=""
						/>
						{user.login}
					</Text>
          <Text className={classes.info}>
					  <img
						  src={Building}
							className={classes.icon}
							alt=""
						/>
						{user.company}
					</Text>
          <Text className={classes.info}>
  				  <img
						  src={UserGroup}
							className={classes.icon}
							alt=""
						/>
						{user.followers}
						<Text>followers</Text>
					</Text>
        </div>
      </div>
    </Card>
  )
}
