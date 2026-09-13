import FooterImg from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#edf0f4] text-[#64748b]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-15 pt-10 sm:pt-11 lg:pt-13.75 pb-9 sm:pb-10 lg:pb-11.25 px-4">
        {/* Brand */}
        <aside className="max-w-100 lg:max-w-85 col-span-full lg:col-span-1 flex flex-col items-center text-center sm:items-start sm:text-left">
          <img
            src={FooterImg}
            alt="Dev Stack logo"
            className="w-30 lg:w-25.5 h-auto block mb-3.5 mx-auto sm:mx-0"
          />

          <p className="max-w-75 lg:max-w-82.5 mb-5 text-base leading-relaxed text-[#64748b]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="flex items-center gap-4 lg:gap-4.5">
            <a
              href="#"
              className="text-[#334155] text-base no-underline transition-colors duration-200 hover:text-[#e11d48]"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-[#334155] text-base no-underline transition-colors duration-200 hover:text-[#e11d48]"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-[#334155] text-base no-underline transition-colors duration-200 hover:text-[#e11d48]"
            >
              LinkedIn
            </a>
          </div>
        </aside>

        {/* Product */}
        <nav className="hidden sm:flex flex-col items-start w-full sm:w-auto">
          <h6 className="mb-3 sm:mb-3.75 text-[11px] font-bold tracking-[0.04em] text-[#111827]">
            PRODUCT
          </h6>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Home
          </a>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Technologies
          </a>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Projects
          </a>
        </nav>

        {/* Company */}
        <nav className="hidden sm:flex flex-col items-start w-full sm:w-auto">
          <h6 className="mb-3 sm:mb-3.75 text-[11px] font-bold tracking-[0.04em] text-[#111827]">
            COMPANY
          </h6>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            About
          </a>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Contact
          </a>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Careers
          </a>
        </nav>

        {/* Legal */}
        <nav className="hidden sm:flex flex-col items-start w-full sm:w-auto">
          <h6 className="mb-3 sm:mb-3.75 text-[11px] font-bold text-[#111827]">
            LEGAL
          </h6>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="mb-2 sm:mb-2.5 text-[#64748b] text-base leading-snug no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Terms of Service
          </a>
        </nav>
      </div>

      {/* Bottom */}
      <div className="container mx-auto flex flex-row items-start sm:items-center justify-center sm:justify-between gap-3 min-h-17.5 sm:min-h-20 border-t border-[#edf0f4] px-4 py-5 sm:py-0">
        <p className="m-0 text-[#94a3b8] text-[11px] lg:text-base">
          © {new Date().getFullYear()} Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-4.5 sm:gap-5.5">
          <a
            href="#"
            className="text-[#94a3b8] text-[11px] lg:text-base no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-[#94a3b8] text-[11px] lg:text-base no-underline transition-colors duration-200 hover:text-[#e11d48]"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
