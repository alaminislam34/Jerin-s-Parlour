import Banner from "../Banner/Banner";
import ContactForm from "../MessageForm/ContactFrom";
import Services from "../Services/Services";
import TelUs from "../TelUs/TelUs";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <br />
      <br />
      <br />
      <Services />
      <br />

      <TelUs />
      <br />
      <Testimonial />
      <br />
      <ContactForm />
    </div>
  );
};

export default Home;
