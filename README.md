## How to setup

1. Clone/Download repository ini, kemudian buka lewat kode editor.
2. Jalankan **Apache** dan **MySQL** melalui xampp
3. Buatlah sebuah database bernama "pelatihan-todolist", kemudian import database bernama `pelatihan-todolist.sql` yang berada pada projek ini ke dalam **MySQL**
4. Kembali ke folder projek, Copy file bernama `.env.example` dan paste menjadi `.env`
5. Masuk ke terminal atau cmd. Pastikan terminal atau cmd berada pada root direktori projek.
6. Install dependency dengan cara mengetik `npm i` di terminal atau cmd, tunggu sampai selesai.
7. Jalankan service dengan cara mengetik `npm run dev`

## Dokumentasi

### Todos

GET `/v1/todos`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Successfully get all todos',
  "data": [
    {
      "id": 1,
      "judul": "Ini judul",
      "isi": "Ini adalah isinya"
    },
    ...
  ]
}
```

---

POST `/v1/todos`

Content-type: application/json

Request Body:

```
{
  "judul": "mengerjakan tugas",
  "isi": "mengerjakan tugasnya novrido"
}
```

Response:

Status Code: 201

```
{
  "status": "Success",
  "message": "Successfully create todo",
}
```

---

PUT `/v1/todos/:id`

Content-type: application/json

Request Body:

Status Code: 200

```
{
  "judul": "mengerjakan tugas",
  "isi": "mengerjakan tugasnya novrido"
}
```

Response:

```
{
  "status": "Success",
  "message": "Successfully update todo",
}
```

---

DELETE `/v1/todos/:id`

Response:

Status Code: 204

```
{
  "status": "Success",
  "message": "Successfully delete todo",
}
```

---

### Todos (Secured Version)

GET `/v1/todos_auth`

Request Header:

```
Authorization: Bearer a1b2c3d4e5f6
```

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Successfully get all todos',
  "data": [
    {
      "id": 1,
      "judul": "Ini judul",
      "isi": "Ini adalah isinya"
    },
    ...
  ]
}
```

---

POST `/v1/todos_auth`

Content-type: application/json

Request Header:

```
Authorization: Bearer a1b2c3d4e5f6
```

Request Body:

```
{
  "judul": "mengerjakan tugas",
  "isi": "mengerjakan tugasnya novrido"
}
```

Response:

Status Code: 201

```
{
  "status": "Success",
  "message": "Successfully create todo",
}
```

---

PUT `/v1/todos_auth/:id`

Content-type: application/json

Request Header:

```
Authorization: Bearer a1b2c3d4e5f6
```

Request Body:

Status Code: 200

```
{
  "judul": "mengerjakan tugas",
  "isi": "mengerjakan tugasnya novrido"
}
```

Response:

```
{
  "status": "Success",
  "message": "Successfully update todo",
}
```

---

DELETE `/v1/todos_auth/:id`

Request Header:

```
Authorization: Bearer a1b2c3d4e5f6
```

Response:

Status Code: 204

```
{
  "status": "Success",
  "message": "Successfully delete todo",
}
```

---

### Users

Get all users

Endpoint: GET `/v1/users`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Successfully get all users',
  "data": [
    {
      "id": 1,
      "nama": "Seva Giantama Farel",
      "nim": "123210061"
    },
    {
      "id": 2,
      "nama": "Muhammad Rafli",
      "nim": "123210078"
    },
    ...
  ]
}
```

---

Get user by NIM

Endpoint: GET `/v1/users/:nim`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Successfully get user',
  "data": {
    "id": 2,
    "nama": "Muhammad Rafli",
    "nim": "123210078",
    "divisi": "Vice Chairman",
    "email": "rafliyulistiawan@gmail.com",
    "angkatan": "Informatika 2021",
    "foto": "https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/muh_rafli.jpeg?updatedAt=1688139465943"
  }
}
```
