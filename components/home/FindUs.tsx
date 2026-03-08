export default function FindUs() {
  return (
    <div className="flex flex-col md:flex-row w-full h-[500px]">
      {/* Left: Map with inner rounded border */}
      <div className="flex-1 h-[250px] md:h-auto relative border-8 border-black overflow-hidden">
        {/* Inner rounded container */}
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10034.614024650195!2d-114.0437154!3d51.04102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53715f1f9f592b47%3A0x68cc26d02a0b884e!2sNorley&#39;s%20Authentic%20Colombian%20Street%20Food!5e0!3m2!1sen!2sin!4v1772903477511!5m2!1sen!2sin"
            className="w-full h-full "
            allowFullScreen
            loading="lazy"
          />
      </div>

      {/* Right: Restaurant Info */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start bg-black px-8 py-6 text-center md:text-left">
        <div className="flex items-center mb-2 text-stone-400 text-sm sm:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
          <span>Find us at</span>
        </div>

        <h3 className="text-[clamp(1.5rem,4vw,3rem)] sm:text-[clamp(2rem,5vw,3.5rem)] font-extrabold mb-4 text-white">
          Norley's Authentic Colombian Street Food
        </h3>

        <p className="text-[clamp(1rem,3vw,1.8rem)] sm:text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-snug text-stone-400">
          1314b 9 Ave SE,
          <br />
          Calgary, AB T2G 0T3,
          <br />
          Canada
        </p>
      </div>
    </div>
  );
}