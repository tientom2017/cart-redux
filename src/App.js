import React, { Component } from 'react';
import Message from './components/Message';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Cart from './components/Cart';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
				<Header />
				<main id="mainContainer">
					<div className="container">
						{/* Products */}
						<Products />
						{/* Message */}
						<Message />
						{/* Cart */}
						<Cart />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
