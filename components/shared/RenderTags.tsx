import React from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
interface Props {
	_id: number
	name: string
	totalQuestions?: number
	showCount?: boolean
}

const RenderTags = ({ _id, title, totalQuestions, showCount }: Props) => {
	return (
		<Link href={`/tag/${_id}`} className="flex justify-between gap-2">
			<Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
				{title}
			</Badge>

			{showCount && (
				<div className="small-medium text-dark500_light700">
					{totalQuestions}+
				</div>
			)}
		</Link>
	)
}

export default RenderTags
