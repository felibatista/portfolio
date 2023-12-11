import { ContainerItems } from "./container-items";
import { MenuTrigger } from "./menu-trigger";

export function Navbar() {
  return (
    <nav className="flex justify-end py-4 my-8 items-center">
      <ContainerItems/>
      <MenuTrigger/>
    </nav>
  );
}
