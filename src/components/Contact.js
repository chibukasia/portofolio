import React from "react";
import phone from "../phone.png";
import email from "../email.png";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div className="py-8 ring-1 ring-slate-900/5 shadow-xl">
      <h3 className="text-5xl py-2 text-center text-indigo-500 font-medium">
        Contact Me
      </h3>
      <div className=" flex flex-wrap">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <div className="shrink-0">
            <img className="h-12 w-12" src={phone} alt="ChitChat Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black">Call</div>
            <p className="text-slate-500">+254710615728</p>
          </div>
        </div>
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={email}
            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">Email</p>
              <p className="text-slate-500 font-medium">
                chibukasianelson@gmail.com
              </p>
            </div>
            <a href="mailto:chibukasianelson@gmail.com" target={'_blank'}>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Message
                </button>
            </a>
          </div>
        </div>
      </div>

      <div className="py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="text-center pt-10">
          <h3 className="text-3xl py-2 underline  text-indigo-500">
            Find Me Social Media{" "}
          </h3>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3">
          <a href="https://twitter.com/chibukasiaNelly" className=" text-blue-500">
            <BsTwitter />
          </a>
          <a href="https://www.linkedin.com/in/nelson-chibukasia" className=" text-blue-500">
            <BsLinkedin />
          </a>
          <a href="https://github.com/chibukasia" className=" text-black-500">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
