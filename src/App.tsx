import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Input from "./comps/Input";
import Button from "./comps/Button";
import QRCode from "react-qr-code";

const App = () => {
  const [qrValue, setQRValue] = useState("https://github.com/Murnster/React-QR-Generator");
  
  const printQR = () => {
    console.log('print QR');
  }
  
  const changeQR = (e: any) => {
    setQRValue(e.target.value);
  }

  return (
    <div className="flex flex-col justify-evenly bg-opacity-75 bg-white">
      <div className="flex items-center justify-start w-full h-20 p-2 bg-slate-100 text-4xl px-10 mb-2 shadow-sm">
        <FontAwesomeIcon icon={faQrcode} size="lg" />
        <span className="px-4 font-bold">QR Generator - Ryan Murney</span>
      </div>
      <div className="flex flex-row p-2 w-full">
        <div className="flex-col justify-center items-center w-full p-2">
          <Input title={'Enter URL here'} changeProp={(changeQR)}/>
        </div>
        <div className="flex-col justify-center items-center w-full m-2">
            <div className="p-2 flex flex-row justify-end">
              <Button label="Print QR Code" clickProp={printQR}/>
            </div>
            <div className="m-5 border-4 rounded-md border-gray-700 p-4 shadow-sm">
              <QRCode
                size={250}
                style={{ height: "auto", maxWidth: "100%", width: "100%", backgroundColor: "rgb(241 245 249 / var(--tw-bg-opacity))", color: 'red' }}
                value={qrValue}
                viewBox={`0 0 250 250`}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
