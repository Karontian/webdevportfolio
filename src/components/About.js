import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
// import { CardFooter } from 'react-bootstrap';
const features = [
  {
    name: "Age:",
    description: "18 years old",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "name@example.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "India, Earth",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
              I'm driven by a passion for learning and exploration across multiple fields. As a Krav Maga practitioner, 
              I embrace discipline and resilience, traits that shape my approach to both personal and professional challenges. 
              I play several musical instruments, music fuels my creativity, sharpens my ability to think outside the box.
              <br/>
              I am currently diving into automotive mechanics, inspired by a genuine interest in how things work and a desire to expand my technical knowledge. (also to know what's going on with my car when it stops working).
              My professional journey has given me solid experience on both  fields, technical and a customer service, developing a blend of technical know-how and exceptional communication skills.
              <br/>
              For the last 5 years, I’ve been channeling my entrepreneurial mindset into web development, building my skills as a MERN (MongoDB, Express.js, React, Node.js) developer. I thrive on the constant learning and problem-solving that coding demands.
              <br/>
              Whether I’m training, making music, working on engines, or coding, I’m committed to growth and innovation.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8"
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                <a href="https://lfdispatch.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  Frog logistics Aug 2014-Present
                </a>
                <br/>              
                Ops Manager:
                <br/>
                ➢ Business starter in Aug 2014 with one client and a 1980s AMPO/folder mentality.
                Currently serving as Ops Manager for our biggest client combining all the functions I’ve held before
                <br/>
                ➢ Owner of 10% of the company and part of the administrative board (not active administrative
                duties)
                <br/>
                ➢ Created the Driver board, a simple, faulty, local program I created in JS
                shared through LAN to keep track of driver status and needs,.. I programmed this in an effort to improve our
                operation without cost, all knowledge I got was gathered from searching google and StackOverflow for help from 0
                knowledge , this got me into programming.... 
                <br/>
                ➢ Recently finished  working on a new driver Board that I plan to sell to the company and keep
                on my portfolio, you can see it here: 
                    <a href="https://board01-fe.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                      DriverBoard 
                    </a>
                <br/> 
                ➢ Created the operations process from scratch, when I got to this company they
                still printed PDF documents and called the US with a magicJack attached  to their house line. 
                <br/>
                ➢ Bult up the IT infrastructure for the new business, IPPhones, Storage Server
                and VPN, back when you couldnt just buy VPN services. 
                <br/>
                ➢ Top salesman for over 6 years @ sales/dispatch position    
                </p>

                

                <p className="mt-3 list-item list-inside">
                <a href="https://www.linkedin.com/company/reallinx/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  reallinx  Dec 2010 - Nov 2013
                </a>  
                <br/>
                Support Techlead agent:
                <br/>
                ➢ Lead their support team VoIP branch, attended technical escalations from support lvl1 agents,
                WAN/LAN and IPVoice support cases arriving on our support line or email.
                <br/>
                ➢ TechLead for the support team
                <br/>
                ➢ Lab Admin
                <br/>
                ➢ Support provided included: Email, WLAN/LAN, IPVoice, DNS, NetGear Security Systems, Multi-vendor CPE devices.
                </p>





                <p className="mt-3 list-item list-inside">
                <a href="https://www.itsinfocom.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  ITS Costa Rica Aug 2010 - Dec 2010
                </a>  
                <br/>
                Networking desing Specialist:
                <br/>
                ➢ Design the most efficient and cost effective network for recently built sites at customers premises.
                <br/>
                ➢ Held periodical Admin-tech meetings between the technicians doing the job and management controling the budgets.
                <br/>
                ➢ Held offsite field surveys to know and understand how a solution was going to be affected by the geography or weather
                   conditions in the area specially in the case of wLAN and Satellite solutions.
                <br/>
                </p>


                <p className="mt-3 list-item list-inside">
                <a href="https://www.linkedin.com/company/sykes-costa-rica/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  Sykes LATAM Jan 2007 - June  2010
                </a>  
                <br/>
                Voip Engineer:
                <br/>
                ➢ Held three positions all related to the support of VoIP, first as JR tech, then as SR tech finishing as
                  their Cisco VoIP site technician @ La Aurora Heredia site. Learned accountability, I was responsible for all
                  the equipment and maintenance desitions of a live production callCenter
                <br/>
                ➢ Deployed their Cisco VoIP network, servers, phones, switches,.. all
                (Currently at use @ La Aurora, Heredia) for their field Cisco accounts
                <br/>
                ➢ Held responsibility over a farm of 10 Cisco VoIP IBM servers, their routers, switches and phones 
                <br/>
                ➢ Worked 24/7 365 onCall Attended business down situations and during the whole implementation I worked under “demand hours(NO OT LIMIT)…” until the project got finished.
                <br/>
                ➢ Received and attended foreign staff members coming from the corp US location to maintain our network
                <br/>
                ➢ Among other positions and responsiabilities: Cisco TAC Workload controller, Ciscto TAC LabAdmin, Cisco AVVID Engineer, Cisco ROS support specialist
                </p>
                
                <p className="mt-3 list-item list-inside">
                <a href="https://www.linkedin.com/company/sykes-costa-rica/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  HP La Aurora Jan 2006 - Jan 2007 (First Job)
                </a>  
                <br/>
                ➢ Received electronic cases and routed them based on their location
                <br/>
                ➢ Routed calls based on customer problem description for their printer support  line
                <br/>
                ➢ Developed the MKRS program for printer maintenance in the NJ/NY/CT state area
                <br/>
                ➢ Graduated their online university’s call center team management track




                </p>

              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                
                <p className="mt-3 list-item list-inside">
                ➢ Coding bootcamps finished: 
                <br/>
                -javaScript @  
                <a href="https://teamtreehouse.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  treeHouse.com 
                </a>  
                <br/>
                -SQL essentials @  
                <a href="https://teamtreehouse.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  treeHouse.com 
                </a>  
                <br/>
                -MERN development @  
                <a href="https://codewithmosh.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                  codeWithMosh
                </a>  
                </p>
                <p className="mt-3 list-item list-inside">
                ➢ Coding Skills and tool familiarity:
                <br/>
                  - MERN stack
                  <br/>
                  - SQL
                  <br/>
                  - Responsive webDesing
                  <br/>
                  - FrontEnd frameworks
                  <br/>
                  - RESTful APIs
                  <br/>
                  - gitHub
                  <br/>
                  - VS Code
                  <br/>
                  - Mongoose
                  <br/>
                  - NPM
                  <br/>
                  - Pug
                  <br/>
                  - Chrome devTools
                  <br/>
                  - PostMan

                </p>
                <p className="mt-3 list-item list-inside">
                ➢ Cisco Voice Over Ip Proffesional CCVP @ Cisco learning program CCVP
                </p>
                <p className="mt-3 list-item list-inside">
                ➢ Cisco Networking Engineer program complete @ Universidad Interamericana CCNA
                </p>
                <p className="mt-3 list-item list-inside">
                ➢ Sykes LATAM Customer Service Academy program
                </p>
                <p className="mt-3 list-item list-inside">
                ➢ Hewlett-Packard Customer Care customer advocacy
                </p>
                <p className="mt-3 list-item list-inside">
                ➢ Complete Elementary and Middle School @ La Salle High School
                </p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
