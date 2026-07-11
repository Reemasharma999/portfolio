import { BoltIcon } from "./icons";

export default function AiPlaceholderCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl2 border-2 border-dashed border-[#d8d3ca] px-8 py-20 text-center">
      <BoltIcon className="mb-4 h-[28px] w-[28px] text-[#a8a29e]" />
      <p className="text-[14px] font-semibold text-[#a8a29e]">Shipping soon</p>
      <p className="mt-2 max-w-sm text-sm text-[#c7c2bc]">
        SpendSense, DocBrain, and ghostjob will land here.
      </p>
    </div>
  );
}
