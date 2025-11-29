import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[url('/Batman.jpg')] w-full bg-cover bg-center bg-no-repeat py-10 px-10 text-white">
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Get in Touch Coloumn */}
        <div className="flex flex-col gap-5 ml-10">
          <div class="flex items-center gap-2">
            <img
              src="/goToTouch.png"
              alt="GoToTouch Logo"
              className="w-6 h-4"
            />
            <div className="text-[20px]">GET IN TOUCH</div>
          </div>
          <div class="flex items-center gap-2 font-inherit text-[14px]">
            <img src="/whatsapp.png" alt="Whatsapp Logo" className="w-6 h-6" />
            <p className="font-bold">Whatsapp:</p>
            <p class="underline">+91 8120860187</p>
          </div>
          <div class="flex items-center gap-2 font-inherit text-[13px]">
            <p className="font-bold">Support:</p>
            <a href="mailto:sahillihas050@gmail.com" className="underline">
              sahillihas050@gmail.com
            </a>
          </div>

          <div className="w-80 border-b-2 border-gray-400 mt-10"></div>

          <div className="flex flex-col gap-2 font-bold mt-10">
            {/* Reach Us Row */}
            <div className="flex items-center gap-2 text-[20px]">
              <img src="/ReachUs.png" alt="Reach Us Logo" className="w-5 h-6" />
              <p>REACH US</p>
            </div>

            {/* Address - aligned left */}
            <div className="flex flex-col items-start gap-1 text-[14px] font-normal mt-2">
              <p>103, Manjunatha Enclave, 1st Main Road</p>
              <p>Murgeshpalya, near HAL main gate</p>
              <p>560017 Bangalore, Karnataka</p>
            </div>
          </div>
        </div>

        {/* Social Column */}
        <div className="flex flex-col gap-5 ml-30">
          <div className="flex items-center gap-2">
            <img src="/socialLogo.png" alt="Social Logo" className="w-6 h-6" />
            <div className="text-[20px]">SOCIAL</div>
          </div>
          <div className="flex items-center gap-5 ml-5 mt-5">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                alt="Instagram Logo"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook.png"
                alt="Facebook Logo"
                className="w-8 h-8"
              />
            </a>
          </div>
          <div className="w-80 border-b-2 border-gray-400 mt-5"></div>
          <div className="flex flex-col gap-5 text-left">
            <div class="flex items-center gap-2">
              <img
                src="/About Us.png"
                alt="About UsLogo"
                className="w-12 h-10"
              />
              <div className="text-[20px]">ABOUT US</div>
            </div>
            <div className="ml-10 flex flex-col gap-2">
              <div className="text-[14px] hover:text-yellow-500">ABOUT US</div>
              <div className="text-[14px] hover:text-yellow-500">
                THE BEGINNING
              </div>
              <div className="text-[14px] hover:text-yellow-500">
                THE INFINITY
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Coloumn */}
        <div className="flex flex-col gap-2 text-left ml-40">
          <div className="flex items-center gap-2 mb-5">
            <img src="/link.png" alt="quick link Logo" className="w-5 h-4" />
            <div className="text-[20px]">QUICK LINK</div>
          </div>
          <div className="text-[14px] hover:text-yellow-500">HOME</div>
          <div className="text-[14px] hover:text-yellow-500">MY ACCOUNT</div>
          <div className="text-[14px] hover:text-yellow-500">CONTACT US</div>
          <div className="text-[14px] hover:text-yellow-500">FAQ</div>
          <div className="text-[14px] hover:text-yellow-500">T&C</div>
          <div className="text-[14px] hover:text-yellow-500">
            PRIVACY POLICY
          </div>
          <div className="text-[14px] hover:text-yellow-500">REFUND POLICY</div>
          <div className="text-[14px] hover:text-yellow-500">
            RETURN AND EXCHANGE POLICY
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
