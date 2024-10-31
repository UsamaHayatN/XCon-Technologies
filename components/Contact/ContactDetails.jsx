"use client";
import React from "react";
import Link from "next/link";
import SocialLinks from "../SocialLinks/SocialLinks";
import AWSCertificates from "../AWSCertificates/AWSCertificates";

const ContactDetails = () => {
  return (
    <div className="order-1 flex flex-col justify-center">
      <div className="mb-8 text-left">
        <div className="mx-auto md:mx-0 md:max-w-none">
          <div className="text-5xl">
            Don&apos;t hesitate to{" "}
            <span className="text-customGreen font-bold">Contact Us</span>.
          </div>
        </div>
      </div>
      <div className="text-lg leading-[1.4] lg:text-[21px]">
        <ul className="mt-6 flex flex-col gap-y-8 lg:gap-y-12">
          <li className="flex flex-col gap-y-4 text-2xl font-bold">
            Send us an Email:
            <Link
              href="mailto:askforqoute@xcontechnologies.com"
              className="font-normal leading-loose hover:text-customGreen"
            >
              askforqoute@xcontechnologies.com
            </Link>
          </li>
          <li className="flex flex-col gap-y-4 text-2xl font-bold">
            Give us a call:
            <Link
              href="tel:+1 (504) 369-9609"
              className="font-normal leading-loose hover:text-customGreen"
            >
              +1 (504) 369-9609
            </Link>
          </li>
          <li className="flex flex-col">
            <SocialLinks />
          </li>
          <li>
            <AWSCertificates />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;
