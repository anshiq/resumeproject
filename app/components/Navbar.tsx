'use client'
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { FacebookIcon, GithubIcon } from "lucide-react"
import { NavigationMenuContent,NavigationMenuItem,NavigationMenuLink,NavigationMenuTrigger,NavigationMenuList,navigationMenuTriggerStyle,NavigationMenu,NavigationMenuIndicator,NavigationMenuViewport} from "@/components/ui/navigation-menu"
export default function MenubarDemo(){
  return <>
    <div className="flex flex-row fixed w-full justify-around">
      <div>DevSamah</div>
      <Menubarcom/>
      <div className="flex flex-row gap-3 text-red-900" ><GithubIcon/> <FacebookIcon/></div>
    </div>
  </>
}
function Menubarcom() {
  return (
    <Menubar className="border-none flex bg-red-800">
      <MenubarMenu >
        <MenubarTrigger>
          <a href="/">Home</a>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>About Us</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            History
          </MenubarItem>
          <MenubarItem>
            Mission
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Purpose</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Devatma Science Museum
          </MenubarItem>
          <MenubarItem>
            Highest Meaning of Life
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Shop</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Books 
          </MenubarItem>
          <MenubarItem>
            Ebooks 
          </MenubarItem>
          <MenubarItem>
             Platinum Cookware
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Meditation</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
           Devatma 
          </MenubarItem>
          <MenubarItem>
           Higher Values 
          </MenubarItem>
          <MenubarItem>
          Counselling 
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Publications</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Online Library - English
          </MenubarItem>
          <MenubarItem>
            Online Library - Hindi
          </MenubarItem>
          <MenubarItem>
         Devatma Vision
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Contact Us</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Membership
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
