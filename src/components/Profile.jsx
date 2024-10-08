import React from 'react';
import { FaReact, FaNodeJs, FaAndroid } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFlutter,
} from 'react-icons/si';
import {
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

function Profile() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-12">
      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">
          L Shiva Kumar Reddy
        </h1>
        <h2 className="text-md md:text-xl text-gray-400 mb-6">UI Developer</h2>

        <div className="mb-6">
          <h3 className="text-md md:text-lg font-semibold mb-2">
            Current stack
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <SiTypescript
              className="text-2xl icon-hover"
              data-icon="typescript"
            />
            <FaReact className="text-2xl icon-hover" data-icon="react" />
            <SiNextdotjs className="text-2xl icon-hover" data-icon="next" />
            <SiTailwindcss
              className="text-2xl icon-hover"
              data-icon="tailwind"
            />
            <FaNodeJs className="text-2xl icon-hover" data-icon="node" />
            <SiExpress className="text-2xl icon-hover" data-icon="express" />
            <SiFlutter className="text-2xl icon-hover" data-icon="flutter" />
            {/* <SiReactnative
              className="text-2xl icon-hover"
              data-icon="reactnative"
            /> */}
            <FaAndroid className="text-2xl icon-hover" data-icon="android" />
          </div>
        </div>

        <div>
          <h3 className="text-md md:text-lg font-semibold mb-2">
            Currently learning
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <SiAmazonaws className="text-2xl icon-hover" data-icon="aws" />
            <SiDocker className="text-2xl icon-hover" data-icon="docker" />
            <SiKubernetes
              className="text-2xl icon-hover"
              data-icon="kubernetes"
            />
            <SiJenkins className="text-2xl icon-hover" data-icon="jenkins" />
            {/* <SiTerraform
              className="text-2xl icon-hover"
              data-icon="terraform"
            />
            <GiArtificialIntelligence
              className="text-2xl icon-hover"
              data-icon="ai"
            /> */}
          </div>
        </div>
      </div>
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img
          src="https://avatars.githubusercontent.com/u/25147932?v=4"
          alt="Profile"
          className="rounded-lg mx-auto w-40 md:w-60"
        />
      </div>
    </div>
  );
}

export default Profile;
