import React, { useContext } from 'react'
import MenuContext from './MenuContext'

const Category = ({ category }) => {
	const { filterItems } = useContext(MenuContext)
	return (
		<button className="filter-btn" onClick={() => filterItems(category)}>
			{category}
		</button>
	)
}

const Categories = () => {
	const { categories } = useContext(MenuContext)
	return (
		<div className="btn-container">
			{categories ? (
				categories.map((category, index) => (
					<Category key={index} category={category} />
				))
			) : (
				<p>Fetching data...</p>
			)}
		</div>
	)
}

export default Categories
