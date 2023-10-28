import GradientButton from "./components/GradientButton";
import GreyButton from "./components/GreyButton";
import RegistrationForm from "./components/RegistrationForm";

function App() {
	return (
		<div className="bg-black w-full h-auto">
			<div className="pl-[107px] pt-[142px]">
				<div className="space-x-[96px] flex">
					<GreyButton />
					<GradientButton />
				</div>
				<RegistrationForm />
			</div>
		</div>
	);
}

export default App;
