import React, { useContext } from 'react'
import MenuContext from './MenuContext'
import Menu from './Menu'
const Menus = () => {
	const { menuItems } = useContext(MenuContext)
	const menuItemsElements = menuItems ? (
		menuItems.map((menu) => <Menu key={menu.id} menu={menu} />)
	) : (
		<p>Fetching menus</p>
	)

	return <div className="section-center">{menuItemsElements}</div>
}

export default Menus
