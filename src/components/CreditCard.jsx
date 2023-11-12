import React from 'react';
import masterCardLogo from '../assets/images/Mastercard-logo.svg.webp';
import visaLogo from '../assets/images/Visa_Logo.png';

function CreditCard(props) {
  const styleCard = {
    backgroundColor: props.bgColor,
    color: props.color,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '360px',
    height: '180px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
  };

  const logo = (type) => {
    if (type === 'Master Card') {
      return masterCardLogo;
    } else {
      return visaLogo;
    }
  };
  const hideCardNumber = (number) => {
    const visibleDigits = 4; // Number of visible digits
    const hiddenDigits = number.slice(0, -visibleDigits).replace(/\d/g, '●');
    const visiblePart = number.slice(-visibleDigits);
    return `${hiddenDigits}${visiblePart}`;
  };

  return (
    <div style={styleCard}>
      <img
        src={logo(props.type)}
        alt="logo-type"
        style={{ width: '50px', height: 'auto', margin: '10px' }}
      ></img>

      <h3 style={{ margin: 'auto' }}> {hideCardNumber(props.number)} </h3>
      <p style={{ marginRight: 'auto' }}>
        Expires {props.expirationMonth} / {props.expirationYear} {props.bank}{' '}
      </p>
      <p style={{ marginRight: 'auto' }}> {props.owner}</p>
    </div>
  );
}

export default CreditCard;
