import React from 'react'
import RenderTags from '../shared/RenderTags'
import { auth } from '@clerk/nextjs'
import Link from 'next/link'
import Metric from '../shared/Metric'
import { getTimestamp, simplifyNumber } from '@/lib/utils'

interface QuestionProps {
	_id: string
	title: string
	tags: {
		_id: string
		name: string
	}[]
	author: {
		_id: string
		name: string
		picture: string
	}
	upvotes: number
	views: number
	answers: Array<object>
	createdAt: date
}
const QuestionCard = ({
	_id,
	title,
	tags,
	author,
	upvotes,
	views,
	answers,
	createdAt,
}: QuestionProps) => {
	return (
		<div className="card-wrapper runded-[10px] p-9 sm:px-11 ">
			<div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-"></div>
			<div>
				<span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
					{getTimestamp(createdAt)}
				</span>
				<Link href={`/question/${_id}`}>
					<h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
						{title}
					</h3>
				</Link>
				{/* if signed in add edit delete actions */}
			</div>

			<div className="mt-3.5 flex flex-wrap gap-2">
				{tags.map((tag) => (
					<RenderTags key={tag._id} _id={tag.id} title={tag.name} />
				))}
			</div>
			<div className="flex-between mt-6 w-full flex-wrap gap-3">
				<Metric
					imgSrc="/assets/icons/avatar.svg"
					alt="users"
					title={`- asked ${getTimestamp(createdAt)}`}
					value={author.name}
					href={`/profile/${author._id}`}
					isAuthor
					textStyle="body-medium text-dark400_light700"
				/>
				<Metric
					imgSrc="/assets/icons/like.svg"
					alt="UpVots"
					title=" Votes"
					value={simplifyNumber(upvotes)}
					textStyle="small-medium text-dark400_light800"
				/>
				<Metric
					imgSrc="/assets/icons/message.svg"
					alt="messages"
					title=" Answers"
					value={simplifyNumber(answers.length)}
					textStyle="small-medium text-dark400_light800"
				/>
				<Metric
					imgSrc="/assets/icons/eye.svg"
					alt="eye"
					title=" Views"
					value={simplifyNumber(views)}
					textStyle="small-medium text-dark400_light800"
				/>
			</div>
		</div>
	)
}

export default QuestionCard
