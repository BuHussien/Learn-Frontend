import { type ReactNode } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({ isOpen, closeModal, title, children }: IProps) {
  return (
    <Dialog open={isOpen} as="div" className="relative z-50 focus:outline-none" onClose={closeModal}>
      <DialogBackdrop className="fixed inset-0 bg-black/30 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel 
            transition 
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            {title && (
              <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                {title}
              </DialogTitle>
            )}
            
            <div className="mt-4">
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
