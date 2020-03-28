import React, { Component } from 'react';
import Message from './components/Message';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

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
						<ProductsContainer />
						<Message />
						<CartContainer />
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
