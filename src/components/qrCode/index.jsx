import { dinamicPix, staticPix } from "pix-charge";
import QRCode from "qrcode";

import styled from "styled-components";

const QrCodeWrapper = styled.div`
    z-index: 99;
    position: absolute;
    top: 0;

    #canvas {
        z-index: 99;

    }
`;

function QrCode() {

    window.onload = function ({merchantKey, merchantName, amount}) {
      let brCode = staticPix({
        merchantKey: {merchantKey},
        merchantName: {merchantName},
        amount: {amount},
      });
      
      QRCode.toCanvas(document.getElementById("canvas"), brCode, (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log(brCode);
        }
      });
    }
    
  
    return (
      
      <QrCodeWrapper>
        <canvas id="canvas" width='500' height='500'></canvas>
      </QrCodeWrapper>
    )
  }
  
  export default QrCode;
  