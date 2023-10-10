import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
interface MetricProps {
	imgSrc: string
	alt: string
	value: string | number
	title: string
	href?: string
	textStyle?: string
	isAuthor?: boolean
}

const Metric = ({
	imgSrc,
	alt,
	value,
	title,
	href,
	textStyle,
	isAuthor,
}: MetricProps) => {
	const MetricContent = (
		<>
			<Image
				src={imgSrc}
				alt={alt}
				width={16}
				height={16}
				className={`object-contain ${href ? 'rounded-full' : ''}`}
			/>

			<p className={`${textStyle} flex items-center gap-2`}>
				{value}
				<span
					className={`small-regular line-clamp-1 ${
						isAuthor ? 'max-sm:hidden' : ''
					}`}
				>
					{title}
				</span>
			</p>
		</>
	)

	if (href) {
		return (
			<Link href={href} className="flex-center gap-1">
				{MetricContent}
			</Link>
		)
	}

	return <div className="flex-center flex-wrap gap-1">{MetricContent}</div>
}

export default Metric
