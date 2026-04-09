import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";

const Home = () => {
 
  return (
    <div className="min-h-screen flex flex-col bg-[#181818] text-white font-serif pt-24 px-4 md:px-14 relative px-4 md:px-14">
      
      <Navbar />

      {/* CONTENT */}
      <div className="flex-1">

        {/* HERO */}
        <div className="mt-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="w-full md:w-[58%]">

            {/* Title */}
            <div className="flex items-center gap-3 mb-4">
              <img src="/Lock.png" alt="logo" className="w-7" />
              <h1 className="text-[30px] text-[#e08a3c] font-medium tracking-wide">
                Open Source Community (OSC)
              </h1>
            </div>

            {/* BOX */}
            <div className="border border-[#e08a3c]/30 px-6 py-5 rounded-xl shadow-[0_0_12px_rgba(224,138,60,0.15)] max-w-[600px] w-full">
              <p className="text-gray-300 text-[17px] leading-8">
                Open Source is more than just code — it is a philosophy built on
                collaboration, transparency, and shared innovation.
                <br /><br />
                At OSC, we empower students and developers to learn, contribute,
                and grow through real open-source projects while building a strong
                community of creators.
              </p>
            </div>
          </div>

          {/* RIGHT (WHEEL) */}
          <div className="w-full md:w-[42%] flex justify-center md:justify-end">
            <img
              src="/Wheel.png"
              alt="wheel"
              className="w-[320px] transition duration-500 hover:rotate-45"
            />
          </div>

        </div>

        {/* WHY */}
        <div className="mt-20 max-w-7xl mx-auto px-2">
          <h2 className="text-[28px] text-[#e08a3c] mb-5">
            Why Open Source ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="border border-[#e08a3c]/30 px-6 py-4 rounded-xl text-[17px] w-full">
              Transparency: Everyone can see how the software works.
            </div>

            <div className="border border-[#e08a3c]/30 px-6 py-4 rounded-xl text-[17px] w-full">
              Collaboration: Developers from around the world contribute together.
            </div>

            <div className="border border-[#e08a3c]/30 px-6 py-4 rounded-xl text-[17px] w-full">
              Innovation: Ideas evolve faster when communities build them collectively.
            </div>

            <div className="border border-[#e08a3c]/30 px-6 py-4 rounded-xl text-[17px] w-full">
              Learning: Students gain real-world experience by contributing to projects.
            </div>

          </div>
        </div>

        {/* COMMITTEES */}
        <div className="mt-24 max-w-7xl mx-auto ">

          <h2 className="text-[28px] text-[#e08a3c] mb-10">
            Our Committees
          </h2>

          <div className="flex flex-col md:flex-row gap-10">

            {/* LEFT */}
            <div className="flex flex-col gap-8 w-full md:w-[50%]">

              <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
                <h3 className="text-[#e08a3c] text-[25px] mb-2">Linux</h3>
                <p className="text-gray-300 text-[18px]">
                  A place for all Linux enthusiasts. We are a group of enthusiastic Linux users who are dedicated to providing a comprehensive guide to the Linux Shell, 
                  from beginner to advanced levels. Our goal is to teach people how to efficiently use the shell.
                  {/* as well as how to become familiar with Git and provide information on various networking concepts and cyber security. */}
                </p>
              </div>

              <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
                <h3 className="text-[#e08a3c] text-[25px] mb-2">Science and Tech</h3>
                <p className="text-gray-300 text-[18px]">
                  Explore the core of Computer science while mastering various Technologies,
                  witness the power of software development and learn how to build powerful software 
                   at science and tech Committe.
                   {/*by collaborating on open source team projects and sharing your knowledge with your colleagues. */}
                </p>
              </div>

              <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
                <h3 className="text-[#e08a3c] text-[25px] mb-2">Game</h3>
                <p className="text-gray-300 text-[18px]">
                  Bringing imagination to interactivity. In the game committee, we try to learn and teach game design,
                  game programming, game art, and game sound design using Godot Game Engine as a tool. 
                  also, we try to develop 2D and 3D games using what we have learned.
                </p>
              </div>

            </div>

            {/* CENTER */}
            <div className="flex flex-col justify-center gap-8 w-full md:w-[20%] items-center ">
              <div className="bg-[#e08a3c] text-black  px-12 py-18   rounded-2xl font-bold text-lg shadow-[0_0_25px_rgba(224,128,60,0.3)]">
                TECHNICAL
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-10 w-full md:w-[50%]">

              <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
                <h3 className="text-[#e08a3c] text-[25px] mb-2">Front-end</h3>
                <p className="text-gray-300 text-[18px]">
                  A creative space for building interactive and user-friendly web interfaces.
                  We focus on modern front-end development using React, emphasizing clean design, 
                  performance, and best practices to bring great user experiences to life.
                </p>
              </div>

              <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
                <h3 className="text-[#e08a3c] text-[25px] mb-2">Back-end</h3>
                <p className="text-gray-300 text-[18px]">
                  The engine behind the web. We specialize in building robust and scalable server-side applications using Node.js,
                  focusing on APIs, databases, and system architecture to power dynamic and secure web solutions.
                </p>
              </div>

              <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
                <h3 className="text-[#e08a3c] text-[25px] mb-2">Flutter</h3>
                <p className="text-gray-300 text-[18px]">
                  Write once, run anywhere. That's who we are, we write code once and this code can be run in Android, 
                  IOS, Web and Desktop using Flutter. Flutter is an open source framework by Google for building beautiful, natively compiled, 
                  multi-platform applications from a single codebase.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* NON TECHNICAL + CREATIVE */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* LEFT */}
        <div className="flex flex-col gap-8 w-full md:w-[50%]">

            <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
            <h3 className="text-[#e08a3c] text-[25px] mb-2">HR</h3>
            <p className="text-gray-300 text-[18px] leading-7">
                Excellent decision makers. Our main responsibilities are interviewing people aspiring to be in our community, 
                making sure they fit for their roles. A HR member joins each committee to make sure that everything is going according to plan, teaching newcomers how to give an interview, 
                have responsibility and be excellent decision makers.
            </p>
            </div>

            <div className="border border-[#e08a3c]/30 p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
            <h3 className="text-[#e08a3c] text-[25px] mb-2">UI/UX</h3>
            <p className="text-gray-300 text-[18px] leading-7">
                Explore the core of Computer science while mastering various Technologies, 
                witness the power of software development and learn how to build powerful software
                at science and tech Committe. 
                </p>
            </div>

        </div>

        {/* CENTER */}
        <div className="flex flex-col justify-center gap-9 w-full md:w-[20%] items-center">

            <div className="bg-[#e08a3c] text-black  px-12 py-14 my-10   rounded-2xl font-bold text-lg shadow-[0_0_25px_rgba(224,128,60,0.3)]">
            NON-TECHNICAL
            </div>

            <div className="bg-[#e08a3c] text-black  px-12 py-14 my-10 rounded-2xl font-bold text-lg shadow-[0_0_25px_rgba(224,128,60,0.3)]">
            CREATIVE
            </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-9 w-full md:w-[50%]">

            <div className="border border-[#e08a3c]/30  p-6 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
            <h3 className="text-[#e08a3c] text-[25px] mb-2">PR</h3>
            <p className="text-gray-300 text-[18px] leading-7">
                The PR Committee represents the community and helps members develop essential soft skills.
                It focuses on enhancing presentation abilities through various techniques, organizing TOT sessions for technical committees, managing event logistics,
                and improving content writing to effectively represent the community on social media.
            </p>
            </div>

            <div className="border border-[#e08a3c]/30 p-6 my--7 rounded-xl max-w-[600px] w-full shadow-[0_0_10px_rgba(224,138,60,0.15)]">
            <h3 className="text-[#e08a3c] text-[25px] mb-2">Blender</h3>
            <p className="text-gray-300 text-[18px] leading-8">
                The engine behind the web. We specialize in building robust and scalable server-side applications using Node.js, 
                focusing on APIs, databases,
                and system architecture to power dynamic and secure web solutions.
            </p>
            </div>

        </div>

        </div>


        {/* MEDIA SECTION */}
        <div className="mt-20 max-w-3xl mx-auto my-20">

        <div className="border border-[#e08a3c]/30 p-6 rounded-xl shadow-[0_0_10px_rgba(224,138,60,0.15)] text-center">
            
            <h3 className="text-[#e08a3c] text-[25px] mb-2">Media</h3>

            <p className="text-gray-300 text-[18px] leading-7">
            Write once, run anywhere. That’s who we are, we write code once and this code
            can be run in Android, IOS, Web and Desktop using Flutter. Flutter is an open
            source framework by Google for building beautiful, natively compiled,
            multi-platform applications from a single codebase.
            </p>

        </div>

        </div>

      </div>

      <Footer/>

    </div>
  );
};

export default Home;