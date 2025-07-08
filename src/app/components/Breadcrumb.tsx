type Props = {
  homeLabel: string;
  currentLabel: string;
  SousServiceLabel?: string;   
};

export default function Breadcrumb({ homeLabel, currentLabel, SousServiceLabel }: Props) {
  return (
    <div className="relative flex justify-center w-full mt-2 mb-0.5">
      <span className="breadcrumb-gradient px-4 py-1.5 text-white text-[15px] font-medium flex items-center gap-2 rounded-full relative z-10">
        {homeLabel} <span className="mx-1">&gt;</span> {currentLabel}
        {SousServiceLabel && (
          <>
            <span className="mx-1">&gt;</span> {SousServiceLabel}
          </>
        )}
      </span>
    </div>
  );
}
