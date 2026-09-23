import Button from "../ui/Button";
import "./index.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__subtitle">DISCOVER SOMETHING NEW</p>

        <h1 className="hero__title">
          Everything You Need, <span>All in One Place</span>
        </h1>

        <p className="hero__description">
          Explore a wide selection of quality products, great deals, and
          everyday essentials — all in one place.
        </p>

        <Button
          children="Shop Now"
          width="w-fit"
          className="bg-[#c2a789] px-8 py-3.5 rounded-md font-semibold 
             hover:bg-[#c2a777] transition-colors duration-200"
        />
      </div>
    </section>
  );
};

export default Hero;
