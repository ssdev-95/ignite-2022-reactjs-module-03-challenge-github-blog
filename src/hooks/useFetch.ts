import { useCallback } from 'react'
import { api } from '../services/api'

export type User = {
  login: string
  avatarURL: string
  profileURL: string
  name: string
  company: string
  bio: string
  followers: number
}

export type IssuePreview = {
  id: string
  title: string
  issueNumber: number
  createdAt: string
  body: string
}

export type PostComment = {
  body: string
  author: string
  createdAt: string
  id: number
}

export type FullPost = {
  title: string
  body: string
  comments: PostComment[]
  author: string
  createdAt: string
  repositoryURL: string
}

const user = import.meta.env.VITE_GITHUB_USER
const repo = import.meta.env.VITE_GITHUB_REPO_NAME

export function useFetch() {
  const fetchIssues = useCallback(async (query?: string) => {
    let uri = ''

    if (query) {
      uri = `search/issues?q=${query}%20repo:${user}/${repo}`
    } else {
      uri = `/repos/${user}/${repo}/issues`
    }

    const res = await api.get(uri)

    if (query) {
      return res.data.items.map((item: any) => ({
        id: item.node_id,
        title: item.title,
        issueNumber: item.number,
        body: item.body,
        createdAt: item.created_at,
      })) as IssuePreview[]
    } else {
      return res.data.map((item: any) => ({
        id: item.node_id,
        title: item.title,
        issueNumber: item.number,
        body: item.body,
        createdAt: item.created_at,
      })) as IssuePreview[]
    }
  }, [])

  const fetchIssueComments = useCallback(async (url: string) => {
    const res = await api.get(url)
    return res.data.map((data: Record<string, any>) => ({
      body: data.body,
      author: data.user.login,
      createdAt: data.created_at,
      id: data.id,
    })) as PostComment[]
  }, [])

  const fetchIssueDetails = useCallback(
    async (issueNumber: number) => {
      const res = await api.get(`repos/${user}/${repo}/issues/${issueNumber}`)

      const comments = await fetchIssueComments(res.data.comments_url)

      const issue = {
        title: res.data.title,
        body: res.data.body,
        comments,
        author: res.data.user.login,
        createdAt: res.data.created_at,
        repositoryURL: res.data.html_url.split('/issues/')[0],
      } as FullPost

      return issue
    },
    [fetchIssueComments]
  )

  const fetchUserData = useCallback(async () => {
    const res = await api.get(`users/${user}`)

    return {
      name: res.data.name,
      login: res.data.login,
      avatarURL: res.data.avatar_url,
      profileURL: res.data.html_url,
      company: res.data.company,
      bio: res.data.bio,
      followers: res.data.followers,
    }
  }, [])

  return { fetchIssues, fetchIssueDetails, fetchIssueComments, fetchUserData }
}
