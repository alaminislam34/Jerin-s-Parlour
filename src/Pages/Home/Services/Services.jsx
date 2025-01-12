import cart1 from "../../../assets/icons/Group 1373.png";
import cart2 from "../../../assets/icons/Group 1372.png";
import cart3 from "../../../assets/icons/Group 1374.png";

const Services = () => {
  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Our Awesome <span className="text-primary">Services</span>
      </h1>
      <br />
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-center items-center p-6 text-center hover:scale-105 hover:shadow-2xl duration-300 shadow-lg rounded-lg flex-col space-y-2">
          <img src={cart1} alt="service" className="w-20" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
            Anti Age Face Treatment
          </h1>
          <p className="text-primary font-bold">$109</p>
          <p>
            We craft stunning and amazing web UI, using a well drrafted UX to
            fit your product.
          </p>
        </div>
        <div className="flex justify-center items-center p-6 text-center hover:scale-105 hover:shadow-2xl duration-300 shadow-lg rounded-lg flex-col space-y-2">
          <img src={cart2} alt="service" className="w-20" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
            Hair Color & Styleing
          </h1>
          <p className="text-primary font-bold">$109</p>
          <p>
            Amazing flyers, social media posts and brand representations that
            would make your brand stand out.
          </p>
        </div>
        <div className="flex justify-center items-center p-6 text-center hover:scale-105 hover:shadow-2xl duration-300 shadow-lg rounded-lg flex-col space-y-2">
          <img src={cart3} alt="service" className="w-20" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
            Skin Care Treatment
          </h1>
          <p className="text-primary font-bold">$109</p>
          <p>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
      </div>
      <br />
      <div className="my-6 flex justify-center items-center">
        <button className="py-2 px-4 bg-primary rounded-md text-white">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Services;
