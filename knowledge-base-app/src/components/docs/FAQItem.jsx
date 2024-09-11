import React from "react";


const FAQItem = (props) => {
    const { question, answer } = props;
    return (
        <div className="faq-item">
            <h3 className="faq-item__question">{question}</h3>
            <p className="faq-item__answer">{answer}</p>
        </div>
    );
};

export default FAQItem
