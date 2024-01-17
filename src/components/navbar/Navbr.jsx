
const Navbr = () => {
    return (
        <div>
{/* Navbar Starts */}
<nav className="py-6">
  <div className="container mx-auto flex items-center justify-between gap-x-6">
    {/* Logo */}
    <a href="/">
      <img className="h-[40px] rounded-[44px]" src="logo.png" alt="Muktijuddha Smrete Bidya Nikatan" />
    </a>
    {/* Logo Ends */}
  <div className="">
  <a className="px-5 py-2" href="#">Home</a>
  <a className="px-5 py-2 " href="#">All Student </a>

  <a className="px-5 py-2" href="#">All Teacher </a>
  <a className="px-5 py-2 " href="#">About</a>

  </div>
   
    <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">Get Admission</a>
  </div>
</nav>
{/* Navbar Ends */}

            
        </div>
    );
};

export default Navbr;