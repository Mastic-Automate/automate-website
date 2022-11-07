import { QrCodePix } from 'qrcode-pix';
import { useEffect, useState } from 'react';
import styled from "styled-components";

const QrCodeWrapper = styled.div`
    width: 90%;
    height: 100%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    top: 0;

    & > img {
      width: 90%;

    }

    & > p {
      width: 90%;
      word-break: break-all;


    }

`;

export function QrCode() {
  const [qrCode, setQrCode] = useState('');
  const [payload, setPayload] = useState('');
  useEffect(()=> {
    const qr = QrCodePix({
      version: '01',
      key: import.meta.env.VITE_PIX_KEY, //or any PIX key
      name: import.meta.env.VITE_MERCHANT_NAME,
      city: import.meta.env.VITE_MERCHANT_CITY,
      message: 'Automate',
    });

    qr.base64().then(setQrCode);
    setPayload(qr.payload());

      
      
    }, []);
  
  
    return (
      
      <QrCodeWrapper>
        <img src={qrCode} />
        <p>{payload}</p>
      </QrCodeWrapper>
    )
}
  