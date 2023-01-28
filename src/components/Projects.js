import React from "react";
import home from "../code.webp";
import charity from "../online.jpeg";
import online from "../code2.jpeg";
import inforum from "../code3.png";
function Projects() {
  return (
  <>
    <h2 className='text-5xl py-2 text-center text-indigo-500 font-medium'>My Projects</h2>
    <div className="mx-auto lg:flex lg:flex-wrap">
      <div class="max-w-md mx-auto m-20 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex ">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={charity}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Home Services
            </div>
            <a
              href="https://github.com/chibukasia/home-services-client"
              target={'_blank'}
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Learn more 
            </a>
            <p class="mt-2 text-slate-500">
              A simple way to get your home services done right on time with the right professionals
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto m-20 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={charity}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Charity Management System
            </div>
            <a
              href="https://github.com/chibukasia/online-charity-management-system"
              target={'_blank'}
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Learn more 
            </a>
            <p class="mt-2 text-slate-500">
              A Platform to connect donors and charity organization and collect donations online
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto m-20 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={home}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Inforum
            </div>
            <a
              href="https://github.com/chibukasia/inforum"
              target={'_blank'}
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Learn more
            </a>
            <p class="mt-2 text-slate-500">
              An online Platform where people can share stories, ideas, life events, and many more
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-md mx-auto m-20 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={charity}
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Online Apparel Store
            </div>
            <a
              href="https://github.com/chibukasia/online-apparel"
              target={'_blank'}
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Learn more
            </a>
            <p class="mt-2 text-slate-500">
              A project about an e-commerce platform to sell apparels online
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;
