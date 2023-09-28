import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-spaceGrotesk',
})

export const metadata: Metadata = {
	title: 'Sunday Dev',
	description: 'Where all users can give answer to questions',
	icons: {
		icon: '/assets/images/site-logo.svg',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider
			appearance={{
				elements: {
					formButtonPrimary: 'primary-gradient',
					footerActionLink: 'primary-text-gradient hover:text-primary-500',
				},
			}}
		>
			<html lang="en">
				<body className={` ${inter.variable} ${spaceGrotesk.varible} `}>
					<h1 className="h1-bold">Hello Sandesh</h1>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
