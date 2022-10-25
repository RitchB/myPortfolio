import MyAvatar from "./Avatar";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const PresentationSection = () => {
  return (
    <>
      <div className="mt-24">
        <div className="max-w-2xl">
          <div>
            <MyAvatar />
          </div>
          <h1 className="mt-4 text-xl text-4xl font-medium font-CaveatBrush">
            Hi ! I&apos;m{" "}
            <span className="font-CaveatBrush text-6xl font-bold dark:text-cardsboxblue text-cardsboxred tracking-wide">
              Richard
            </span>
          </h1>
          <p className="mt-4 font-PTSans text-justify">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PresentationSection;
