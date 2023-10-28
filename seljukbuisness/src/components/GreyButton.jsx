import { useState } from "react";

const GreyButton = () => {
	const [hover, setHover] = useState(false);
	return (
		<div className="w-fit h-fit">
			<div
				className={`w-[199px] h-[53px] bg-[#6884FD] blur-[22px] relative top-[53px] z-0 transition-opacity ease-linear duration-200 ${
					hover ? "opacity-100" : "opacity-0"
				}`}
			></div>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className="w-[199px] cursor-pointer relative z-10 text-[26px] font-semibold h-[53px] flex justify-center items-center bg-[#6884FD] text-white rounded-[3px] hover:shadow-[22px] shadow-[#6884FD]"
			>
				BOOK NOW
			</div>
		</div>
	);
};

export default GreyButton;
