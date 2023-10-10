'use client'
import React from 'react'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectGroup,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface Props {
	filters: {
		name: string
		value: string
	}[]
	otherClasses?: string
	containerClasses?: string
}

const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
	return (
		<div className={`realtive ${containerClasses}`}>
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a Filter" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{filters.map((item) => (
							<SelectItem value={item.value}>{item.name}</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

export default Filter
