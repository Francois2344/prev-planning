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
            'H4sIAAAAAAAEAB2Wxw60WA5G3-Xf0hJFhpZ6ARQ557Aj55wZzbtP9ex9LfnI_s79zx8zefopyf_8_Sd50Y3NM_IW65GVtT59mJoYbVQCtMrUYBVrL0GxlKEekQtaMA00hvGlh5nLTCCio1t6eFrIOyjzQtAxSKEykizUarSMjz6QUrXsSWXM4ZHWKgfx5iR872Hq2if1fS8uk7kqcLttLI5Oj9fUxaeX0kIkHethSI30tQ6EMnYyZ5TJFz6Bt2ucP1c5bm29UaWNFTmMbcQL5aQsEKnI5lAdAo-eVeYUO5a28d_JNw2qlCYx3rBXZukd1OBrdrnkWlsi7BflEodKQBveXouu-s6cUezdwxbI4uxcFeO6hN2aGo5TZEc6HTHivihwM8hm8UhKqNfhKjfLO0nP7AjXU10bV8pmckSugBySpgiPuCyEvyitplQMW4e0K5sDJAWzy24JsXLznrlHzCokdzXWHJluN1anyOi4MXJstoxb186GB2p1ig0XgdafY7_DIa-5VBnQGzo4yOdKDSht8cTwtYsEllu1M0QL2bGc7FhNYiGv5PtGsrfIciFx7Fw54AXHsWRC9pfmvPwW2fmjIIJ7b1FzlPPRpSgOaEuAXddsaBpxtTi17eBhv-arLJWbzqjiRpeXJZ3t2EDpRhKw5-D0fNB0QE4YB9cD7GNXhmXW_JZdjuh7Oi5pYEriyWqZxmygorDIyjsTlL9f1rllUCi8-dmHZ627UZKr62vto6N_nLbt0xwq7sGwrEdeYxsNGWwDDyCB632yjWGSVnUdF_reb8w2_Ptg-7niHUg_ooKQt7U1AwXRBE5HG_p8eUst9ar7GBidFf0e3yzMsB9fMTLnG5xpes0CQsbmgL-LobzlZk0Et3len_TWZchhBlMcpkU7MeitnUGP3d9dmLgEuc2i-MEt2AzxGLMHNghCCGCT3HuWXtI0OU8Ec7grbu9cSFMez_ZNDlGYHvcjvE0X4xrR4FROXn8DFl3rJagKFFTtKvnxwyenvu1gpx_DUZyvGoVleVRMJbRlwU4INf3aH22bb67eOK54iezIGiSucLcJU-VN2ZjmlEw8CTJ_e65lMOcTmg6TQIPFgRYYxxrq3uAoKKvj-qQRn9gLgorq5thxfSYO0KsFtoIoE1qUvgWId_fS37d1Z0Qn7w3VLZOPmXU9HNri0wGKJS2L6X12BayAx3WWIk0ZWeaBbbWEItGnA87a_rh692A9h6Ji1ACtIeKvcm89oA9wJsWKzNaht8zgGCJBEp3W3XHMr2JR35CYgsU5v1NP550oFpw8RkkDQuomi-tvrWJst-9m8qLe-82szKXJfgrsfvD6lEnvaWX-C8M1bc0fk9yxBV5MmRh3K_w2CPc7P9ABiahgKzODPDKQuzDwPaUbprRBlfp7Nx70Jl8BLqYUgl4AFu_HousR304Pj-kSVipcnTmWBT-JABDZfQ1qnYdPc2kKdUpT4aC8GFJ9m-bYHHuTJPC9XwsZAytEN8UJyc9mEmON0stCsI881kHaFyxfKLjFNmDtJ31KPN4trQVoyhIwpAMgp9O4pBrYKEsV8ZTN-tAiC9mgmrHQvcU07YWwJw6fTgZy5nPFTxkyecpO3vztcMiCYS5nEfZgVPgBvV-2O9i8Kh7f_HYlSXD9MHQKznoScH1VoidIdYiQ6L_aMxXgRlCtmwGLNKv7cAZfr-KlrpvEu48w0NrOScBEnqJIM_z4MBqr76OMcEvFFb-A_uF8RTcjoguEAjai-0yrNuB6P2So7vMOsHm0xU4vHyjKhzlItgfvOh5Lo0D_IUaj82wB7gDU99Bx5OrdcmHueC_Meqd1rCP6xfn8pk85til6kc1LEyNc3k51dKV8sDbEofe9M-nD23rAMVT7PEh7pL25kjC8qz33sA2Qe_bMZ-9ESlhY5gcIJ8rsiNErAir1wyxY2PgNIFRmzyHPeBvcDFudMSaaNhV0h5TWTyHZDjAYcyNm3DSsPuraCoEZZ-rdYI2ADy0t10KZtMtOFrh8XaZThSbvUjs3J4c-FXiJUG1ek9DN6Fzh6uVI8rJvPzaxkC3O7ePsZLgJeAr-LrR267RYlVGYtYOAhSdzEmcZMpHmWW3jbGo4CEesyoncGMIP7-HMMc_3-XzwkoEXvaJas3MkMLz42Zm_QoQgnZllFbv60JGR6Ekh89j2t_MDklI4IFELmQ1UlufIzSFosqySGw4QLUMZgjbgnlKl31_YUBkKPLCwapZNUW_5yAD83qspGj5EYAVTsJH-mRYbd0kMs0haTohp88S09SzSKLcaAMIiIIbhqENOie9yngkMerZWsZzw5gKohuGKk416YikrvvE_KRniGBrAuKBCV1v99-OExULL5HcBzh93fo42kcDY51XGj-XejDJ10MgJ_ttrq9YgBpaUEEDLIsW4dMmHfNq0NlnjkieMSNonh5SrpkmEDwbJq_tx6ZRtsTB5kHfsj_iEG6mjo6jynQ53UvO9tLD5Osdhhg27Ebzljw8Ys-aKGuXWCX5xqH_--sOuz7xPSvH8vmPmNJm_96EoY53bUF7kfNAs6JiPlLO0mkrevDigTuaCRMg4aPjJIRTFGhFegXodzhfBN-PaguBonQcLMb8cvv_W1L4CKC94GiKq2gYuDyjJkKhaCO5FAkn5bQ5vdUzt1IDWr5ohxorBKWEQ-aK8GyfTnw2fs582B0cyqjKvCZZmNmWJkE5mUcrmLUVEswY1BqPTkLyBVq7cITastKidEYZoSaB_6A-sti7yLgHJ-x_t68PaF78dMU6xG4EitiHV404ZukkzGERWB5HyrESARTFBxucSGl9PMnqxVDB-tsWNN6TA_Pa0N1fr42tzPgbplxn_8qG2KhDJgpvg46ITI__8aeiff_7F_Mx1sUr-j7KP3H2ZLpoCBhFkmzgdUlBA_7_Kaaox2Y-1-JVFa4H94vR1hE2NOiPsR-h4eLlQMPYY2xEKQIwisPOIX0v_SPFH515o8clNU8QPyltrh5db6d9og7r7rvnSYJlNtza6SSd9PmuwYbek5BOohLDtAMI1H0EUYri5l4b7HDHELPFZ6cVTm8i7462sYt-CLMp0KvJytTxrl7JxEGoEfuc4TTFWCA3AoIparDC7rHiIbwLxxCZBTCMku1IfoNfN6evbZ3WxvpU1t7GfsbZGWSUV1xzuqI6bo1dWbN-DjvQmqeaTCacV2Itv4hDmOT9r_Gyp9SBc-ps2GHHGZJ4GYXIeHVQYgLwSLx7wdxlec4a8FA56a_ZpZFbEs4Pc98uiu38x__d_YmGTxoIMAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
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
