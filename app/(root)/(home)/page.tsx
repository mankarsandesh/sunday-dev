import LocalSearchBar from '@/components/shared/search/LocalSearchBar'
import { Button } from '@/components/ui/button'
import Filter from '@/components/shared/Filter'
import Link from 'next/link'
import { HomePageFilters } from '@/constants/filter'
import HomeFilter from '@/components/home/HomeFilter'
import QuestionCard from '@/components/cards/QuestionCard'
import Noresult from '@/components/shared/Noresult'
const questions = [
	{
		_id: 1,
		title: 'Question dshdh dhsidhsidsidjis ',
		tags: [
			{ _id: '1', name: 'Javascript' },
			{ _id: '2', name: 'React' },
			{ _id: '3', name: 'Next' },
		],
		author: {
			_id: 1,
			name: 'Sandesh Mankar',
			picture: 'https://avatars.githubusercontent.com/u/56132780?v=4',
		},
		upvotes: 79327372,
		views: 100000,
		answers: [],
		createdAt: new Date('2021-09-09T09:09:09.000Z'),
	},
	{
		_id: 2,
		title: 'Question 2 dhsidhsidsidjis ',
		tags: [
			{ _id: '1', name: 'Javascript' },
			{ _id: '2', name: 'React' },
			{ _id: '3', name: 'Next' },
		],
		author: {
			_id: 1,
			name: 'Sachin Mankar',
			picture: 'https://avatars.githubusercontent.com/u/56132780?v=4',
		},
		upvotes: 12121212121,
		views: 2816281621721,
		answers: [],
		createdAt: new Date('2021-09-09T09:09:09.000Z'),
	},
]
export default function Home() {
	return (
		<>
			<div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
				<h1 className="h1-bold text-dark100_light900">All Questions</h1>

				<Link href="/ask-question" className="flex justify-end max-sm:w-full">
					<Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
						Ask a Question
					</Button>
				</Link>
			</div>
			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchBar
					route="/"
					iconPosition="right"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for questions"
					otherclasses="flex-1"
				/>
				<Filter
					filters={HomePageFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
					containerClasses="hidden max-md:flex"
				/>
			</div>
			<HomeFilter />
			<div className="mt-4 flex flex-col gap-4">
				{questions.length > 0 ? (
					questions.map((question) => (
						<QuestionCard
							key={question._id}
							_id={question._id}
							title={question.title}
							tags={question.tags}
							author={question.author}
							upvotes={question.upvotes}
							views={question.views}
							answers={question.answers}
							createdAt={question.createdAt}
						/>
					))
				) : (
					<Noresult
						title="There is not question show"
						description="Be the first to break the silence Ask a question and kickstart the
				discussion. our query could be the next big things"
						LinkUrl="/ask-question"
						linkTitle="Ask a Question"
					/>
				)}
			</div>
		</>
	)
}
