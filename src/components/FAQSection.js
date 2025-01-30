import React, { useState } from "react";
import "../css/FAQSection.css"; // For custom styles if needed

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const questions = [
    "What is ECHO?",
    "What services does ECHO offer?",
    "Who can use ECHO?",
    "How do I book an appointment?",
    "What areas does ECHO serve?",
    "What if I need to reschedule my appointment?",
    "What type of diagnostic services do you provide?",
    "Are ECHO's services safe?",
    "Can I track my technician's location?",
    "What should I prepare for my appointment?",
    "How long does the service take?",
    "Will the technician bring all necessary equipment?",
    "How will I receive my results?",
    "Can I share my results with my doctor?",
    "What is your cancellation policy?",
    "Do you accept insurance?",
    "Are there any hidden fees?",
    "Who can I contact for help or inquiries?",
  ];

  const answers = [
    "ECHO is a groundbreaking healthcare platform that brings mobile diagnostic ultrasound services directly to your location. It leverages advanced technology and user-friendly features.",
    "ECHO offers a variety of diagnostic services, including ultrasound scans.",
    "ECHO can be used by anyone requiring diagnostic services.",
    "You can book an appointment through our website or mobile app.",
    "ECHO serves areas in and around the city.",
    "You can reschedule your appointment through your account or by contacting support.",
    "We provide high-quality diagnostic ultrasound services.",
    "Yes, all our services adhere to safety protocols.",
    "Yes, you can track the technician's location in real-time through our app.",
    "Ensure you have your ID and health documents ready.",
    "Services typically take 30-60 minutes.",
    "Yes, the technician will bring all necessary equipment.",
    "You will receive results digitally within 24 hours.",
    "Yes, you can share your results via the app or website.",
    "You can cancel or reschedule 24 hours in advance.",
    "Yes, we accept most major insurance providers.",
    "No, our pricing is transparent with no hidden fees.",
    "For inquiries, contact our customer support team.",
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 faq-heading">Frequently Asked Questions</h2>
      <p className="text-center text-muted mb-5 faq-subHeading">
        Find answers to your most common questions about our dental solutions.
      </p>
      <div className="row">
        <div className="col-md-6">
          {questions.slice(0, 9).map((question, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h6
                className={`faq-question ${
                  activeIndex === index ? "text-primary-question" : "text-normal"
                }`}
              >
                {question}
              </h6>
              {activeIndex === index && (
                <p className="faq-answer">{answers[index]}</p>
              )}
            </div>
          ))}
        </div>
        <div className="col-md-6">
          {questions.slice(9).map((question, index) => (
            <div
              key={index + 9}
              className={`faq-item ${
                activeIndex === index + 9 ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index + 9)}
            >
              <h6
                className={`faq-question ${
                  activeIndex === index + 9 ? "text-primary-question" : "text-normal"
                }`}
              >
                {question}
              </h6>
              {activeIndex === index + 9 && (
                <p className="faq-answer">{answers[index + 9]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
