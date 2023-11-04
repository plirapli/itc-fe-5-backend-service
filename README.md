## How to setup

1. Clone/Download repository ini, kemudian buka lewat kode editor.
2. Jalankan **Apache** dan **MySQL** melalui xampp
3. Import database bernama `pelatihan_itc_fe_todo.sql` yang berada pada projek ini ke dalam **MySQL**
4. Kembali ke folder projek, Ubah file bernama `.env.example` menjadi `.env`
5. Install dependency dengan cara mengetik `npm i` di terminal atau cmd, tunggu sampai selesai.
6. Jalankan service dengan cara mengetik `npm run start`

## Dokumentasi

GET `/`

Response:

```
{
  "status": "Success",
  "message": "Successfully get all todos',
  "data": [
    "id": 1,
    "judul": "Ini judul",
    "isi": "Ini adalah isinya"
  ]
}
```

---

POST `/`

Content-type: application/json

Response:
```
{
  "status": "Success",
  "message": "Successfully create todo",
}
```

---

PUT `/:id`

Content-type: application/json

Response:

```
{
  "status": "Success",
  "message": "Successfully update todo",
}
```

---

DELETE `/:id`

Response:

```
{
  "status": "Success",
  "message": "Successfully delete todo",
}
```

