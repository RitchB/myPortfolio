import MyAvatar from "./Avatar";
import { BsGithub, BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="mt-24">
        <div className="relative w-full max-w-3-xl">
          {/* 
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-xl filter opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-24 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply blur-xl filter opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-16 left-8 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply blur-xl filter opacity-70 animate-blob animation-delay-4000"></div>
        */}
          <div>
            <MyAvatar />
          </div>
          <h1 className="text-xl text-4xl font-medium text-stone-600 dark:text-stone-200 antialised font-OverTheRainbow">
            Hi ! I&apos;m{" "}
            <span className="text-6xl font-bold text-cardsboxblue dark:text-cardsboxred antialised font-OverTheRainbow">
              Richard
            </span>
          </h1>
          <p className="mt-4 text-justify text-base text-stone-600 dark:text-stone-200 antialised font-PTSans ">
            {" "}
            I'm working as an actuary 🧑‍💻 since 2008. I'm specialized in
            product development 🏗️ and I'm based in Montreal 🇨🇦. I'm a curious
            person, very interested in web3 development. Co founder of
            PixlBeavers Universe 🦫 . I love writing 📚, videography 🎥 and
            photograpy 📸. There's not enough time in a 24 hours day for my
            curious brain. Et je parle aussi Français.
          </p>
          <div className="mt-6 flex gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/RitchB"
              className="text-github dark:text-stone-200 text-3xl"
            >
              <BsGithub />
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/IAmRitchB"
              className="text-twitter text-3xl"
            >
              <BsTwitter />
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/richard-beauregard/"
              className="text-linkdin text-3xl"
            >
              <BsLinkedin />
            </a>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCocV2OHxALlTVDA3wi7uutw/"
              className="text-youtube text-3xl"
            >
              <BsYoutube />
            </a>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
