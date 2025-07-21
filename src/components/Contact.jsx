import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div
      className="flex justify-center my-5 h-full sm:h-[70vh] items-center"
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
              <h1 className="text-4xl sm:text-5xl text-white">
                Contactez<span>-moi</span>
              </h1>
              <p className="text-normal text-lg font-medium text-gray-200 mt-2">
                Connectons-nous sur LinkedIn <br /> Envoyez-moi un e-mail
              </p>
              {/* <div className='flex items-center mt-2 text-gray-400'>
                                <AiOutlineMail className='w-12 h-12 mr-2 text-blue-400' />
                                    <p className='mt-3 text-xl'>Razanakoto Carlos</p>
                            </div> */}
              <a
                href="mailto:razanakotocarlos24@gmail.com"
                rel="noopener noreferrer"
                className="flex items-center mt-2 text-gray-400 hover:text-blue-500 transition-colors duration-300 cursor-pointer"
              >
                <AiOutlineMail className="w-12 h-12 mr-2 text-blue-400" />
                <p className="mt-3 text-xl">razanakotocarlos24@gmail.com</p>
              </a>
            </div>
            <form
              action="https://getform.io/f/bnlxddxb"
              className="p-6 flex flex-col justify-center max-w-[700px]"
              method="post"
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nom complet"
                  className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Adresse e-mail"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
              </div>
              <div className="flex flex-col mt-2">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="md:w-100 bg-primary-color text-white py-3 px-6 rounded-lg mt-3"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
