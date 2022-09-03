# REST API PARA GERENCIAMENTO DE USUARIOS

Esta é uma api robusta feita usando o framework NestJS, banco de dados Postgres, typeorm, migrations, Docker e TDD.

Caso for testar lembre de preencher o .env

## Install

    npm i 
    # ou 
    yarn add

## Permisoes

    chmod 777 .docker/entrypoint.sh

## Rodar o projeto com Docker

    make build

## rodas os tests

    npm run test
    # ou 
    yarn run test

# REST API

Descrição de rotas

## Lista todos os user

### Request

`GET /list`
  
    http://localhost:5000/list/

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 2
    ETag: W/"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w"
    Date: Wed, 31 Aug 2022 16:22:08 GMT
    Connection: close

    []

### Request

`POST /user`
  
    http://localhost:5000/user/


### Body
```json
{
  "name": "Italo",
  "email": "italo@gmail.com",
  "password": "password",
  "avatar": "http://google.api/13412343"
}
```

### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 186
    ETag: W/"ba-UsESLqhTjSt1czaparfr2mzlfTI"
    Date: Sat, 03 Sep 2022 21:23:28 GMT
    Connection: close

    {
      "name": "Italo",
      "email": "italo@gmail.com",
      "password": "password",
      "avatar": "http://google.api/13412343",
      "id": "2b666847-549e-42d4-a61c-f43d2b43e445",
      "created_at": "2022-09-03T21:23:28.500Z"
    }
  
`GET /user/:id`
  
    http://localhost:5000/user/2b666847-549e-42d4-a61c-f43d2b43e445

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 186
    ETag: W/"ba-Zt6yNSrY1aozZxi+jaGN1kp4J2U"
    Date: Sat, 03 Sep 2022 21:28:23 GMT
    Connection: close

    {
      "id": "2b666847-549e-42d4-a61c-f43d2b43e445",
      "name": "Italo",
      "email": "italo@gmail.com",
      "password": "password",
      "avatar": "http://google.api/13412343",
      "created_at": "2022-09-03T21:23:28.500Z"
    }


### Request

`PATCH /user`
  
    http://localhost:5000/user/2b666847-549e-42d4-a61c-f43d2b43e445


### Body
```json
{
  "name": "Italo Brito",
  "email": "italo@gmail.com",
  "password": "password",
  "avatar": "http://google.api/13412343"
}
```

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 192
    ETag: W/"c0-2xkUsoGEBsWu6WnCWCZ7v8iY/kQ"
    Date: Sat, 03 Sep 2022 21:31:16 GMT
    Connection: close

    {
      "id": "2b666847-549e-42d4-a61c-f43d2b43e445",
      "name": "Italo Brito",
      "email": "italo@gmail.com",
      "password": "password",
      "avatar": "http://google.api/13412343",
      "created_at": "2022-09-03T21:23:28.500Z"
    }


`DELETE /user/:id`
  
    http://localhost:5000/user/2b666847-549e-42d4-a61c-f43d2b43e445

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Content-Type: application/json; charset=utf-8
    Content-Length: 148
    ETag: W/"94-MDVkEBYScFDnH3860i6lsVm3gPo"
    Date: Sat, 03 Sep 2022 21:37:36 GMT
    Connection: close

    {
      "name": "Italo Brito",
      "email": "italo@gmail.com",
      "password": "password",
      "avatar": "http://google.api/13412343",
      "created_at": "2022-09-03T21:23:28.500Z"
    }