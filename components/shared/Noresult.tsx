import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
interface Props {
	title: string
	description: string
	LinkUrl: string
	linkTitle: string
}

const Noresult = ({ title, description, LinkUrl, linkTitle }: Props) => {
	return (
		<div className="mt-10 flex w-full flex-col items-center justify-center">
			<Image
				src="/assets/images/light-illustration.png"
				alt="No result"
				width={270}
				height={200}
				className="block object-contain dark:hidden"
			/>
			<Image
				src="/assets/images/dark-illustration.png"
				alt="No result"
				width={270}
				height={200}
				className="hidden object-contain dark:flex"
			/>
			<h2 className="h2-bold text-dark200_light900">{title}</h2>
			<p className="body-regular text-dark500_700 my-3.5 max-w-md text-center">
				{description}
			</p>
			<Link href={LinkUrl}>
				<Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
					{linkTitle}
				</Button>
			</Link>
		</div>
	)
}

export default Noresult
