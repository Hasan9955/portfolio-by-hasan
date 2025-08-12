// components/ProjectCard.tsx
import { personalData } from '@/utils/data/personal-data';
import Image from 'next/image';
import Link from 'next/link';

//  relative  w-full
const ProjectCard = ({ project }) => {
  return (
    <div className="w-full mx-auto from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37] overflow-hidden p-6 md:flex gap-6 text-white">

      <div className="w-full md:w-1/2 relative group overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:border-hidden"> 
        <div className="relative w-full h-56 md:h-full"> 
          <Image
            src={project.photo}
            alt="ProjectImg"
            fill
            className="absolute top-0 left-0 w-full h-full object-top object-cover transition duration-300 ease-in-out group-hover:blur-sm group-hover:scale-105"
          />

          {/* Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 shadow-lg btn btn-outline"
            >
              🔗 Live Preview
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h2 className="text-2xl font-bold text-[#16f2b3] mb-2">{project.name}</h2>
          <p className="text-white mb-4">
            {project.description}
          </p>
          <div className="mb-4">
            <h3 className="font-semibold text-amber-300">🛠️ Tools Used:</h3>
            <ul className="list-disc list-inside text-white text-sm mt-1">
              <li>{project.tools.frontend}</li>
              <li>{project.tools.backend}</li>
              <li>{project.tools.others}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          <Link href={project.liveLink} target="_blank">
            <button className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-4 py-2 rounded-xl">
              🔗 Live Site
            </button>
          </Link>
          <Link href={project.frontendLink} target="_blank">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl">
              💻 Frontend
            </button>
          </Link>
          <Link href={project.backendLink} target="_blank">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl">
              🗄️ Backend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;





















// @flow strict

// import * as React from 'react';

// function ProjectCard({ project }) {

//   return (
//     <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
//       <div className="flex flex-row">
//         <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//         <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//       </div>
//       <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
//         <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
//           <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
//         </div>
//         <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
//           {project.name}
//         </p>
//       </div>
//       <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//         <code className="font-mono text-xs md:text-sm lg:text-base">
//           <div className="blink">
//             <span className="mr-2 text-pink-500">const</span>
//             <span className="mr-2 text-white">project</span>
//             <span className="mr-2 text-pink-500">=</span>
//             <span className="text-gray-400">{'{'}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//             <span className="text-gray-400">{`'`}</span>
//             <span className="text-amber-300">{project.name}</span>
//             <span className="text-gray-400">{`',`}</span>
//           </div>

//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className=" text-white">tools:</span>
//             <span className="text-gray-400">{` ['`}</span>
//             {
//               project.tools.map((tag, i) => (
//                 <React.Fragment key={i}>
//                   <span className="text-amber-300">{tag}</span>
//                   {
//                     project.tools?.length - 1 !== i &&
//                     <span className="text-gray-400">{`', '`}</span>
//                   }
//                 </React.Fragment>
//               ))
//             }
//             <span className="text-gray-400">{"],"}</span>
//           </div>
//           <div>
//             <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
//             <span className="text-orange-400">{project.role}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div className="ml-4 lg:ml-8 mr-2">
//             <span className="text-white">Description:</span>
//             <span className="text-cyan-400">{' ' + project.description}</span>
//             <span className="text-gray-400">,</span>
//           </div>
//           <div><span className="text-gray-400">{`};`}</span></div>
//         </code>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;