import { QRCodePayload } from 'brpix-api-node'
import { useEffect, useState } from 'react';
import styled from "styled-components";

const QrCodeWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    position: absolute;
    top: 0;

    & > img {
      width: 100%;
      max-width: 400px;
      margin-top: 50px;

    }

`;

export function QrCode() {
    const [qrCode, setQrCode] = useState('');

    useEffect(()=> {
        const codePayload = new QRCodePayload({
            isStatic: true, // importante sinalizar que é pix estático
            txid: '***', // no pix estático será preenchido com '***' automaticamente
            pixKey: import.meta.env.VITE_PIX_KEY,
            amount: import.meta.env.VITE_AMOUNT,
            merchantCity: import.meta.env.VITE_MERCHANT_CITY,
            merchantName: import.meta.env.VITE_MERCHANT_NAME,
            uniquePayment: false, // true se deve ser usado apenas uma vez
            // description: 'Descricao do pagamento'
        })
        codePayload.getQRCode().then(strBase64 => {
            setQrCode(strBase64)
        })
    }, []);
  
  
    return (
      
      <QrCodeWrapper>
        <img src={qrCode} />
      </QrCodeWrapper>
    )
}
  