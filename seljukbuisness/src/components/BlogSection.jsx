import BlogCard from "./BlogCard";

const BlogSection = () => {
	return (
		<div className="w-[1340px] h-[822px] pl-[79px] pr-[72px] pt-[18px] pb-[37px] bg-white mt-[106px]">
			<div className="w-fit mx-auto">
				<h2 className="self-stretch relative z-[1] text-[#373737] text-[61px] font-bold">
					Blog
				</h2>
				<img
					src="/blogunderline.svg"
					alt="underline"
					className="self-stretch relative bottom-4 z-0"
				/>
			</div>
			<p className="mb-[40px] text-[#7B7B7B] text-[21px] text-center">
				Encuentra los artículos relacionados a tu sector y entérate de las
				ultimas noticias.
			</p>
			<div className="flex gap-[42px]">
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</div>
		</div>
	);
};

export default BlogSection;
