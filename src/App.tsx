import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'react-qr-code';

function App() {
  const [qrValue, setQRValue] = useState('');

  const changeQR = (e: any) => {
    setQRValue(e.target.value);
  }

  return (
    <div className="App">
      <div className="topNav">
        <FontAwesomeIcon icon={faQrcode} size="lg" /> 
        <span>QR Generator</span>
      </div>
      <input type="text" id="linkInput" onChange={changeQR}/>
      <div className="qrContainer">
        <QRCode
          size={500}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox={`0 0 500 500`}
        />
      </div>
    </div>
  );
}

export default App;
