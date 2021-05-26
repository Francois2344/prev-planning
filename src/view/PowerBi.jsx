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
            'H4sIAAAAAAAEAB1Wta7FCpL8l5d6JTOtNIGZ2T6GzMzMHu2_753JK-gu6v73P3b6DnNa_PO__5AvZKAtT-dEZB0yiLc5YKrp51uCk9YgjvQirSNC4e1BjcgENxZ9RhfBihsY1UPQhkiRTU5p16IlnkFc9Uq6T4iUmxCJIqoKyajmala4IpFgcLTxTMoz8lzZE2zpxI-sZsKKR2P6bqvWaxJeIvwoBuECKixIQGyxqoe9r3qC2W0iRWSRQoHAlHhLPpV_qHrLlQEAfTRpfn9YOS5_3FK9FQ2sLbmxMBM34tVfzCksOb-p3o43KrM6PXlqi5Ht9HGrSmYa7sUfueq3pT0Peob6F2wAuOlJ_LMgeepJQKbLm_fGDpb2kBEZEAj7e94mEErFQLiDITyCS6atwhR5i4YCxdvIi98N4LPG7o2OJTtqovokoe-u86nk2-nOaIXMiWg6u1c2kzW-noMHRaifgoVoBiTvPJ0Zhi_3IT8TcrxdmTOJGQRTHfCHWwQie7kEMKdSvLs5YBs_9WMGijwbq_6GGgvX1WVN4q9jqzV6j8eUp3oXIjtHbhOkNr25GqSsbDdcS2fbTdQISdmW-k3cjykdTD0e2dSFPfJbGXqsO4dBWju3EYNc5uYa7AsWOmG8ZLSG9K7v55wif36HYUp97yKV2s5uZllsPdyaTvCLe4M1PIeiWqvphp8poQCXIVQlkJSfHKfNXs6Z0Pi4HF6nRCw7xoQ_jofas2PvQUlwLGzvIEDLFi-PRHNgcduW8z3vXHIR-_OYpXzQDLIGHNB-Ai64PZF5lexu89GWgLQBNlO1pfMQfxPtnlUq9KykZrcn7lqzlFjUmh5o7k-w5JouaZWyoyApMmUkW3BoaB3HG3QnAkVmgtH4uW7ynKdxE4Hgl-PhrGI_MVnUd1xnoD_NRd6GbiSdBBBeai6hv4gCwVjX2VqMr9ww4YZBFCLxV9AamVala5gbTPB2urynOBwasHxWu6eZYIwoLk7od0cqBtesT-ScbZP08HCItfIYmq7UkMM6ePyZNytiw_yd9Qxw8Ky0HIoh2k-_9FbC4PNQ8r4oR0Jo82M_xC0oYb6EWFjQyno88X41vhuGmtxRCP9YIrbQzMoeHMKps376CF5R_1Se3k0fbcP0fqy69UyeMGlCLDLkKUnMO9613MkQl-SfySbHijIkagiqwPNza7W2WuiQlhucON8eP9Pe2G4Oequcez_864yWsePddc1h0C_kbS00XKPQjT8y7ifYoST253OBoqJSsfZazkdO9sBB6XECtbQstm7Wrz6-7mHQmaV4LBgHuz7SKESrwgJNy27yPDomgbujhtPsGJXsUrdC2q0AG7HzGvMKKqEJGheL2BkyL-756z7T5ARoJMRgezLdq5W7dzuHAkguKJDEOyrLv0ZcoL-1KrjKxJ-tdAC1damcPLQ5x6Z5JDaIn87rxWe35AQe-WVvkcNQVYyrlxOSWNDNxRPAQJT4xeU62PLWrI9pkXpF2hBhQbLq8iXAAdsqGU7ptloTTW84TBRTNTG8Y_qNfX8qADE7FgOjsAFZ6N-UsxI9qtyoLJa4GXMGpqd3-PMt8l-nkooHsytmN7PgAC03_GBucdmiSCGWx83CwxWr8cbhSTODW-MdrF4hF-AClTWQeJlpp6Zd--7XX9V5qeR9YYoD56Sb5HhKYcXp6seBwf6ch90Fp0YPD4ahXspgsxJj20WQophFVV1VG_1od6pdSworCWSjMUVwfO5N4Qp_TotaPtUyP7vX1cB_ZWpxUkC2zItXvKOVLx3ALrPiWaqd7KzzOXbYLOEcYUR9OuGF-3PQESZIdvULdQixacrGDCO0j7Lsd6aTBM5KoW5LL--p8TCXmoz1wEOwYTZtPqCvWJxHegucG1Tot9xwDrGl-gx9vgRTV_DewocMjo1mc2b3xEErzYzLII2jVlNj7xY0BrGjYal1vbOu9CjKB-K5hkt7g3jJLZBEzaBmp7lEl3u2FoVHiDcuMlY0nouVGka7Etiw-UFq3Af3f-EmXqCKRc4rpFs6_ox39929Ps1mL96IavfVDLgxVPr3Fx3hEZcbczBtR0S2z92H8SBMRIbYSx9KpAr6E0uwfEyLwrTPlP0cI0cwhGrGv9uDOYXBQZPTrzSGVmvQnrbUj2g2CZjyPnRL0tiav-s7oKB0MPLQPHtghvlFpx8aMCNjaCkkcPLdN-MZp-4lC-vOS-9rDRRqWFm231mnaYufULGB9-lw03TV7NRjMVJyhiJKveh4lrcnqJFcQfk65H-5XAmEb4giUWycj-imHRQt1fxbHB4WCra_IvOGvkLtS4QXpKIRdBK1b8DKNNzyj_xccMxPp8ELK9cN7iUHZnF95ZpaPcpicP6VubF8HKxpKx4TBWcMDmV019t8dXQwa-n04kc_QpXQYkgX1ZRSnSHItKn0FpOv7V3nVTWw3kg9hPfkoJndvZ3GeJNX18tOEDP374z7pYcCzn2J12fzrd_BLEvMOLPWCsY6h0pZQM6j7Hz88z__cNu7HLNWvn_v2JUkFD9N9xLRWADHbGioP5PL1GhAzBh8xuDyktKZkb2KP6igWIdqwyuNe5qtzW3aPLIUgS1IEqJJraTLRAR4ML6sMZyGu0wSfkO4eKnOC-sBFVK4_GxxLG3pjgizJBq2FUWwlv2m_gAwDmI9tr2ks4i32C_OhG6fUoGCFzmacQzFTChhFZTS5C5KfZbU-Z2kvjgi3D7KguWumnUUsi0ArVjmuRkjODp--LCd1oj3LqUaCbbhDA4acJEkjBpCGXGqK6T0PNCH8San3QLBiKJz5IzmYxRlXM0FkYoarO2EglqzfKr0KhoDsWjWfHbA7Fn6Jg8pZGTX5NNviTPY8sHwj1mZf_3rPzS_S1Nuyu-PZbeq9YGnvKmhAL1EAk-LTvT-L8pr6yk9zq38g9XIvQekFkM1FuVRQubkAYwQqhnbYED6ZxZInNPiL03MPfB-pBQol48_YZmQiOyZrVc-TE-ZVyiQNzRHazG6tk0EOYdl9A8OOsf_Fk6UHUvshERUS-e0O4b3W2zNiCGy3I3-eKZIXJFI_pLljxQiDL5-xxp_6lQbeEFWgjm0HYTS0qRwfSRLVUcEewNN5gKh88nQ_YKrs6CeeHdmJFfCSah6TvBk0-t8T6UCRvwUCbufiN2ITsY41fw1JzgsK_Fkq4F0hJMdaYvEI8wzuZYZltE_b728Sc5q_igzAuj-nSnezZHURKAmsNgBkl71Rnb4TolHG9ONkCmR8qSVvt8nRhDeqv9o_r__B4lrllGCDAAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0=',
          tokenType: models.TokenType.Embed,
          settings: {
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
