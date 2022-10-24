import MyAvatar from "./Avatar";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const Section1 = () => {
  return (
    <div>
      <div className="py-4 lg:py-8">
        <div className="relative overflow-hidden py-24 px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
          <div className="relative lg:col-span-1">
            <div>
              <MyAvatar />
            </div>
            <p className="text-xl sm:text-5xl font-medium font-yanoneK">
              Hi ! I'm Richard
            </p>
            <p> Lorem, ipsum blablabla</p>
            <a target="_blank" rel="noreferrer" href="https://github.com/RitchB">
              <BsGithub />
            </a>{" "}
            <a target="_blank" rel="noreferrer" href="https://twitter.com/IAmRitchB">
              <BsTwitter />
            </a>{" "}
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/richard-beauregard/">
              <BsLinkedin />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
