import { useState } from 'react'
import { api } from '../services/api'
//lol

export type IssuePreview = {
	id:string
	title:string
	issueNumber:number
	createdAt:string
	body:string
}

const user = import.meta.env.VITE_GITHUB_USER
const repo = import.meta.env.VITE_GITHUB_REPO_NAME

export function useFetch() {
	const [issues, setIssues] = useState<IssuePreview[]>([])
	async function fetchIssues(query?:string) {
		let uri = ''

		if(query) {
			uri = `search/issues?q=${query}%20repo:${user}/${repo}`
		} else {
			uri = `/repos/${user}/${repo}/issues`
		}

		const res = await api.get(uri)
		if(query) {
			setIssues(res.data.items.map((item:any) =>({
				id: item.node_id,
				title: item.title,
				issueNumber: item.number,
				body: item.body,
				createdAt: item.created_at
			})))
		} else {
			setIssues(res.data.map((item:any) => ({
				id: item.node_id,
				title: item.title,
				issueNumber: item.number,
				body: item.body,
				createdAt: item.created_at
			})))
		}
	}

	async function fetchIssueDetails(issueNumber:number) {
		const res = await api.get(`repos/${user}/${repo}/issues/${issueNumber}`)
		console.log(res.data)
	}

	return { issues, fetchIssues, fetchIssueDetails }
}
