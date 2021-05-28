import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import React from 'react';
import './StylePowerBi.css';

const PowerBi = () => {
  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // Supported types: report, dashboard, tile, visual and qna
          id: '573d4d5a-2187-4bff-a4e2-66ccba75b8f8',
          embedUrl:
            'https://app.powerbi.com/reportEmbed?reportId=573d4d5a-2187-4bff-a4e2-66ccba75b8f8&groupId=e6967775-2ce9-4641-a873-5b90920f218b&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlfX0%3d',
          accessToken:
            'H4sIAAAAAAAEAC2UNY7EBgAA_3KtI5kpUgp7DWtm7MzM7Ch_zylKP9VIM3__mMnTT0n-8-cPJ9TOKkW9ckFdFC4XhOhQ3wGPWDD4ITnoECRHftIopQHLajdVlqDxIYRakcoAjag-Qr1eEnwj4SrMGMPpxZDBBtIJ9RPnvI0PdTM2lSXVlITiMn9IRDwJOslHHaNXpSG1wjvkKAlGLhuE75s6z-CmSMjs8IqUl6FJtKaHaDQuc6PWaJFhQLOMCuGln20o1tTfXvcdDfOETZTg-ULjWeRU5hUKIA6Cz2u3BrXmUlbmgCcyX2mUgICFEP_pO2J2QBsbNkNTfDFb-YP-zMOo0pRrtGgTuiTFT6yv-qrB3etehtpjSQFppy6qKt560xY9dW7E9W8PeTqRN2vGBa19YDP4VRN-SfYIUPVqWvko4ppC1SKSAisqx-I3TiA17w-PxLo8U6xyheD9C3GBv10QIH_yfu67PH9t_zOqKKzYnfKEOIAV-XJs3gbpQ8WId32FqfbKNjpxS76PSyPi5OSgJR2iW-GuVqANOPEcX65Qkot6Tt9qLAOp1VYGYQyBgta75lp9nGvS1RwZpNJhJu4aiI1v5fwjsUNpCl9Rv9LYc5RWlVwxTUAfXboAO3wIm9wRrOONgYfbgh5jANw9nx_RFuRa273xHUUEpj6L5UGFBXUL4JhvZu1SweXGg5kvvQEJ2cTjtgSjPg594E16kBPSOYir3-fhqp4r4g8iLuFbR5CblXZzjBWkB0s9eonWoFBn_WFy4Ard0g04OZYxrQu-MuKYxwbG2OcpMh6X1zSA6fK2Ehh_b9kMgiGIsxtaTwfeCcPoaTHTAvqtpkznd6xP96wq4uBl_vrr54-fz_rM-6QUz28mwylA9NNpLLh05lArK3UWsShbzPlZXiDL250cGxyAv8eVoeK1SJhVXDP_zTvlzZm61dtfvGM8bseFNXbRm8X2WBizu1VKKsUsv3ql-iujemtJLOxcb_wcQkv4DirgGVHhAWg2TNmUAh3C4I4BQknBW2TIT145seUn0yiNo9RYQjhJv21BWJJgyd7062AOwvt2LBk4XGtUhL7wadnNdgHkftbFHLoqYd6kik0jXpeerVXzAA0pGmts8nWyFmzF9qa9sDwiZ1SdUTh8N0RSsojmZL8DsC86Nb7aQTVZr4MCEnZul95NaWYLUh1NGtycSe1LOqvCMW0a6S_PBDuOD0QBgf9rfua6WCX_1zJ2tJMA1aDcJRaBJ9a8gVtz_Uc5TTUm-7EWv9gXm_xNAWtiZo-HZbe0nbSwt9v5q649YTazLNp24AuUbCTha3UvlTQ8KLRXpNFXfzvw1j8mU1jS5eW6zQpzLxRKYFUN3X6QVnFKvmQ4FfOIerxubQcrrx5wXpMd62JRFtLj19ZhkyPJHN6tGJTP8KKX110zxlH6xob3BWju-1GMbNP0dQZVozCTzNJcjd_zaAmJVyY_CPFRd7DcdMw-PSqsrhKlY5NzY8qcGwJ5V-eO0_CV78cLBf-sYaorxYOXwCE2Dee5zOHmn_gwVFMPkOmDjse06zSM2wgCVLHz4d-6MEwLD9OGg9LVSOpxNfN7ER13tikfQPWE-x1Y7vmZsRMyYv1q_udfyWxubxoGAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
          tokenType: models.TokenType.Embed,
          settings: {
            hideErrors: false,
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
          },
        }}
        eventHandlers={
          new Map([
            [
              'loaded',
              function () {
                console.log('Report loaded');
              },
            ],
            [
              'rendered',
              function () {
                console.log('Report rendered');
              },
            ],
            [
              'error',
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName="Embed-container"
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  );
};

export default PowerBi;
