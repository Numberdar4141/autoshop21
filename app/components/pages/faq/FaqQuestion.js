const FaqQuestion = () => {
  const faqItems = [
    {
      question: "How do I make a booking for my chosen car?",
      answer:
        "To book your chosen car at Premier Auto Shop, simply select your vehicle, contact our sales team, and finalize your booking. We'll guide you through test drives, paperwork, and financing, ensuring a seamless experience from selection to pickup. Experience convenience and satisfaction with Premier Auto Shop's streamlined booking process",
    },
    {
      question: "How do I cancel my car booking?",
      answer:
        "If you need to cancel your car booking at Premier Auto Shop, please contact our sales team as soon as possible. We understand that circumstances may change, and we'll assist you through the cancellation process with professionalism and efficiency. Your satisfaction is our priority, and we're here to accommodate your needs",
    },
    
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header" id={`heading${index}`}>
            <h4 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                {item.question}
              </button>
            </h4>
          </div>
          <div
            id={`collapse${index}`}
            className={`collapse ${index === 0 ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <p className="mb30">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
