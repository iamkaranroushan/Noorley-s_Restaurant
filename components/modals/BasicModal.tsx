"use client";

import { useModalStore } from "@/feature/store/useModalStore";

export default function BasicModal() {
  const { type, data, closeModal } = useModalStore();

  if (type !== "basic") return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      
      {/* MODAL BOX */}
      <div
        className="
          pointer-events-auto
          w-[90%] max-w-md
          bg-white
          rounded-xl
          shadow-2xl
          p-6
          relative
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {data?.title || "Basic Modal"}
          </h2>

          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="text-gray-600 text-sm mb-6">
          {data?.message || "This is a simple reusable modal."}
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              console.log("Confirm clicked");
              closeModal();
            }}
            className="px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-gray-900"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}