import { Description, Field, Label, Textarea } from '@headlessui/react'
import clsx from 'clsx'

interface IProps{
    className?: string;
}
const TextArea = (props: IProps) => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-zinc-900">Description</Label>
        <Description className="text-sm/6 text-zinc-500">This will be shown under the product title.</Description>
        <Textarea
          className={clsx(
            'mt-3 block w-full resize-y rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-zinc-900',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-black/25'
          )}
          rows={5}
        />
      </Field>
    </div>
  );
};

export default TextArea;
