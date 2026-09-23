import { Description, Field, Input as HeadlessInput, Label } from '@headlessui/react'
import clsx from 'clsx'

interface IProps {
  label: string;
  type: string;
  placeholder?: string;
  description?: string;
  className?: string;
}

const Input = ({ className, label, placeholder, type, description }: IProps) => {
  return (
    <div className={clsx("w-full max-w-md px-4", className)}>
      <Field>
        <Label className="text-sm/6 font-medium text-zinc-900">{label}</Label>
        
        {description && (
          <Description className="text-sm/6 text-zinc-500">{description}</Description>
        )}

        <HeadlessInput
          type={type}
          placeholder={placeholder}
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-zinc-900',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25'
          )}
        />
      </Field>
    </div>
  );
};

export default Input;
