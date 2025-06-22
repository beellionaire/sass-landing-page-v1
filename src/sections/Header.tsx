import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-1">
        <p className="hidden md:block">Lets Join Us,</p>
        <div className="inline-flex gap-2 items-center">
          <p>Get Started for Free</p>
          <Image
            src="/assets/arrow-right.svg"
            alt="arrow"
            width={20}
            height={20}
            className="inline-flex justify-center items-center cursor-pointer bg-white rounded-full"
          />
        </div>
      </div>
      <div className="p-5">
        <div className="md:w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/logosaas.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1 className="font-bold text-2xl md:hidden">Beel.id</h1>
            <Image
              src="/assets/menu.svg"
              alt="menu"
              width={40}
              height={40}
              className="md:hidden"
            />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#" className="nav-style">
                About
              </a>
              <a href="#" className="nav-style">
                Features
              </a>
              <a href="#" className="nav-style">
                Customers
              </a>
              <a href="#" className="nav-style">
                Updates
              </a>
              <a href="#" className="nav-style">
                Help
              </a>
              <button className="btn-black hover:border-black hover:bg-transparent">Sign In</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
