const Navbar = () => {
  return (
    
    <div className="flex gap-[120px] items-center">
    <img className="cursor-pointer h-[100px]" src="./images/Logo.png"></img>

    <ul className="bg-[#FFF6F6] bg-opacity-30 rounded-full flex gap-[50px] px-[30px] py-4">
        <li className="cursor-pointer ">Home</li>
        <li className="cursor-pointer ">Our Services</li>
        <li className="cursor-pointer ">Find Doctor</li>
    </ul>
    </div>
  )
}

export default Navbar