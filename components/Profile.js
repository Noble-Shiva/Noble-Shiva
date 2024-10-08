import { FaReact, FaNodeJs, FaFlutter, FaAndroid } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiReactnative } from 'react-icons/si';
import { SiAmazonaws, SiDocker, SiKubernetes, SiJenkins, SiTerraform } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

function Profile() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold mb-2">Your Name</h1>
        <h2 className="text-xl text-gray-400 mb-6">JavaScript Developer</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Current favorite stack</h3>
          <div className="flex space-x-4">
            <SiTypescript className="text-2xl icon-hover" data-icon="typescript" />
            <FaReact className="text-2xl icon-hover" data-icon="react" />
            <SiNextdotjs className="text-2xl icon-hover" data-icon="next" />
            <SiTailwindcss className="text-2xl icon-hover" data-icon="tailwind" />
            <FaNodeJs className="text-2xl icon-hover" data-icon="node" />
            <SiExpress className="text-2xl icon-hover" data-icon="express" />
            <FaFlutter className="text-2xl icon-hover" data-icon="flutter" />
            <SiReactnative className="text-2xl icon-hover" data-icon="reactnative" />
            <FaAndroid className="text-2xl icon-hover" data-icon="android" />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Currently learning</h3>
          <div className="flex space-x-4">
            <SiAmazonaws className="text-2xl icon-hover" data-icon="aws" />
            <SiDocker className="text-2xl icon-hover" data-icon="docker" />
            <SiKubernetes className="text-2xl icon-hover" data-icon="kubernetes" />
            <SiJenkins className="text-2xl icon-hover" data-icon="jenkins" />
            <SiTerraform className="text-2xl icon-hover" data-icon="terraform" />
            <GiArtificialIntelligence className="text-2xl icon-hover" data-icon="ai" />
          </div>
        </div>
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0">
        <img src="https://via.placeholder.com/200" alt="Profile" className="rounded-full mx-auto" />
      </div>
    </div>
  );
}

export default Profile;