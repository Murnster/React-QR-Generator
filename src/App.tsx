import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import Input from "./comps/Input";
import QRCode from 'react-qr-code';

const App = () => {
  const [qrValue, setQRValue] = useState('');

  const changeQR = (e: any) => {
    setQRValue(e.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-start w-full h-20 bg-red-700 p-2 text-4xl px-10 mb-2">
        <FontAwesomeIcon icon={faQrcode} size="lg" /> 
        <span className="px-4 font-bold">QR Generator</span>
      </div>
      <Input changeProp={(changeQR)}/>
      <div className="m-5 w-4/12 h-4/12">
        <QRCode
          size={250}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={qrValue}
          viewBox={`0 0 250 250`}
        />
      </div>
    </div>
  );
}

export default App;
