import Image from "next/image";
import Link from "next/link";
import xConLogo from "../../public/assets/img_placeholder/Dark Logo.png";
import Marquee from "react-fast-marquee";
import "swiper/swiper-bundle.css";
import AWSCertificates from "../AWSCertificates/AWSCertificates";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer_01 = () => {
  return (
      <footer className="relative z-[1] overflow-hidden bg-colorLinenRuffle  ">
        {/* Footer Top */}
        <div className="py-[10px] xl:pb-[25px] xl:pt-[40px]">
          <Marquee pauseOnHover speed={80} gradient={false}>
            <div className="overflow-hidden">
              <div className="flex w-full items-center mb-3 gap-x-[10px] whitespace-nowrap">
                {/* First Image Icon with space after it */}
                <Image
                    src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                    alt="footer-text-slider-icon"
                    width={60}
                    height={60}
                    className="h-9 w-9 lg:h-[50px] lg:w-[50px] mt-[5px] mx-[10px] "
                />
                <div
                    className="block font-dmSans text-3xl font-bold leading-none -tracking-[2px] text-black lg:text-5xl xl:text-6xl mt-[5px]">
                  Innovative Tech Solutions
                </div>
                <Image
                    src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                    alt="footer-text-slider-icon"
                    width={60}
                    height={60}
                    className="h-9 w-9 lg:h-[50px] lg:w-[50px] mt-[5px]"
                />
                <div
                    className="block font-dmSans text-3xl font-bold leading-none -tracking-[2px] text-black lg:text-5xl xl:text-6xl mt-[5px]">
                  Empowering Business Growth
                </div>
                <Image
                    src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                    alt="footer-text-slider-icon"
                    width={60}
                    height={60}
                    className="h-9 w-9 lg:h-[50px] lg:w-[50px] mt-[5px] mr-2" // Adjusted margin-right here
                />
                <div
                    className="block font-dmSans text-3xl font-bold leading-none -tracking-[2px] text-black lg:text-5xl xl:text-6xl mt-[5px]">
                  Reliable IT Support
                </div>
              </div>
            </div>
          </Marquee>
        </div>

        {/* Footer Center */}
        <div className="global-container ">
          <div className="h-[1px] w-full bg-[#DBD6CF]"/>
          <div className="lg grid grid-cols-1 gap-5 py-[20px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto-auto_1fr] xl:gap-10 xl:py-[30px] pl-6 md:pl-8 lg:pl-10 max-w-[1200px] mx-auto">
            {/* Footer Widget */}
            <div className="flex flex-col gap-y-4 ">
              <Link href="/" className="inline-block">
                <Image
                    src={xConLogo}
                    alt="logo"
                    width={300}
                    height={75}
                    className="h-auto w-full max-w-[150px]"
                />
              </Link>
              <p className="text-lg">
                At XCon Technologies, we’re more than just a software company in the US. We are your partners in
                innovation. Let’s build the future together with cutting-edge IT solutions according to your business
                requirements. Contact us today to transform your software development ideas into reality!
              </p>

              <ul className="mt-2 flex flex-col gap-y-3 w-full">
                {/* Social Media Links */}
                <li className="flex">
                  <SocialLinks/>
                </li>

                {/* AWS Certificates */}
                <li>
                  <div className="flex">
                    <div className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                      <AWSCertificates/>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Footer Widget for Services */}
            <div className="flex flex-col gap-y-4">
              <h4 className="text-[20px] font-semibold capitalize text-black">
                Services
              </h4>
              <ul className="flex flex-col gap-y-[8px] capitalize">
                <li>
                  <Link
                      href="/"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                      href="/"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                      href="/"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                      href="/"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link
                      href="/"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Widget for Utility Pages */}
            <div className="flex flex-col gap-y-4">
              <ul className="flex flex-col gap-y-[8px] capitalize">
                <li>
                  <Link
                      href="/privacy-policy"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                      href="/terms-of-service"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                      href="/about-us"
                      className="transition-all duration-300 ease-linear hover:text-customGreen text-lg"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Subscriber Section */}
          {/* <div className="flex flex-col items-center gap-y-4 mt-[-20px]">
            <h4 className="text-[20px] font-semibold capitalize text-black text-center">
              Subscribe to our newsletter
            </h4>
            <form action="#" method="post">
              <div className="relative h-[40px] max-w-[250px]">
                <input
                    type="email"
                    name="newsletter-email"
                    id="newsletter-email"
                    placeholder="Enter your email"
                    className="py-[10px] h-full w-full rounded-[50px] border-[1px] border-black px-[16px] pr-20 outline-none text-lg"
                    required=""
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 flex h-[30px] w-[30px] -translate-y-1/2 items-center justify-center rounded-full bg-customGreen hover:bg-[#0dbf58] transition-all duration-300 ease-linear"
                >
                  <Image
                      src="/assets/img_placeholder/th-1/send-icon.svg"
                      alt="send"
                      width={14}
                      height={14}
                  />
                </button>
              </div>
            </form>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="bg-colorLinenRuffle py-[10px] text-center">
          <p className="text-[#707070] text-sm">
            &copy; {new Date().getFullYear()} XCON Technologies. All Rights Reserved.
          </p>
        </div>
      </footer>
  );
};

export default Footer_01;
