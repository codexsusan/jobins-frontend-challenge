const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[26px] h-[73px]">
      <h1 className="font-bold text-[24px] leading-[22px] text-[#23272E]">
        Dashboard
      </h1>
      <div className="flex items-center">
        <button className="mr-4 relative">
          <svg
            width="27"
            height="26"
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2734 5.41667C11.2734 4.22005 12.2435 3.25 13.4401 3.25C14.6367 3.25 15.6068 4.22005 15.6068 5.41667C18.142 6.61543 19.8086 9.11543 19.9401 11.9167V15.1667C20.1054 16.5325 20.9096 17.7387 22.1068 18.4167H4.77344C5.97064 17.7387 6.77477 16.5325 6.9401 15.1667V11.9167C7.07159 9.11543 8.73825 6.61543 11.2734 5.41667"
              stroke="#4B465C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.2734 5.41667C11.2734 4.22005 12.2435 3.25 13.4401 3.25C14.6367 3.25 15.6068 4.22005 15.6068 5.41667C18.142 6.61543 19.8086 9.11543 19.9401 11.9167V15.1667C20.1054 16.5325 20.9096 17.7387 22.1068 18.4167H4.77344C5.97064 17.7387 6.77477 16.5325 6.9401 15.1667V11.9167C7.07159 9.11543 8.73825 6.61543 11.2734 5.41667"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1904 18.418V19.5013C10.1904 21.2962 11.6455 22.7513 13.4404 22.7513C15.2354 22.7513 16.6904 21.2962 16.6904 19.5013V18.418"
              stroke="#4B465C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.1904 18.418V19.5013C10.1904 21.2962 11.6455 22.7513 13.4404 22.7513C15.2354 22.7513 16.6904 21.2962 16.6904 19.5013V18.418"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            4
          </span>
        </button>
        <button className="relative w-[38px] h-[38px] rounded-full bg-[#7367F0] flex items-center justify-center text-white font-semibold focus:outline-none">
          <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
