import React from "react";
import FaqCard from "./faqCard";
import Link from "next/link";
const array = [
  {
    main: "Is there any minimum order quantity for purchasing hardware items?",
    text: "No, not at all. However, there can be some low-priced products with an MOQ requirement to maintain feasible shipping costs.",
  },
  {
    main: "Can I buy Hardware Items, Industrial & MRO Products in bulk?",
    text: "Yes, Amazon Business provides the option of purchasing these items in bulk quantities.",
  },
  {
    main: "What are the top 10 power tool brands in India?",
    text: "Yes, Amazon Business provides the option of purchasing these items in bulk quantities.",
  },
  {
    main: "How do I choose the right industrial tool supplier for sourcing?",
    text: "All the industrial tool vendors on Amazon Business go through a thorough background check before listing products on the platform. However, for the sake of extra caution, you can also check their websites.",
  },
  {
    main: "What is your shipping policy for industrial and MRO supplies?",
    text: "Amazon Business offers hassle free and doorstep delivery for all its products. However, with a Prime account, you can get 1-2 days of shipping with bulk shipping options. Learn more about Amazon Business's shipping and delivery here.",
  },
  {
    main: "Why is it important to buy quality industrial and MRO supplies?",
    text: "Buying quality industrial and MRO supplies are crucial for any business wanting to maintain its machines in top condition. Quality supplies ensure the machines remain efficient, reliable, and safe. It also reduces downtime due to faulty or low-grade parts, which can be expensive and disruptive. Quality parts can extend the life of machines, ensuring businesses maintain their operations without interruption. Moreover, the costs associated with maintenance and repair and buying supplies in bulk are kept under check with quality items.",
  },
  {
    main: "What are the key things to keep in mind while buying hardware items?",
    text: "You must always buy hardware items from reputed brands and vendors. Moreover, ensure that you always take GST-compliant invoices from the vendor and keep them in your safe custody. Invoices are necessary proof if you want to stake a warranty claim at any point in time.",
  },
];

const Faq = () => {
  return (
    <div className="px-40 py-10">
      <p className="text-3xl font-bold pb-8 text-gray-800">FAQs</p>
      <div className="flex flex-col space-y-4">
        {array.map((item) => {
          return <FaqCard main={item.main} text={item.text} />;
        })}
      </div>
      <div className="flex flex-col bg-gray-100 w-3/4 mx-auto py-12 mt-12 space-y-6 items-center">
            <p className="font-bold text-gray-800 text-2xl">Have questions?</p>
            <Link href={""}>
              <div className="bg-yellow-400 text-lg px-10 w-fit py-2 font-semibold text-gray-800 hover:opacity-90 cursor-pointer rounded-sm">
               Contact Us
              </div>
            </Link>
        </div>
    </div>
  );
};

export default Faq;
