import { content } from "../Content";

const Hireme = () => {
  const { hireMe } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {hireMe.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {hireMe.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={hireMe.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={hireMe.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{hireMe.para}</p>
            <br />
            {/* <button className="btn bg-dark_primary text-white">
              {hireMe.btnText}
            </button> */}
            <button
              className="btn bg-dark_primary text-white"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {hireMe.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
