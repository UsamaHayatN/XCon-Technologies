import React, { useState, useRef } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import sendContactForm from "@/lib/api";

const initValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};
const initState = {
  isLoading: false,
  error: "",
  values: initValues,
  showAlert: null,
}; // Added showAlert

const ContactForm = () => {
  const formRef = useRef(null);
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error, showAlert } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handlePhoneChange = (phone) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        phone,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isLoading: true, error: "" }));

    try {
      // Log the values and recipient email
      console.log("Form Data:", values);
      console.log("Recipient Email:", values.email); // Log the recipient email

      await sendContactForm(values); // Pass form values to API function
      setTouched({});
      setState({ ...initState, showAlert: "success" });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message || "An unexpected error occurred",
        showAlert: "error",
      }));
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleOkayClick = () => {
    setState((prev) => ({
      ...prev,
      showAlert: null,
    }));
  };

  return (
    <section id="contact" className="py-10 bg-gray-100">
      <div className="global-container">
        {showAlert && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-10 max-w-md w-full mx-auto relative">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/img_placeholder/Dark Logo.png"
                  alt="Company Logo"
                  width={100}
                  height={40}
                  className="h-6 w-auto mb-4"
                />
                {showAlert === "success" && (
                  <div className="text-green-600 text-lg font-bold text-center mb-4">
                    Thank you! We will get back to you as soon as possible.
                  </div>
                )}
                {showAlert === "error" && (
                  <div className="text-red-600 text-lg font-bold text-center mb-4">
                    Something went wrong. Please try again.
                  </div>
                )}
                <button
                  onClick={handleOkayClick}
                  className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Right Block */}
        <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/img_placeholder/Dark Logo.png"
              alt="Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-5"
          >
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-name"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Adam Smith"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-email"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-phone"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Phone Number
                </label>
                <PhoneInput
                  country={"pk"}
                  placeholder="Enter phone number"
                  value={values.phone}
                  onChange={handlePhoneChange}
                  containerClass="w-full relative"
                  inputStyle={{
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    fontWeight: "bold",
                    color: "black",
                    outline: "none",
                    transition: "all 0.2s ease-in-out",
                    fontSize: "16px",
                    height: "65px",
                    width: "100%",
                  }}
                  dropdownStyle={{
                    borderRadius: "10px",
                    border: "1px solid #d1d5db",
                    zIndex: 1000,
                    marginTop: "5px",
                    position: "absolute",
                    left: "0",
                    top: "100%",
                    backgroundColor: "white",
                  }}
                  enableSearch={true}
                  buttonStyle={{
                    borderRadius: "50%",
                    border: "1px solid #d1d5db",
                    backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    marginLeft: "4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  // Apply hover effect to dropdown items
                  dropdownClass=" hover:text-customGreen"
                />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <label
                  htmlFor="contact-company"
                  className="text-lg font-bold leading-[1.6]"
                >
                  Your Business
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={values.company}
                  onChange={handleChange}
                  placeholder="Your Business"
                  className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="contact-services"
                className="text-lg font-bold leading-[1.6]"
              >
                Services
              </label>
              <select
                name="service"
                id="service"
                value={values.service}
                onChange={handleChange}
                className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Worpress">Worpress</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="SEO">SEO </option>
                <option value="Consultancy">Consultancy</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-[10px]">
              <label
                htmlFor="contact-message"
                className="text-lg font-bold leading-[1.6]"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:font-normal placeholder:text-slate-500 focus:border-customGreen"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-[10px] bg-customGreen px-6 py-[15px] text-white font-bold"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
