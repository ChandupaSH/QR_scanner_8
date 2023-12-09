import { useState } from 'react';
import QRReader from 'react-qr-scanner';
import { useMediaQuery } from '@mui/material'

function App() {
  const isSmall = useMediaQuery('(min-width: 600px )')
  const widthIs = isSmall? '50%':'100%'
  const [result, setResult] = useState(null);

  const handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    if (error) {
      console.log(error)
    }
  }

  return (
    <div >
      <div>code changed</div>
      {result? null 
      :
      <QRReader
        style={{width: widthIs}}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        facingMode={{ exact: "environment" }}
      />}
      {result && <p>QR code scanned: {result.text}</p>}
    </div>
  );
}
export default App
