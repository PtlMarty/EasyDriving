import { HeroProps } from "@/lib/type";

//TODO: add dynamique image
//TODO: add hover, transition, etc.

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={`relative rounded-xl ${className}`}>
      <img
        src="https://cdn.pixabay.com/photo/2020/04/25/01/36/road-5089188_1280.jpg"
        alt="hero1"
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <p className="text-2xl font-bold mb-4">Welcome to my website</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
