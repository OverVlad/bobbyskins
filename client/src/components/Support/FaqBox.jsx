import React from 'react';

const FaqBox = ({ question, answer, opened, onClick }) => (
  <div className="support__faqbox">
    <h4 className="question" onClick={onClick}>
      <i className="fa fa-question support-icon" aria-hidden="true"></i>
      {question}
    </h4>

    <div className={opened ? "answer opened" : "answer hidden"}>
      <p className="answer-text">{answer}</p>
    </div>
  </div>
);

export default FaqBox;
