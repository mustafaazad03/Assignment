import { useState } from "react";

const GradientButton = () => {
	const [hover, setHover] = useState(false);
	return (
		<div className="w-fit h-fit">
			<div
				className={`w-[199px] h-[53px] bg-gradient-to-r from-[#2FDFEC] via-[#45B0F4] via-[#6272FF] to-[#F646E5]  blur-[22px] relative top-[53px] z-0 transition-opacity ease-linear duration-200 ${
					hover ? "opacity-100" : "opacity-0"
				}`}
			></div>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className="w-[199px] cursor-pointer relative z-10 text-[26px] font-semibold h-[53px] flex justify-center items-center bg-gradient-to-r from-[#2FDFEC] via-[#45B0F4] via-[#6272FF] to-[#F646E5] text-white rounded-[3px] hover:shadow-[22px] shadow-[#6884FD]"
			>
				BOOK NOW
			</div>
		</div>
	);
};

export default GradientButton;
