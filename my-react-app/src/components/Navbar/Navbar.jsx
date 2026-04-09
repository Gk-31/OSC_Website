import { Link, useLocation } from "react-router-dom";
const Navbar = () => 
{
  const location = useLocation();


  // useEffect(() => {
  //   const root = document.documentElement;

  //   if (isLight) {
  //     root.classList.add("light");
  //   } else {
  //     root.classList.remove("light");
  //   }
  // }, [isLight]); 
  ;


  const linkStyle = (path) =>
    `px-4 py-1 rounded-full border border-[#fa9b46]/50 transition ${
      location.pathname === path
        ? "bg-[#fa9b46] text-black shadow-[0_0_10px_rgba(250,155,70,0.6)]"
        : "text-[#fa9b46] hover:bg-[#fa9b46] hover:text-black hover:shadow-[0_0_10px_rgba(250,155,70,0.6)]"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-5 bg-[#181818]">

      <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-4 text-sm md:text-base">
        <Link to="/" className={linkStyle("/")}>Home</Link>
        <Link to="/playlists" className={linkStyle("/playlists")}>Playlists</Link>
        <Link to="/recruit" className={linkStyle("/recruit")}>Recruit</Link>
        <Link to="/committees" className={linkStyle("/projects")}>Projects</Link>
        <Link to="/events" className={linkStyle("/events")}>Events</Link>
       

      </div>    
      <div className="flex items-center gap-3">
        <img src="/Lock.png" alt="logo" className="w-7" />
        <h1 className="text-xl md:text-2xl text-[#fa9b46] font-bold">
          OSC
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;