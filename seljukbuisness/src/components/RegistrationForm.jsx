import FormInputField from "./FormInputField";

const RegistrationForm = () => {
	return (
		<div className="w-[456px] bg-white shadow-lg p-[30px] flex flex-col items-start gap-[20px] mt-[122px] rounded-[20px]">
			<div className="space-y-[10px]">
				<h2 className="text-[34px] text-[#373737] w-full">Registration Form</h2>
				<p className="self-stretch text-[#7B7B7B] text-[16px]">
					Register your account here{" "}
				</p>
			</div>
			<svg
				width="396"
				height="22"
				viewBox="0 0 396 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect y="10.5" width="186.5" height="1" fill="#CDCDCD" />
				<path
					d="M203.02 11.272C203.02 12.1573 202.908 12.9627 202.684 13.688C202.46 14.4027 202.124 15.0213 201.676 15.544C201.239 16.0667 200.689 16.4667 200.028 16.744C199.377 17.0213 198.62 17.16 197.756 17.16C196.86 17.16 196.081 17.0213 195.42 16.744C194.759 16.456 194.209 16.056 193.772 15.544C193.335 15.0213 193.009 14.3973 192.796 13.672C192.583 12.9467 192.476 12.1413 192.476 11.256C192.476 10.0827 192.668 9.05867 193.052 8.184C193.436 7.30933 194.017 6.62667 194.796 6.136C195.585 5.64533 196.577 5.4 197.772 5.4C198.913 5.4 199.873 5.64533 200.652 6.136C201.431 6.616 202.017 7.29867 202.412 8.184C202.817 9.05867 203.02 10.088 203.02 11.272ZM193.996 11.272C193.996 12.232 194.129 13.0587 194.396 13.752C194.663 14.4453 195.073 14.9787 195.628 15.352C196.193 15.7253 196.903 15.912 197.756 15.912C198.62 15.912 199.324 15.7253 199.868 15.352C200.423 14.9787 200.833 14.4453 201.1 13.752C201.367 13.0587 201.5 12.232 201.5 11.272C201.5 9.832 201.201 8.70667 200.604 7.896C200.007 7.07467 199.063 6.664 197.772 6.664C196.908 6.664 196.193 6.85067 195.628 7.224C195.073 7.58667 194.663 8.11467 194.396 8.808C194.129 9.49067 193.996 10.312 193.996 11.272Z"
					fill="#373737"
				/>
				<rect x="209.5" y="10.5" width="186.5" height="1" fill="#CDCDCD" />
			</svg>
			<FormInputField
				name="mail"
				inputtype="email"
				placeholder="Email"
				labelName="Email"
			/>
			<FormInputField
				name="username"
				inputtype="text"
				placeholder="Username"
				labelName="Username"
			/>
			<FormInputField
				name="password"
				inputtype="password"
				placeholder="Password"
				labelName="Password"
			/>
			<FormInputField
				name="confirmPassword"
				inputtype="password"
				placeholder="Confirm Password"
				labelName="Confirm Password"
			/>
			<button
				type="submit"
				className="h-[44px] text-[16px] text-white py-[10px] px-[32px] self-stretch rounded-[4px] flex items-center justify-center bg-[#D80027] hover:bg-[#D8002750]"
			>
				Registrate
			</button>
			<a
				href="#"
				className="text-[#D80027] items-center justify-center underline w-full flex"
			>
				Olvidé mi contraseña
			</a>
			<svg
				width="396"
				height="22"
				viewBox="0 0 396 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect y="10.5" width="186.5" height="1" fill="#CDCDCD" />
				<path
					d="M203.02 11.272C203.02 12.1573 202.908 12.9627 202.684 13.688C202.46 14.4027 202.124 15.0213 201.676 15.544C201.239 16.0667 200.689 16.4667 200.028 16.744C199.377 17.0213 198.62 17.16 197.756 17.16C196.86 17.16 196.081 17.0213 195.42 16.744C194.759 16.456 194.209 16.056 193.772 15.544C193.335 15.0213 193.009 14.3973 192.796 13.672C192.583 12.9467 192.476 12.1413 192.476 11.256C192.476 10.0827 192.668 9.05867 193.052 8.184C193.436 7.30933 194.017 6.62667 194.796 6.136C195.585 5.64533 196.577 5.4 197.772 5.4C198.913 5.4 199.873 5.64533 200.652 6.136C201.431 6.616 202.017 7.29867 202.412 8.184C202.817 9.05867 203.02 10.088 203.02 11.272ZM193.996 11.272C193.996 12.232 194.129 13.0587 194.396 13.752C194.663 14.4453 195.073 14.9787 195.628 15.352C196.193 15.7253 196.903 15.912 197.756 15.912C198.62 15.912 199.324 15.7253 199.868 15.352C200.423 14.9787 200.833 14.4453 201.1 13.752C201.367 13.0587 201.5 12.232 201.5 11.272C201.5 9.832 201.201 8.70667 200.604 7.896C200.007 7.07467 199.063 6.664 197.772 6.664C196.908 6.664 196.193 6.85067 195.628 7.224C195.073 7.58667 194.663 8.11467 194.396 8.808C194.129 9.49067 193.996 10.312 193.996 11.272Z"
					fill="#373737"
				/>
				<rect x="209.5" y="10.5" width="186.5" height="1" fill="#CDCDCD" />
			</svg>
			<div className="space-y-[10px] flex flex-col justify-center items-center w-full">
				<h3 className="text-[#373737]">¿Aún no tienes una cuenta?</h3>
				<a
					href="#"
					className="text-[#D80027] items-center justify-center underline w-full flex"
				>
					Crea una aquí
				</a>
			</div>
		</div>
	);
};

export default RegistrationForm;
