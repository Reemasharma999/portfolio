import { BoltIcon } from "./icons";

export default function AiPlaceholderCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl2 border-2 border-dashed border-[#d8d3ca] px-8 py-20 text-center">
      <span
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px]"
        style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}
      >
        <BoltIcon className="h-6 w-6" />
      </span>
      <p className="text-lg font-semibold text-[#a8a29e]">Shipping soon</p>
      <p className="mt-2 max-w-sm text-sm text-[#c7c2bc]">
        SpendSense, DocBrain, and ghostjob will land here.
      </p>
    </div>
  );
}
