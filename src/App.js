import React from 'react'
import { MenuContextProvider } from './MenuContext'
import Categories from './Categories'
import Menus from './Menus'
function App() {
	return (
		<MenuContextProvider>
			<main>
				<section className="menu section">
					<div className="title">
						<h2>our menu</h2>
						<div className="underline"></div>
					</div>
					<Categories />
					<Menus />
				</section>
			</main>
		</MenuContextProvider>
	)
}

export default App
