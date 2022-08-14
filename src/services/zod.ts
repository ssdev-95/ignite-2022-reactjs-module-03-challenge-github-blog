import * as zod from 'zod'
export { zodResolver } from '@hookform/resolvers/zod'

export const issuesFormSchema = zod.object({
	query: zod.string()
})

export type IssueFormInput = zod.infer<typeof issuesFormSchema>
