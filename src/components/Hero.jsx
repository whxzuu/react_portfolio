// import content
import { content } from "../Content";
import AnimatedText from "./Animated";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-20%] text-[#EAF2FA] font-bold text-5xl">
            {hero.myStartUp}{" "}
            <span className="text-dark_primary">{hero.myNumber}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          {/* intro word */}
          <div>
            <h2 className="text-4xl mb-2 font-semibold">
              {hero.introWord}
              {", "}
              {hero.introSubWord}
            </h2>
            <hr className="w-20 h-1 bg-dark_primary border-2 border-spacing-1 rounded-xl mt-2 mb-6" />
          </div>
          <h1 className="text-5xl font-bold font-Paprika flex flex-wrap">
            <div className=" text-blue-500">{hero.firstName} </div>
            <div>
              {/* Animated Text */}
              <AnimatedText
                text={hero.LastName}
                className="text-dark_primary m-2 ml-4"
                delay={hero.firstName.length * 120 + 500}
                speed={120}
                showCursor={true}
              />
            </div>
          </h1>

          <div className="mb-4 mt-6 max-w-md">
            <p>{hero.descWord}</p>
          </div>
          <br />
          <div className="flex flex-col gap-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-start gap-10 mt-10">
            {/* Tombol dari content.js */}
            <button
              className="btn"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {hero.btnText}
            </button>
            <div className="hidden md:flex">
              <span className="mx-2"></span>
            </div>
            {/* Tombol download CV */}
            <a
              href="/wahyu_budi_prayogo_cv.pdf"
              download="CV-Wahyu-Budi-Prayogo.pdf"
              className="btn bg-dark_primary text-white"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;