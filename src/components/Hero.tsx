import { HeroProps } from "@/lib/type";

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={className}>
      <figure>
        <img
          src="https://cdn.pixabay.com/photo/2020/04/25/01/36/road-5089188_1280.jpg"
          alt="hero1"
        />
      </figure>
    </div>
  );
};

export default Hero;
