import React, { useState, useEffect, createContext } from 'react'

const MenuContext = createContext()

export function MenuContextProvider({ children }) {
	const [items, setItems] = useState([])
	const [menuItems, setMenuItems] = useState(null)
	const [categories, setCategories] = useState(null)

	const fetchItems = async () => {
		const response = await fetch('http://localhost:5000/menu')
		const data = await response.json()
		setItems(data)
		setMenuItems(data)
		setCategories(['all', ...new Set(data.map((item) => item.category))])
	}

	useEffect(() => {
		fetchItems()
	}, [])

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items)
			return
		}
		const newItems = items.filter((item) => item.category === category)
		setMenuItems(newItems)
	}

	return (
		<MenuContext.Provider value={{ categories, menuItems, filterItems }}>
			{children}
		</MenuContext.Provider>
	)
}

export default MenuContext
