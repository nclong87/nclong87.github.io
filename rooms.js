const rooms = {
  "1": {
    "id": "stage-b45e4794-79d3-4d59-ba82-232508c4845b",
    "users": {
      "mod": {
         "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6Im1lZXQubWVldGluZ21ha2VyLnNlIiwicm9vbSI6InN0YWdlLWI0NWU0Nzk0LTc5ZDMtNGQ1OS1iYTgyLTIzMjUwOGM0ODQ1YiIsImlzcyI6Im1lZXRpbmdtYWtlciIsImV4cCI6MTYyNDY3ODMwNiwiY29udGV4dCI6eyJ1c2VyIjp7ImF2YXRhciI6IiIsIm5hbWUiOiJMb25nIE5ndXllbiIsImVtYWlsIjoibmNsb25nODdAZ21haWwuY29tIiwiaWQiOiIzODYzIn0sImdyb3VwIjoiIn0sIm1vZGVyYXRvciI6dHJ1ZX0.XGklbx_VG0NqhbaioPlKirkwIWM7nRuVgAJG5ey9YyM",
         "email": "nclong87@gmail.com"
      },
      "p1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6Im1lZXQubWVldGluZ21ha2VyLnNlIiwicm9vbSI6InN0YWdlLWI0NWU0Nzk0LTc5ZDMtNGQ1OS1iYTgyLTIzMjUwOGM0ODQ1YiIsImlzcyI6Im1lZXRpbmdtYWtlciIsImV4cCI6MTYyNDY3ODM3NSwiY29udGV4dCI6eyJ1c2VyIjp7ImF2YXRhciI6IiIsIm5hbWUiOiIxIE5ndXllbiIsImVtYWlsIjoibmNsb25nLnBhcnQuMUBtYWlsaW5hdG9yLmNvbSIsImlkIjoiMzg4NyJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.IpDZUIvaf9xu_vMW3QN1req0icjfN_S8mJ14DDxy93w",
        "email": "nclong.part.1@mailinator.com"
      },
      "p2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6Im1lZXQubWVldGluZ21ha2VyLnNlIiwicm9vbSI6InN0YWdlLWI0NWU0Nzk0LTc5ZDMtNGQ1OS1iYTgyLTIzMjUwOGM0ODQ1YiIsImlzcyI6Im1lZXRpbmdtYWtlciIsImV4cCI6MTYyNDY3ODQwNCwiY29udGV4dCI6eyJ1c2VyIjp7ImF2YXRhciI6IiIsIm5hbWUiOiIyIE5ndXllbiIsImVtYWlsIjoibmNsb25nLnBhcnQuMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNDQzNiJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.dTPS3wlZbjSyH1_0XTYfOlIVKNKOkf286NL5lGDaLRI",
        "email": "nclong.part.2@mailinator.com"
      }
    }
  },
  "2": {
    "id": "stage-2e19a9a5-2454-4ad9-bb70-76ddd4e8803b",
    "users": {
      "mod": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS0yZTE5YTlhNS0yNDU0LTRhZDktYmI3MC03NmRkZDRlODgwM2IiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjE1NjQ5NDY3LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IkEgUGxhbm5lciIsImVtYWlsIjoibmNsb25nLnBsYW5uZXIuYUBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNjY1NiJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOnRydWV9.Pd1tLYzn2DaYAnp1Bh-g6H5pBapRGMXG3e5sqmAwG9k",
        "email": "nclong.planner.a@mailinator.com"
      },
      "p1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS0yZTE5YTlhNS0yNDU0LTRhZDktYmI3MC03NmRkZDRlODgwM2IiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjE1NjUxNTA3LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjEgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuMUBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNjcwNSJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.Q4jhkP8HipnC1nCa1CccDRbaMa7DNKVZQ7JJTeZPhN4",
        "email": "nclong.part.1@mailinator.com"
      },
      "p2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS0yZTE5YTlhNS0yNDU0LTRhZDktYmI3MC03NmRkZDRlODgwM2IiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjE1NjQ5NjQ2LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjIgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNjcwNiJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.78Vj95ti3F0-5oXnfDnwqgjyVk3Wbdikv00OxIgVNpY",
        "email": "nclong.part.2@mailinator.com"
      }
    }
  }
}
