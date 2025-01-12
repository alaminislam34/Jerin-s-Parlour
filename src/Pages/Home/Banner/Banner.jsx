import banner from "../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

const Banner = () => {
  return (
    <div className="w-full bg-[#FFF8F5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row *:flex-1 gap-6 items-center md:h-[70vh] py-6 px-4">
        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="text-[#666666] text-justify leading-loose">
            Beauty salmon is perfect for every woman, offering nourishing
            benefits for skin, hair, and overall wellness with its rich
            nutrients.
          </p>
          <div>
            <button className="py-2 px-4 md:px-6 bg-primary text-white rounded-md">
              Get an Appointment
            </button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <img className="h-full" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
