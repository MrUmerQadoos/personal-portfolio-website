"use client";
import { useState } from "react";
import BannerLayout from "./BannerLayout";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Fiverr_Icon from "../components/Fiverr_Icon";
import Image from "next/image";
// import Footer from "../components/Footer";
import { Modal } from "antd";
import Link from "next/link";

// Define the interface for the contact props
interface ContactProps {
  // You can add any props that you need for your component here
}

// Annotate the contact component with React.FC and pass the interface as a generic parameter
const SideContact: React.FC<ContactProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">Pakistan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Peshawar</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Company:</span>
                <span className="text-LightGray md:text-sm">CodeWorthy</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  iosamajavaid@gmail.com
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="text-LightGray text-sm">reachOsama</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">
                  +92 (315) 9591822
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          {/* Use the next/link component to optimize the links for performance and SEO */}
          <Link href="" passHref={true}>
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in-out duration-700"
            > */}
            <HiMail />
            {/* </a> */}
          </Link>

          <Link href="[1](https://github.com/osamajavaid)" passHref={true}>
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in-out duration-700"
            > */}
            <FaGithub />
            {/* </a> */}
          </Link>

          <Link
            href="[2](https://www.linkedin.com/in/iosamajavaid/)"
            passHref={true}
          >
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in-out duration-700"
            > */}
            <FaLinkedin />
            {/* </a> */}
          </Link>

          <Link href="[3](https://x.com/iosamajavaid)" passHref={true}>
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in-out duration-700"
            > */}
            <FaTwitter />
            {/* </a> */}
          </Link>

          {/* Use the next/image component to optimize the image */}
          <Link href="[4](https://www.fiverr.com/codeworthy)" passHref={true}>
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in-out duration-700 hidden sm:block"
            > */}
            {/* <Image src={Fiverr_Icon} alt="Fiverr Icon" />  */}
            {/* </a> */}
          </Link>

          <Link href="#" passHref={true}>
            {/* <a
              target="_blank"
              rel="noreferrer"
              className="hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1"
            > */}
            <SiUpwork />
            {/* </a> */}
          </Link>
        </div>

        <div className="my-12 w-full h-auto text-Snow">
          <h1 className="text-lg font-bold">Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <div>
              <div className="flex flex-col w-full">
                <div className="userIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none"
                  >
                    <HiUser />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Name"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="mailIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none"
                  >
                    <HiMail />
                  </div>
                  <input
                    type="text"
                    className="input_stylings"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="textIcon relative mb-6">
                  <div
                    id="icon"
                    className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none"
                  >
                    <BsChatTextFill />
                  </div>
                  <textarea
                    rows={6}
                    cols={50}
                    className="input_stylings"
                    placeholder="Message"
                  />
                </div>
              </div>

              <div className="my-4">
                <button onClick={() => setIsOpen(true)} className="button">
                  {" "}
                  SEND MESSAGE{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* success modal */}
      <Modal
        className="card_stylings backdrop-blur-3xl drop-shadow-2xl"
        // wrapClassName='bg-red-800'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-Green font-bold text-2xl">In Progress</h1>
          {/* <a
            target="_blank"
            href="[5](https://github.com/osamajavaid/portfolio)"
            rel="noreferrer"
            className="underline text-Snow"
          > */}
          Be the one to integrate this!
          {/* </a> */}
        </div>
      </Modal>
      {/* <Footer /> */}
    </BannerLayout>
  );
};

export default SideContact;
