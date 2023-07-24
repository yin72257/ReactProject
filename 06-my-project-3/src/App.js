import Header from "./components/Header/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
	const [showCart, setShowModal] = useState(false);
	const hideCartHandler = () => setShowModal(false);
	const showCartHandler = () => setShowModal(true);
	return (
		<CartProvider>
			{showCart && <Cart hideCart={hideCartHandler} />}
			<Header onClickCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
