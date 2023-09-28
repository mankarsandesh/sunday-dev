'use clients'

import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react'

interface ThemeContextProps {
	mode: string
	setMode: (mode: string) => void
}
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

// Provider Set Theme value in context
export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState('')

	const handleThemChange = () => {
		if (mode === 'dark') {
			setMode('light')
			document.documentElement.classList.add('light')
		} else {
			setMode('dark')
			document.documentElement.classList.add('dark')
		}
	}

	useEffect(() => {
		handleThemChange()
	}, [setMode])
	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

// Use Context
export function useTheme() {
	const context = useContext(ThemeContext)
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
