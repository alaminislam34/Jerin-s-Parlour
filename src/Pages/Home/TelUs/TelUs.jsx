import screen from "../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";

const TelUs = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto flex items-center justify-between *:flex-1">
        <div className="h-[380px] flex justify-center items-center">
          <img className="h-full" src={screen} alt="" />
        </div>
        <div className="flex justify-center items-center h-full w-full p-4 md:p-6">
          <div className="flex flex-col justify-between gap-8 w-11/12 mx-auto md:gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Let us handle your screen{" "}
                <span className="text-primary">Professionally</span>.
              </h1>
              <p className="text-navColor text-justify leading-loose">
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general ipsum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Purus commodo
                ipsum.
              </p>
            </div>
            <div className="flex gap-6 items-end">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
                  500+
                </h1>
                <p>Happy Customer</p>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary">
                  16+
                </h1>
                <p>Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelUs;
