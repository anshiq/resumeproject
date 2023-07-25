import Dropdownmenu from "./component/Dropdownmenu";
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
      <div className="flex flex-col">
        <div id="left" className="w-[20%] overflow-scroll pl-2 h-screen bg-black">
          <div className="flex my-2 w-[95%] text-white flex-col bg-black">
            <button className="bg-white p-6 w-full mx-auto text-black">
              {" "}
              + New Item
            </button>
          </div>
          {DropDownMenu}
        </div>
      </div>
    </>
  );
}
