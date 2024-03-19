## How to setup

1. Clone/Download repository ini, kemudian buka lewat kode editor.
2. Jalankan **Apache** dan **MySQL** melalui xampp
3. Buatlah sebuah database bernama "pelatihan-todolist", kemudian import database bernama `pelatihan_itc_fe_todo.sql` yang berada pada projek ini ke dalam **MySQL**
4. Kembali ke folder projek, Copy file bernama `.env.example` dan paste menjadi `.env`
5. Masuk ke terminal atau cmd. Pastikan terminal atau cmd berada pada root direktori projek.
6. Install dependency dengan cara mengetik `npm i` di terminal atau cmd, tunggu sampai selesai.
7. Install juga dependency bernama `nodemon` dengan cara mengetik `npm i -g nodemon` di terminal atau cmd.
8. Jalankan service dengan cara mengetik `npm run start`

## Dokumentasi

GET `/v1/todo`

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

POST `/v1/todo`

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

PUT `/v1/todo/:id`

Content-type: application/json

Request Body:

Status Code: 201

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

DELETE `/v1/todo/:id`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Successfully delete todo",
}
```
