import Dropdownmenu from "./component/Dropdownmenu";
import Boxes from "./component/Boxes";
export default function Home() {
  const DropdownData = [
    { name: "Dashboard" },
    { name: "Application" },
    { name: "Elements" },
    { name: "Forms" },
    { name: "Plugins" },
    { name: "Datagrid" },
    { name: "Settings" },
  ];
  const DropDownMenu = DropdownData.map((data, index) => {
    return <Dropdownmenu key={index} name={data.name} />;
  });
  return (
    <>
      <div className="w-full bg-black h-8 text-white flex justify-between items-center ">
        {" "}
        <div className="flex flex-row gap-2 items-center justify-center">
          <a href="#"> Home</a>
          <a href="#">Contents </a>
          <a href="#">Catagories</a>
          <a href="#">Setting </a>
        </div>
        <div>
          <a href="#">Anshik Singh</a>
        </div>
      </div>
      <div className=" flex flex-row bg-red-300">
        <div
          id="left"
          className="w-[20%] overflow-scroll pl-2 h-screen bg-black"
        >
          <div className="flex my-2 w-[95%] text-white flex-col bg-black">
            <button className="bg-white p-6 w-full mx-auto text-black">
              {" "}
              + New Item
            </button>
          </div>
          {DropDownMenu}
        </div>
        <div id="right" className="w-[80%] bg-green-50 flex items-center flex-col h-screen">
          <div className="flex flex-row justify-between w-full ">
            <div className="flex flex-row ">
            <div> Add new Item</div>
            <div>Add Content </div>
            <div> Setting</div>
            </div>
            <div className="self-end justify-end relative right-0"> <input type="search"/></div>
          </div>
< Boxes/>
        </div>
      </div>
    </>
  );
}
