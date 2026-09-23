import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import type { ICategory } from "../../interfaces/ICategory";
import { categories } from "../../data/categories";

interface IProps {
  selected: ICategory;
  setSelected: (category: ICategory) => void;
}
export const Select = ({ selected, setSelected }: IProps) => {
  return (
    <div className="w-full max-w-md px-1">
      <Field className="flex items-center gap-3">
        <Label className="text-sm/6 font-medium text-gray-900 whitespace-nowrap">
          Category:
        </Label>

        <div className="relative flex-1">
          <Listbox value={selected} onChange={setSelected}>
            <ListboxButton
              className={clsx(
                "relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-3 text-left text-sm/6 text-gray-900 shadow-sm",
                "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
              )}
            >
              <span className="flex items-center gap-2">
                <img
                  src={selected.logoURL}
                  alt={selected.name}
                  className="size-5 shrink-0 rounded object-contain"
                />
                <span className="block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="size-4 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              className={clsx(
                "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
              )}
            >
              {categories.map((category) => (
                <ListboxOption
                  key={category.id}
                  value={category}
                  className={clsx(
                    "group relative flex cursor-default select-none items-center gap-2 py-2 px-3 text-gray-900",
                    "data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-none",
                  )}
                >
                  <img
                    src={category.logoURL}
                    alt={category.name}
                    className="size-5 shrink-0 rounded object-contain"
                  />
                  <span className="block truncate font-normal group-data-selected:font-semibold">
                    {category.name}
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>
      </Field>
    </div>
  );
};
