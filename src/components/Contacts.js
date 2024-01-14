import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contacts() {
  return (
    <div
      className="h-auto flex flex-col items-start lg:gap-20 gap-8 py-7"
      id="contact"
    >
      <p className="text-md font-semibold uppercase text-lightest-black underline dark:text-white">
        Get in touch
      </p>
      <div className="w-full flex justify-evenly lg:flex-row flex-col px-4 gap-8">
        <div className="contact-info">
          <FaLocationDot className="row-span-2 text-2xl " />
          <span>Location</span>
          <p>Pinagbuhatan, Philippines</p>
        </div>
        <div className="contact-info">
          <BsFillTelephoneFill className="row-span-2 text-2xl" />
          <span>Contact</span>
          <p>+63 (960) 446 6352</p>
        </div>
        <div className="contact-info">
          <MdEmail className="row-span-2 text-2xl" />
          <span>Email</span>
          <p>taalredickjake@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
