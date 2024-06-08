import { GiGraduateCap } from "react-icons/gi";
import { BsBriefcaseFill } from "react-icons/bs";
function Content() {
  return (
    <div className='max-w-4xl px-10 py-6 mx-auto bg-white'>
        <div className="mb-6">
            <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
                profile
            </h2>
            <div className="">
            <p className="text-lg font-light leading-8 text-gray-700">
            Driven and enthusiastic Web Developer with a strong  passion for creating exceptional web experiences. Experienced in manual testing, test automation, tracking, tools, and A/B testing.
            Quick leaners, team player, and effective communicator. Proficient in Continous Delivery toools. Familiar with Python and Django.
        </p>
            </div>
        </div>
        <div className="">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
    <BsBriefcaseFill /> professional experience
    </h2>
    <div className="grid grid-cols-2 gap-6 mb-6 place-items-center">
        <div className="">
            <p className="">
                March 2019 - Present <br />
                Mountain View, California
            </p>
        </div>
        <div className="">
            <p className="text-lg font-light leading-snug text-gray-700">
                Accomplished Web Developer with a passion for crafting high-quality web applications. Demonstrated expertise in manual and automated testing, tracking and analytics tools, and A/B testing methodologies. Recognized for quick learning, effective teamwork, and clear communication. Highly proficient in Continuous Delivery tools and experienced with Python and Django.
            </p>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-6 place-items-center">
        <div className="">
            <p className="">
                May 2018 - Feb 2019 <br />
                Mary Hill, New York
            </p>
        </div>
        <div className="">
            <p className="text-lg font-light leading-snug text-gray-700">
                Spearheaded the development of a high-traffic web application that boosted user engagement by 25%. Led a team of developers in implementing innovative A/B testing strategies, resulting in a 20% increase in conversion rates. Streamlined the deployment process by integrating Continuous Delivery tools, significantly reducing deployment time. Adept in using Python and Django to develop robust back-end solutions.
            </p>
        </div>
    </div>
        </div>
        <div className="">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
    <GiGraduateCap /> education
    </h2>
    <div className="grid grid-cols-2 gap-6 mb-6 place-items-center">
        <div className="">
                <p className="text-xl font-light font-gray-700">
                    2014 September -
                2018 June
                </p> 
            </div>
            <div className="">
                <p className="text-lg font-medium text-gray-700">
                    Bachelor of Science in Computer Science,
                    San Francisco Bay University
                </p>
            </div>
    </div>
    <div className="mb-6">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
        certificate
        <span className=""></span>
    </h2>
    <div className="grid grid-cols-3 gap-4">
    <span className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        CCNA
    </span>
    <span className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        AWS Solutions Architect
    </span>
    <span className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        Google Technical Support
    </span>
    <span className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        Project Management
    </span>
    <span className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        Python
    </span>
    <span className="flex items-center">
        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        Web Development
    </span>
</div>

    </div>
    <div className="">
    <h2 className="mb-3 text-4xl font-bold text-gray-800 uppercase">
        skills
    </h2>
    <div className="">
        <ul className="grid grid-cols-3 pl-5 list-disc">
            <li className="text-xl text-gray-700">HTML & CSS</li>
            <li className="text-xl text-gray-700">JavaScript</li>
            <li className="text-xl text-gray-700">React.js</li>
            <li className="text-xl text-gray-700">Node.js</li>
            <li className="text-xl text-gray-700">Express.js</li>
            <li className="text-xl text-gray-700">MongoDB</li>
            <li className="text-xl text-gray-700">RESTful APIs</li>
            <li className="text-xl text-gray-700">Version Control (Git)</li>
            <li className="text-xl text-gray-700">Responsive Design</li>
            <li className="text-xl text-gray-700">Testing & Debugging</li>
            <li className="text-xl text-gray-700">Django</li>
            <li className="text-xl text-gray-700">Python</li>
        </ul>
    </div>
</div>

    </div>
        </div>
  )
}

export default Content