import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
}

const FAQItem = ({ question, answer, index, openIndex, toggleFAQ }: FAQItemProps) => {
  return (
    <div
      key={index}
      className={`rounded-xl border ${index === openIndex ? 'bg-[#f7f8f9]' : 'bg-white'} border-[#eaf2f7] p-4`}
    >
      <button
        className="flex items-center w-full text-left"
        onClick={() => toggleFAQ(index)}
      >
        <div
          className={`w-[45px] h-[45px] rounded-[10px] flex items-center justify-center mr-4 ${
            index === openIndex ? 'bg-[#FBD915]' : 'bg-[#301f50]'
          }`}
        >
          {index === openIndex ? (
            <Minus size={18} color="white" />
          ) : (
            <Plus size={18} color="white" />
          )}
        </div>
        <span className="text-[#16012b] font-bold text-base">{question}</span>
      </button>

      {index === openIndex && answer && (
        <p className="mt-4 ml-[60px] text-base leading-7 text-[#6f6c90]">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
