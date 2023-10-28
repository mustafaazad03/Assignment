import React from "react";

const BlogCard = () => {
	return (
		<div className="w-[368px] h-[568px] blogshadow bg-white">
			<img
				src="https://s3-alpha-sig.figma.com/img/b04e/966b/55e86a1689facf7b292d53c8bdb40ba3?Expires=1699228800&Signature=V9p4U5rUE~3j0KyO29Hs~EF4WbLFd6if26rj7XUT1Tq6eOx7mnBmk9rEE~F3hhSQgiW~h9C8aAuEpPZjyZBRq-ngTmZNdPLQVyx-LyXfjqZginlWyhbyM1ROwZ2HN1uKCoKfR0FleHVJQpODcVkOBNghGNHOkr3u8~rXZRYjqATjd8vYaVgg8~ab75pqFE3Xrjvdrqd22tJ82E-Q2q7lCMjfwrbmWa0dCY1QDi875zM2efw5irPDs8Zfd1gccPFfhjjKZVURaa-7RY5X9ACIHjd5lZe0pl16cpYyyubFttFCdu~yUfjhiEVXNbHuhyiz0KvUv2ymWhfDqRuKI72vIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
				alt="BlogCard"
				className="w-full h-[221px] object-cover self-stretch"
			/>
			<div className="px-[16px] flex items-start z-10 space-x-3 relative bottom-[23px] w-full">
				<img
					src="https://s3-alpha-sig.figma.com/img/2d58/484d/bf61df8891bedd87e0db3ebb6a1e7d90?Expires=1699228800&Signature=QCHLS17d7QedNpS~IMRe5p7ifptQyDxXxEiNFeKtVudwJiCbyAWluoSYyvXX8r4DRsfLFTb4bMGSs9MT0iuj9h1PEbf~2edQx9YH4kGoRt8S41pSVlbbgJo4f5R8WGTOJyqOpSt3YEMfslN6YQhKCVeaRMm31Ome4w-KiPjb~68uYqxkDron2TXAKMMKLU9x2eoPDJAfD1uu8Sw-9BKDXKetpnNvKjEyXqSRwCqiBLSxJHM0K93dTMidFWP6XLcUmnzD2lqY87Aboie~uNg~ovXe8idhzY5hSzQSwxr0t6YH7U02gA7PrchPIU2FSW3R~U0-JGOFUC31J7enSehE2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					width="45px"
					height="45px"
					alt="profile-photo"
					className="rounded-full border-[2px] border-[#F2F2F2] blogprofilephotoshadow"
				/>
				<div className="pt-[35px] pr-[43px] text-[#373737] w-full">
					<div className="flex items-start space-x-[5px] ">
						<div className="w-[201px]">
							<h3 className="font-bold">Cristian Fernández</h3>
							<p className="text-sm">Derecho penal</p>
						</div>
						<img src="/spanishflag.svg" alt="flag" className="py-[6.25px] " />
					</div>
					<img
						src="/starticon.svg"
						alt="stars and rating"
						className="mt-[5px]"
					/>
				</div>
				<div className="absolute right-[23px] bottom-[-50px] z-10 bg-[#D80027] p-[16.36px] rounded-[10px] w-fit h-fit blogprofilephotoshadow">
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M32.733 7C33.142 7 33.5 7.35795 33.5 7.76704L33.4489 16.1023C33.4489 16.5114 33.142 16.8182 32.733 16.8182H31.0455V16.8693C30.6364 16.8693 30.2784 16.5114 30.2784 16.1023L30.4318 12.3182L30.3295 12.2159L16.0625 26.483C15.9602 26.5852 15.8068 26.6875 15.6534 26.6875C15.4489 26.6875 15.2955 26.5852 15.1932 26.483L14.017 25.3068C13.9148 25.2045 13.8125 25.0511 13.8125 24.8466C13.8125 24.6932 13.9148 24.5398 14.017 24.4375L28.2841 10.1705L28.1818 10.0682L24.3977 10.2216C23.9886 10.2216 23.6818 9.86363 23.6818 9.45454V7.76704C23.6818 7.35795 23.9886 7.05113 24.3977 7.05113L32.733 7ZM29.4091 21.7273C29.8182 21.7273 30.2273 22.1364 30.2273 22.5455V30.7273C30.2273 32.108 29.1023 33.1818 27.7727 33.1818H9.77272C8.39204 33.1818 7.31818 32.108 7.31818 30.7273V12.7273C7.31818 11.3977 8.39204 10.2727 9.77272 10.2727H17.9545C18.3636 10.2727 18.7727 10.6818 18.7727 11.0909V11.9091C18.7727 12.3693 18.3636 12.7273 17.9545 12.7273H10.0795C9.875 12.7273 9.77272 12.8807 9.77272 13.0341V30.4205C9.77272 30.625 9.875 30.7273 10.0795 30.7273H27.4659C27.6193 30.7273 27.7727 30.625 27.7727 30.4205V22.5455C27.7727 22.1364 28.1307 21.7273 28.5909 21.7273H29.4091Z"
							fill="#F2F2F2"
						/>
					</svg>
				</div>
			</div>
			<div className="mx-[16px] space-y-[10px] border-b border-[#D9D9D9] pb-[10px]">
				<h2 className="text-[#373737]  text-lg font-bold">
					Title of blog post
				</h2>
				<p className="text-[#7B7B7B]">
					Etiam volutpat sem vitae erat consectetur tincidunt. Pellentesque
					mattis purus sed odio vehicula, vitae maximus nulla venenatis. Duis
					posuere turpis turpis, nec mollis nulla tincidunt sodales.
				</p>
				<div className="space-x-[10px] flex">
					<div className="w-[84px] h-[22px] rounded-[50px] border border-[#A4A4A4] text-[#7B7B7B] text-sm flex items-center justify-center">
						Pill labels
					</div>
					<div className="w-[84px] h-[22px] rounded-[50px] border border-[#A4A4A4] text-[#7B7B7B] text-sm flex items-center justify-center">
						Pill labels
					</div>
					<div className="w-[84px] h-[22px] rounded-[50px] border border-[#A4A4A4] text-[#7B7B7B] text-sm flex items-center justify-center">
						Pill labels
					</div>
				</div>
			</div>
			<div className="pt-[10px] flex justify-between items-center mx-[16px]">
				<div className="flex items-center space-x-[2.35px]">
					<img src="/Comment.svg" alt="comment" />
					<p className="text-[#7B7B7B]">123</p>
				</div>
				<div className="flex items-center space-x-[2.35px]">
					<img src="/thumbsUp.svg" alt="like" />
					<p className="text-[#7B7B7B]">340</p>
				</div>
				<div className="h-[36px] border-2 border-[#292929] px-[16px] py-[10px] rounded-[4px] space-x-[10px] flex items-center">
					<h3 className="text-sm text-[#373737]">Compartir</h3>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15.1667 13.3333C16.8229 13.3333 18.1667 14.6771 18.1667 16.3333C18.1667 17.9896 16.8229 19.3333 15.1667 19.3333C13.5104 19.3333 12.1667 17.9896 12.1667 16.3333C12.1667 16.0521 12.1979 15.7396 12.2917 15.4583L9.22916 13.5208C8.66666 14.0208 7.94791 14.3333 7.16666 14.3333C5.51041 14.3333 4.16666 12.9896 4.16666 11.3333C4.16666 9.67706 5.51041 8.33331 7.16666 8.33331C7.94791 8.33331 8.66666 8.64581 9.22916 9.17706L12.2917 7.23956C12.1979 6.95831 12.1667 6.64581 12.1667 6.33331C12.1667 4.67706 13.5104 3.33331 15.1667 3.33331C16.8229 3.33331 18.1667 4.67706 18.1667 6.33331C18.1667 7.98956 16.8229 9.33331 15.1667 9.33331C14.3542 9.33331 13.6354 9.02081 13.0729 8.52081L10.0104 10.4583C10.1979 11.0208 10.1979 11.6771 10.0104 12.2396L13.0729 14.1771C13.6354 13.6458 14.3542 13.3333 15.1667 13.3333ZM15.1667 4.83331C14.3229 4.83331 13.6667 5.52081 13.6667 6.33331C13.6667 7.17706 14.3229 7.83331 15.1667 7.83331C15.9792 7.83331 16.6667 7.17706 16.6667 6.33331C16.6667 5.52081 15.9792 4.83331 15.1667 4.83331ZM7.16666 12.8333C7.97916 12.8333 8.66666 12.1771 8.66666 11.3333C8.66666 10.5208 7.97916 9.83331 7.16666 9.83331C6.32291 9.83331 5.66666 10.5208 5.66666 11.3333C5.66666 12.1771 6.32291 12.8333 7.16666 12.8333ZM15.1667 17.8333C15.9792 17.8333 16.6667 17.1771 16.6667 16.3333C16.6667 15.5208 15.9792 14.8333 15.1667 14.8333C14.3229 14.8333 13.6667 15.5208 13.6667 16.3333C13.6667 17.1771 14.3229 17.8333 15.1667 17.8333Z"
							fill="#333333"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
