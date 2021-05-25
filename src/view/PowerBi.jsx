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
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOTg3MzE4MzItNDBkYS00NTQ2LTkyMDMtZjY4MzkwODAwMDUxLyIsImlhdCI6MTYyMTk0ODI2MSwibmJmIjoxNjIxOTQ4MjYxLCJleHAiOjE2MjE5NTIxNjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUEwdVM0WTEvZ2RENkhRelJicDgrNW5oQ2hTSitsOFhDMkVBMkx4OGRwZjQ3TjU0QUVVNjZXSXRYbk5kYklhdDBGdWlqSWxkRFh4cmQ5aFc0RVBKeTR6bklhaVdqMVJwMnlYOHJ2cEZGdGI3Zz0iLCJhbXIiOlsicHdkIiwicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIyIiwiZGV2aWNlaWQiOiJhMDhjOTQxYy05ZjAyLTQ2N2ItYjNkZS04MjE0OWViM2ZiNjAiLCJmYW1pbHlfbmFtZSI6IkRFTE9VUk1FIiwiZ2l2ZW5fbmFtZSI6IkZyYW5jb2lzIiwiaXBhZGRyIjoiMTY1LjIyNS43Ny4xMzIiLCJuYW1lIjoiREVMT1VSTUUgRnJhbmNvaXMiLCJvaWQiOiJmZWVjZjI2Ni1jNDRlLTQxMGQtOGZkOS1kMGViZDQ1ODhmNWYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTU2MDIyMjYyMi0yMzk3ODE4ODY3LTI3MTYxMDYwNzAtNDE2ODA2IiwicHVpZCI6IjEwMDMyMDAxMTREQTlCRDEiLCJyaCI6IjAuQVFVQU1oaHptTnBBUmtXU0FfYURrSUFBVVE4QkhJZGhYckZQZzZ5WVlRcC1rUkFGQUFBLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6IkdodWZ2MFdHQ2pIWkZkX3JhNVdPYUp3dUxaNmM3WkhxU2pDdEZfOE1mV0EiLCJ0aWQiOiI5ODczMTgzMi00MGRhLTQ1NDYtOTIwMy1mNjgzOTA4MDAwNTEiLCJ1bmlxdWVfbmFtZSI6ImZyYW5jb2lzLmRlbG91cm1lQHZpbmNpLWNvbnN0cnVjdGlvbi5mciIsInVwbiI6ImZyYW5jb2lzLmRlbG91cm1lQHZpbmNpLWNvbnN0cnVjdGlvbi5mciIsInV0aSI6IkNwaTZlNGZGZFVHbS0zalhWdWltQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.BtCSHuv6XGRSvZDz6uSU4TXIoIrLAmAzlGIlFmSYxZORIVGoGoKVoQnsUhAKVNsfkK423mEzgE_iG1q1NketDmAb9_AbPkTYtCX3Sd4yHExY_WUOdaxgDM7uLOnvLp9hGnt9b0wyNF8B9YaTBv4-rngfFDQ05iD8VtEO_CxXLU0xPYxjKBcOD8mFlsqPPXK90Xi9NJqWwwzbAn0WEyes07eUwt8gDk0xq9Fv9EUAORnirdAB0ticSEb4wjFS5LEjVQlavVl7iCCdV8JMe52apFLOxP-FjGQbk8VnNrdcG-PBwH-391c3VYi0QXSGtllqOxUpaHkZyvMNLd7TMPy01w',
          tokenType: models.TokenType.Aad,
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
