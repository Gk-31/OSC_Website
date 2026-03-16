function PlaylistCard({ title, link }) {
  return (
    <div className="mb-6 flex flex-col items-start">
      <h3 className="text-2xl text-gray-200 mb-2 font-serif">{title}</h3>

      <a
        href={link}
        className="
          /* Size & Shape */
          w-[300px] h-[60px] rounded-[40px] 
          flex items-center justify-center
          
          /* Colors & Border */
          border border-osc-orange/60 text-osc-orange 
          text-lg transition-all duration-300
          
          /* 1. Inner Shadow (Inset) - 60% opacity */
          shadow-[inset_4px_4px_4px_rgba(246,120,7,0.6)]
          
          /* 2. Drop Shadow (Outer) - 60% opacity */
          /* Syntax: drop-shadow-[x_y_blur_color] */
          drop-shadow-[4px_4px_4px_rgba(246,120,7,0.6)]
          
          /* Interaction */
          hover:bg-osc-orange hover:text-black 
          hover:shadow-none hover:drop-shadow-none
          cursor-pointer
        "
      >
        play list link
      </a>
    </div>
  );
}

export default PlaylistCard;