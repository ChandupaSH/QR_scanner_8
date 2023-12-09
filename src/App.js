// import { useState } from 'react';
// import QRReader from 'react-qr-scanner';
// import { useMediaQuery } from '@mui/material'

// function App() {
//   const isSmall = useMediaQuery('(min-width: 600px )')
//   const widthIs = isSmall? '50%':'100%'
//   const [result, setResult] = useState(null);

//   const handleScan = data => {
//     if (data) {
//       setResult(data);
//     }
//   };

//   const handleError = (error) => {
//     if (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div >
//       <div>code changed</div>
//       {result? null 
//       :
//       <QRReader
//         style={{width: widthIs}}
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         facingMode={0}
//       />}
//       {result && <p>QR code scanned: {result.text}</p>}
//     </div>
//   );
// }
// export default App

import { useState } from 'react';
import QRReader from 'react-qr-scanner';
import { useMediaQuery } from '@mui/material';

function App() {
  const isSmall = useMediaQuery('(min-width: 600px)');
  const widthIs = isSmall ? '50%' : '100%';
  const [result, setResult] = useState(null);
  const [facingMode, setFacingMode] = useState(0);

  const handleCameraChange = (event) => {
    setFacingMode(event.target.value);
  };

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!result && (
        <>
          <h2>Select Camera:</h2>
          <div>
            <label htmlFor="frontCamera">Front Camera</label>
            <input
              type="radio"
              id="frontCamera"
              name="camera"
              value="user"
              checked={facingMode === 1}
              onChange={handleCameraChange}
            />
          </div>
          <div>
            <label htmlFor="backCamera">Back Camera</label>
            <input
              type="radio"
              id="backCamera"
              name="camera"
              value="environment"
              checked={facingMode === 'environment'}
              onChange={handleCameraChange}
            />
          </div>
        </>
      )}
      {result ? null : (
        <QRReader
          style={{ width: widthIs }}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          facingMode={facingMode}
        />
      )}
      {result && <p>QR code scanned: {result.text}</p>}
    </div>
  );
}

export default App;

