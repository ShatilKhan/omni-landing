import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
          <div className="flex items-center justify-between py-8 border-t border-gray-800/30">
            <div className="flex items-center gap-12">
              <Logo />
              <div className="flex items-center gap-8">
                <div className="text-sm text-indigo-200/65">
                  <span className="font-medium text-gray-200">Business</span><br />
                  <a href="mailto:faruk@anchorblock.vc" className="hover:text-indigo-500 transition">faruk@anchorblock.vc</a>
                </div>
                <div className="text-sm text-indigo-200/65">
                  <span className="font-medium text-gray-200">Contact</span><br />
                  <a href="tel:+8801623000792" className="hover:text-indigo-500 transition">+880 1623-000792</a>
                </div>
                <div className="text-sm text-indigo-200/65">
                  <span className="font-medium text-gray-200">Our Office</span><br />
                  <span>House No. 432, Road 6, Avenue 5, Mirpur DOHS, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-sm text-indigo-200/65">
                © {new Date().getFullYear()} omnizen.ai. All rights reserved.
              </p>
              <ul className="flex items-center gap-4">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://x.com/OmniZen_AI"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://www.linkedin.com/company/omnizen-ai/"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-5 w-5 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z M12,25c0,0.6-0.4,1-1,1H7c-0.6,0-1-0.4-1-1V13 c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1V25z M9,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S10.7,11,9,11z M26,25c0,0.6-0.4,1-1,1h-3 c-0.6,0-1-0.4-1-1v-3.5v-2.9c0-2-0.8-3.1-2.3-3.1S16,18.6,16,20.6v4.4c0,0.6-0.4,1-1,1h-3c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h4 c0.6,0,1,0.4,1,1v0.8c0.8-0.8,2.2-1.8,4.3-1.8c3.5,0,5.7,2.4,5.7,7.4V25z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
}
