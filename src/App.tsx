import './App.css'
import { SiJavascript, SiPython, SiReact, SiTailwindcss, SiSpringboot, SiTypescript, SiFlask, SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function App() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[40%_60%]">
      {/* Left Sidebar / Nav Column */}
      <div className="lg:sticky lg:top-24 lg:self-start px-10">
        <div className="text-left mb-8">
          <p className='text-sm mb-1'>Hi, I'm...</p>
          <h1 className="text-5xl font-bold text-white mb-2">Ocean Yu</h1>
          <p className="text-gray-300 text-base font-bold">Aspiring Full Stack Developer</p>
        </div>
        <nav className="space-y-4 text-left">
          <a href="#about" className="block text-gray-300 hover:text-white">About</a>
          <a href="#education" className="block text-gray-300 hover:text-white">Education</a>
          <a href="#projects" className="block text-gray-300 hover:text-white">Projects</a>
          <a href="#technical-skills" className="block text-gray-300 hover:text-white">Technical Skills</a>
        </nav>
        <div className="flex flex-wrap gap-6 mt-8">
          <a href="https://github.com/oceanyu1" target='_blank'
            rel='noopener noreferrer' 
            className="flex items-center text-gray-300 hover:text-teal-400 transition-colors">
            <SiGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/oceanyu" target='_blank'
            rel='noopener noreferrer' 
            className="flex items-center text-gray-300 hover:text-teal-400 transition-colors">
            <SiLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/oceanyu_/#" target='_blank'
            rel='noopener noreferrer' 
            className="flex items-center text-gray-300 hover:text-teal-400 transition-colors">
            <SiInstagram size={30} />
          </a>
          <a href="mailto:oceanyuu@gmail.com" 
            className="flex items-center text-gray-300 hover:text-teal-400 transition-colors">
            <MdOutlineEmail size={40} />
          </a>
        </div>
      </div>

      {/* Right Content - Natural flow */}
      <div className='px-10 lg:py-[68px]'>
        {/* About Section */}
        <section id="about" className='text-white text-left mb-10'>
          <p className='text-gray-300 leading-relaxed mb-4'>
            I'm an aspiring developer passionate about building full stack web applications that solve real-world problems. I enjoy backend work the most,
            specifically designing databases and rest APIs, and have experience with frontend frameworks like React. 
          </p>
          <p className='text-gray-300 leading-relaxed mb-4'>
            I'm currently working towards my Honours Bachelor of Science in Computer Science with a specialization in AI/ML at Carleton University.
            Outside of class, I spend my time exploring new technologies and building projects to apply what I've learned.
          </p>
          <p className='text-gray-300 leading-relaxed mb-4'>
            Currently, I'm focusing on strengthening my web development knowledge (specifically Springboot), learning more about software architecture and deployment, and I've 
            recently taken an interest in machine learning. I'm eager to contribute, grow, and collaborate with others, whether it's through internships, 
            open-source contributions, or team projects. I'm excited for the path ahead!
          </p>

          <p className='text-gray-300 leading-relaxed'>
            In my free time, I enjoy 
            <a 
            className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300' 
            href='https://open.spotify.com/user/powergameruuu?si=a3064aa16e2b4de5'
            target='_blank'
            rel='noopener noreferrer'> listening to music</a>, 
            <a 
            className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300' 
            href='https://hevy.com/user/weavure'
            target='_blank'
            rel='noopener noreferrer'> weightlifting</a>, and lowrolling in <a 
            className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300' 
            href='https://lolchess.gg/profile/na/SMELLYFARTS-6969/set15'
            target='_blank'
            rel='noopener noreferrer'>TFT</a>.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className='text-white text-left mb-10'>
          <h2 className='text-2xl font-semibold mb-6'>Education</h2>
          <div className='border-l-4 border-teal-500 pl-6'>
            <h3 className='text-xl font-medium'>Carleton University</h3>
            <p className='text-sm text-gray-300'>B.C.S. Honours Computer Science - GPA: 11.8/12 • Sept 2024 - Present</p>
            <p className='text-sm text-gray-300 mt-2'>Specialization in AI/ML. Relevant coursework: Data Structures, Algorithms, Systems, Operating Systems.</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className='text-white text-left mb-10'>
          <h2 className='text-2xl font-semibold mb-6'>Projects</h2>

          <div className='grid gap-6 mb-4 border-teal-500 border-1 rounded'>
            <a 
              href="https://ravensrate.ca" 
              target="_blank"
              rel="noopener noreferrer"
              className='group block bg-[#212529] p-4 sm:p-6 rounded-lg hover:bg-gray-800 text-sm transition-colors duration-200'
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div className="flex-1">
                  <h3 className='text-xl font-medium mb-2'>RavensRate</h3>
                  <p className='text-gray-300 mb-4'>
                    A course review platform for Carleton students to browse courses, share experiences, and see feedback on difficulty, workload, 
                    and overall rating.
                  </p>
                  <p className='text-gray-300 mb-4'>
                    Achieved 400+ unique visitors, 1000+ page views, and 10+ course reviews in the first week post-launch, maintaining a 40% bounce rate.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='bg-teal-800 text-teal-300 px-3 py-1 rounded text-sm'>React</span>
                    <span className='bg-teal-800 text-teal-300 px-3 py-1 rounded text-sm'>Springboot</span>
                    <span className='bg-teal-800 text-teal-300 px-3 py-1 rounded text-sm'>PostgreSQL</span>
                  </div>
                </div>

                {/* Arrow SVG */}
                <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 self-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-6 h-6 text-teal-300 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className='grid gap-6 mb-4 border-teal-500 border-1 rounded'>
            <a 
              href="https://github.com/oceanyu1/planttionary" 
              target="_blank"
              rel="noopener noreferrer"
              className='group block bg-[#212529] p-4 sm:p-6 rounded-lg hover:bg-gray-800 text-sm transition-colors duration-200'
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div className="flex-1">
                  <h3 className='text-xl font-medium mb-2'>Planttionary</h3>
                  <p className='text-gray-300 mb-4'>
                    A Flask-based web application that identifies plants using the Plant.id API and displays detailed botanical information.
                  </p>
                  <p className='text-gray-300 mb-4'>
                    Includes a gallery of past submissions, secure file handling, and a demo mode for public deployment.
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    <span className='bg-teal-800 text-teal-300 px-3 py-1 rounded text-sm'>Flask</span>
                    <span className='bg-teal-800 text-teal-300 px-3 py-1 rounded text-sm'>Plant.id API</span>
                    <span className='bg-teal-800 text-teal-300 px-3 py-1 rounded text-sm'>HTML/CSS</span>
                  </div>
                </div>

                {/* Arrow SVG */}
                <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-4 self-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-6 h-6 text-teal-300 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Technical Skills Section */}
        
        <section id="technical-skills" className='text-white text-left mb-16'>
          <h2 className='text-2xl font-semibold mb-6'>Technical Skills</h2>
          <div className='flex flex-wrap gap-6'>
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <FaJava size={40} />
              <span className='text-sm mt-1'>Java</span>
            </div>
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <SiJavascript size={40} />
              <span className='text-sm mt-1'>JavaScript</span>
            </div>
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <SiPython size={40} />
              <span className='text-sm mt-1'>Python</span>
            </div>
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <SiTypescript size={40} />
              <span className='text-sm mt-1'>Typescript</span>
            </div>
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <SiSpringboot size={40} />
              <span className='text-sm mt-1'>Springboot</span>
            </div>     
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <SiReact size={40} />
              <span className='text-sm mt-1'>React</span>
            </div>
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <SiTailwindcss size={40} />
              <span className='text-sm mt-1'>Tailwind</span>
            </div>                   
            <div className='flex flex-col items-center text-gray-300 hover:text-teal-400 transition-colors'>
              <SiFlask size={40} />
              <span className='text-sm mt-1'>Flask</span>
            </div>
          </div>
        </section>

        <footer className='text-left text-sm text-gray-400'>
          <p>Heavily inspired by <a 
            className='font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300' 
            href='https://brittanychiang.com/'
            target='_blank'
            rel='noopener noreferrer'> Brittany Chiang's</a> portfolio. Built with ❤️ using React and Tailwind CSS, deployed on Vercel.</p>
        </footer>
      </div>
    </div>
  )
}

export default App