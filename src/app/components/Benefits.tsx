"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ShieldCheck,
  CircleDollarSign,
  Truck,
  Undo2,
} from "lucide-react";

const benefits = [
  {
    icon: <CircleDollarSign className="h-6 w-6 text-white" />,
    title: "Money Back Guarantee",
    content:
      "We offer a money back guarantee if you are not satisfied with our products.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    title: "Pay On Delivery",
    content: "Pay for your order when it is delivered to your doorstep.",
  },
  {
    icon: <Truck className="h-6 w-6 text-white" />,
    title: "Express Delivery",
    content: "Get your order delivered to you in the fastest time possible.",
  },
  {
    icon: <Undo2 className="h-6 w-6 text-white" />,
    title: "Easy Return Process",
    content: "We have a simple and easy return process for your convenience.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-display text-center mb-10 text-white">
          Our Benefits
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-gray-600"
            >
              <AccordionTrigger className="hover:text-red-600 transition-colors duration-300">
                <div className="flex items-center gap-4">
                  {benefit.icon}
                  <span className="font-semibold">{benefit.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-10 text-gray-300">
                {benefit.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
