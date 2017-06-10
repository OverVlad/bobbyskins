import React from 'react';

const FetchError = ({ message, onRetry }) => (
  <div className="wrapper fetch-error">
    <p className="fetch-error-message">Не удалось загрузить данные. {message}</p>
    <button className="cta-button fetch-error-retry" onClick={onRetry}>Попробовать снова</button>
  </div>
)

export default FetchError;
