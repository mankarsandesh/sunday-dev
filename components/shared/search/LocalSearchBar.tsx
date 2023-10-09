'use client'

import Image from 'next/image'
import { Input } from '@/components/ui/input'
import React from 'react'

interface CustomInputProps {
	route: string
	iconPosition: 'left' | 'right'
	imgSrc: string
	placeholder: string
	otherclasses?: string
}

const GlobalSearch = ({
	route,
	iconPosition,
	imgSrc,
	placeholder,
	otherclasses,
}: CustomInputProps) => {
	return (
		<div
			className={` background-light800_darkgradient  flex  min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherclasses}`}
		>
			{iconPosition === 'left' && (
				<Image
					src="/assets/icons/search.svg"
					alt="search"
					width={24}
					height={24}
					className="cursor-pointer"
				/>
			)}

			<Input
				type="text"
				placeholder={placeholder}
				value=""
				onChange={() => {}}
				className="paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400 border-none shadow-none outline-none"
			/>
			{iconPosition === 'right' && (
				<Image
					src="/assets/icons/search.svg"
					alt="search"
					width={24}
					height={24}
					className="cursor-pointer"
				/>
			)}
		</div>
	)
}

export default GlobalSearch
