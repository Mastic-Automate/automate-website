import { QRCodePayload } from 'brpix-api-node'
import styled from "styled-components";

const QrCodeWrapper = styled.div`
    z-index: 99;
    position: absolute;
    top: 0;

`;

function QrCode() {

    window.onload = async function() {
      // instanciando QRCode
    const codePayload = new QRCodePayload({
      isStatic: true, // importante sinalizar que é pix estático
      txid: '***', // no pix estático será preenchido com '***' automaticamente
      pixKey: import.meta.env.VITE_PIX_KEY,
      amount: import.meta.env.AMOUNT,
      merchantCity: import.meta.env.MERCHANT_CITY,
      merchantName: import.meta.env.MERCHANT_NAME,
      uniquePayment: false, // true se deve ser usado apenas uma vez
      // description: 'Descricao do pagamento'
    })

      // pode adquirir a string do QRCode
      console.log('string payload', codePayload.getPayload()) 

      // adquirir string base64 para imagem QRCode
      const strBase64 = await codePayload.getQRCode({ width: 400 })

      const qrCode = document.getElementById(qrCode).src = {strBase64};

    }
  
  
    return (
      
      <QrCodeWrapper>
        <img id="qrCode" />
      </QrCodeWrapper>
    )
  }
  
  export default QrCode;
  