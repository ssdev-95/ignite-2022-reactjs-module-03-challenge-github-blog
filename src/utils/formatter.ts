import { formatDistanceToNow } from 'date-fns'

export function formatTimePassed(timestamp:string) {
	return formatDistanceToNow(new Date(timestamp))
}
