import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import RenderTags from './RenderTags'
const RightSideBar = () => {
	const hotQuestion = [
		{
			id: '1',
			title:
				' Would it be appropriate to point out an error in another paper during a referee report?',
		},
		{ id: '2', title: 'How can an airconditioning machine exist?' },
		{ id: '3', title: 'Interrogated every time crossing UK Border as citizen' },
		{ id: '4', title: 'Low digit addition generator' },
		{
			id: '5',
			title: "What is an example of 3 numbers that do not make up a vector?' ",
		},
	]
	const PopularTags = [
		{ id: '1', title: 'Javascript', totalQuestions: '2054' },
		{ id: '1', title: 'React', totalQuestions: '2054' },
		{ id: '1', title: 'next', totalQuestions: '2054' },
		{ id: '1', title: 'Typescript', totalQuestions: '2054' },
		{ id: '1', title: 'Vuejs', totalQuestions: '2054' },
	]

	return (
		<section className="background-light900_dark200 light-border sticky top-0 left-0 flex h-screen flex-col  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[330px] custom-scrollbar max-xl:hidden">
			<div className="mb-4">
				<h1 className="h3-bold text-dark200_light900">Hot Network</h1>

				{hotQuestion.map((question) => {
					return (
						<Link
							href={`/question/${question.id}`}
							className="flex my-6 cursor-pointer items-center justify-between gap-7"
							key={question.id}
						>
							<p className="text-xs text-dark500_light700">{question.title}</p>
							<Image
								src="/assets/icons/arrow-right.svg"
								alt="Right"
								width={16}
								height={16}
								className="invert-colors"
							/>
						</Link>
					)
				})}
			</div>
			<div>
				<h1 className="h3-bold text-dark200_light900 mb-4">Popular Tags</h1>
				<div className="flex  flex-col gap-4">
					{PopularTags.map((tag) => {
						return (
							<RenderTags
								_id={tag.id}
								title={tag.title}
								totalQuestions={tag.totalQuestions}
								key={tag.id}
								showCount
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default RightSideBar
