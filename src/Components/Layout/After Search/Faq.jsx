import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "Why is Webflow the best nocode tool?",
    answer:
      "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor",
  },
  {
    question: "How to launch a Webflow website?",
    answer: "Step-by-step guide to launching a Webflow site.",
  },
  {
    question: "When did Webflow was founded?",
    answer: "Webflow was founded in 2013.",
  },
  {
    question: "Who founded BRIX Templates?",
    answer: "BRIX Templates was founded by [founder's name].",
  },
  {
    question: "Who are the Webflow founders?",
    answer:
      "The founders of Webflow are Vlad Magdalin, Sergie Magdalin, and Bryant Chou.",
  },
  {
    question: "Is NoCode the future of the web?",
    answer:
      "NoCode is revolutionizing web development, making it more accessible to everyone.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-[30px] max6:text-[28px] max9:text-[25px] leading-[35px] max9:leading-[32px] text-black font-semibold">
        Frequently Asked Questions
      </h1>
      <div className="grid md:grid-cols-2 gap-4 mt-[80px]">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-semibold text-lg text-indigo-900">
                {faq.question}
              </span>
              <span className="p-2 rounded-lg bg-blue-100">
                {openIndex === index ? (
                  <FiMinus className="text-blue-900" />
                ) : (
                  <FiPlus className="text-blue-900" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-red-500 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
