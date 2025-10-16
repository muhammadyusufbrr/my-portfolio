const page = () => {
  return (
    <section className="py-11">
      <div className="flex flex-col items-start gap-[81px]">
        <div>
          <p className="text-[#90A1B9] font-[450] text-lg">Hi all. I am</p>
          <h1 className="text-[#F8FAFC] text-[62px] leading-[100%] font-[450]">
            Muhammadyusuf Gulomov
          </h1>
          <span className="text-[#615FFF] text-[32px] leading-[100%]">
            {"> Front-end developer"}
          </span>
        </div>
        <div className="flex items-start flex-col gap-2 text-base font-medium">
          <span className="text-[#90A1B9]">
            {"// complete the game to continue"}
          </span>
          <span className="text-[#90A1B9]">
            {"// find my profile on Github:"}
          </span>
          <div className="flex items-center gap-2.5">
            <span className="text-[#615FFF]">const</span>
            <span className="text-[#00D5BE]">githubLink</span>
            <span className="text-[#F8FAFC]">=</span>
            <a
              className="text-[#FFA1AD] underline"
              href="https://github.com/muhammadyusufbrr"
            >
              “https://github.com/muhammadyusufbrr”
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default page;
