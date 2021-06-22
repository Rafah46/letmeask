import { Button } from "./components/Button";
import { CounterButton } from "./components/CounterButton";

function App() {
	return (
		<div>
			<Button text="Botão 1" />

			<CounterButton />
			<CounterButton />
			<CounterButton />
			<CounterButton />
		</div>
	);
}

export default App;
