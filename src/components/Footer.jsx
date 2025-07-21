import React from "react";
import {
  FaFacebook,
  FaGitSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">
        IVA 3A Ambodivonkely <span>Ambohimanarina</span>
      </p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <a
          href="https://www.linkedin.com/in/carlos-razanakoto-9013b2342"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/razanakoto-carlos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGitSquare />
        </a>
        <a
          href="https://www.facebook.com/carlos.dev.24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default Footer;
