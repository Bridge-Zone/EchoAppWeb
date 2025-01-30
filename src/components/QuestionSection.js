import React from "react";
import "../css/QuestionSection.css";

const QuestionSection = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="accordion mt-4" id="faqAccordion">
        {[
          {
            id: "description",
            question: "Description",
            answer:
              "ECHO’s Obstetric Ultrasound service brings advanced prenatal care directly to your home. Our mobile diagnostic solution ensures expectant mothers can access essential imaging services without the hassle of traveling to a clinic. From confirming pregnancy to monitoring fetal growth, we provide precise, reliable scans performed by experienced professionals.<p>Designed with convenience and care in mind, our service allows you to focus on your health and your baby’s development in a stress-free environment.</p><ul><li>Convenient:At-home diagnostic service for comfort and ease.</li><li>Reliable: Skilled professionals ensure accuracy and quality.</li><li>Efficient: Real-time technician tracking for a seamless experience.</li><li>Secure: Fast and safe access to results via the app.</li></ul>",
          },
          {
            id: "service-availability",
            question: "Is The Service Available In My Area?",
            answer:
              "Check your location on our app to see if the service is available in your area.",
          },
          {
            id: "scan-duration",
            question: "How Long Does The Scan Take?",
            answer:
              "The scan typically takes around 20-30 minutes, depending on the type of service.",
          },
          {
            id: "scan-preparation",
            question: "What Do I Need To Prepare For The Scan?",
            answer:
              "You may be required to fast or have a full bladder, depending on the type of scan.",
          },
        ].map(({ id, question, answer }) => (
          <div className="accordion-item" key={id}>
            <h2 className="accordion-header" id={`heading-${id}`}>
              <button
                className="accordian-head collapsed d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${id}`}
                aria-expanded="false"
                aria-controls={`collapse-${id}`}
              >
                <span className="accordian-question">{question}</span>
                <span className="accordion-icon">+</span>
              </button>
            </h2>
            <div
              id={`collapse-${id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${id}`}
              data-bs-parent="#faqAccordion"
            >
              <div
                className="accordion-body question-detail"
                dangerouslySetInnerHTML={{ __html: answer }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionSection;
