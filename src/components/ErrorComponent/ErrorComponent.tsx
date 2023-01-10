import React from 'react';

import styless from './ErrorComponent.module.scss';

const ErrorComponent: React.FC = () => {
    return (
        <div className={styless.errors}>
            <h2>Произошла ошибка <span>&#129402;</span></h2>
            <p>К сожалению, неудалось получить данные. Попробуйте повторить попытку позже...</p>
        </div>
    );
};

export default ErrorComponent;