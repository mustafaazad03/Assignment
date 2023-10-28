import React from "react";

interface Inputfield {
	name: string;
	labelName: string;
	inputtype: string;
	placeholder: string;
}

const FormInputField = ({
	name,
	labelName,
	inputtype,
	placeholder,
}: Inputfield) => {
	return (
		<div className="space-y-[5px] w-full">
			<label htmlFor={name} className="text-[#373737] text-sm">
				{labelName}
			</label>
			<input
				type={inputtype}
				name={name}
				placeholder={placeholder}
				className="w-full border-[1px] border-[#292929] rounded-[4px] h-[48px] px-[10px] py-[16px] "
			/>
		</div>
	);
};

export default FormInputField;
