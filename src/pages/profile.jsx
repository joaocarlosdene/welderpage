import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-image1.jpeg')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt-20 w-40">
                  <Avatar
                    src="/img/team-5.jpeg"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full border-2 border-sky-500 border-neutral-500"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <Typography variant="h4" color="blue-gray">
                    Joao Carlos Dene
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal mb-16">joaocarlosdene@gmail.com</Typography>
                </div>
              </div>

              
            </div>
            <div className="-mt-4 container space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Limerick, Ireland
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  TIG Welder / Aluminium Welder
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                <Typography className="font-medium text-blue-gray-500">
                  Senai SP - Brazil
                </Typography>
              </div>
            </div>
            <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2 ">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  <p>Greetings! I'm João Carlos Dene, a dedicated TIG Welder with a passion for precision and craftsmanship. 
                    I bring a wealth of experience in welding, including specialized expertise in TIG aluminum welding. 
                    My journey in the welding industry has taken me from Brazil to Ireland.</p><br/>

                  <p>Professional Expertise:</p>

                  <p>Aluminum Welding Specialist: 
                  I am a specialized welding professional responsible for joining and fabricating aluminum components and structures.
                  This role demands a unique set of skills and expertise due to the distinctive properties of aluminum, 
                  including its low melting point, high thermal conductivity, and susceptibility to distortion.</p><br/>

                  <p>In my present position as an Aluminum Welder at Clancy's Radiators in Limerick, Ireland, 
                  my primary duty revolves around the precision welding of aluminum radiators. </p><br/>
                  <p>My responsibilities encompass welding radiators of diverse sizes and types, 
                  with a focus on guaranteeing their structural soundness and operational functionality.</p><br/>

                  Additionally, I have experience welding aluminum bicycle frames and motorcycle wheels, where precision and attention to detail are essential to delivering high-quality results. My experience welding bicycles, wheels and radiators has given me a versatile skill set, attention to detail and a commitment to delivering high quality work. I am confident that my dedication, strong work ethic and commitment to safety align perfectly with your values and expectations.
                </Typography>
                <div className="text-center">

                <Link to="/">
                
                <Button className="p-10" variant="text">Check My Experience <br/> Click Here</Button>
                </Link>
                <Link to="/">
                
                <Button className="p-10" variant="text">Check My Qualification <br/> Click Here</Button>
                </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}

export default Profile;
