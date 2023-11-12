import React from 'react';

function Greetings(props) {
  const getGreetingText = (language) => {
    switch (language) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div>
      <p>
        {' '}
        {getGreetingText(props.lang)} {props.children}{' '}
      </p>
    </div>
  );
}

export default Greetings;
