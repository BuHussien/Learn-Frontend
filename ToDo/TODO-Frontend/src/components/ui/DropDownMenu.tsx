import type { ButtonHTMLAttributes } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useSearchParams } from "react-router-dom";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  choices: any[];
}

const DropDownMenu = ({ title, choices }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="relative inline-block text-right">
      <Menu>
        <MenuButton className="inline-flex items-center gap-1 px-3 py-1.5 bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 data-open:bg-rose-100 rounded-lg font-medium text-sm transition-colors shadow-sm focus:outline-none">
          {title}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-44 origin-top-right rounded-lg border border-rose-100 bg-white p-1 text-sm text-gray-700 shadow-lg transition duration-100 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0 z-50"
        >
          {choices.map((choice) => (
            <MenuItem
              as="button"
              className="group flex w-full items-center gap-2 rounded-md px-2 py-1.5 transition-colors data-focus:bg-rose-50 data-focus:text-rose-700"
              name={title}
              value={choice}
              onClick={() => {
                setSearchParams((prev) => {
                  prev.set(String(title), String(choice));
                  return prev;
                });
              }}
            >
              <div className="my-0.5 h-px bg-rose-100" />
              {choice}
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
export default DropDownMenu;
