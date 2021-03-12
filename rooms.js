const rooms = {
  "1": {
    "id": "stage-0910a97f-b585-46b1-8579-0630fc6d595c",
    "users": {
      "mod": {
         "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMDkxMGE5N2YtYjU4NS00NmIxLTg1NzktMDYzMGZjNmQ1OTVjIiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MTU2MDg3NjcsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiTG9uZyBOZ3V5ZW4iLCJlbWFpbCI6Im5jbG9uZy5zYWxlc3Jvb20uMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiMTIyMSJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOnRydWV9.29B9SrHWhosXfiZ1k4PfrR1iEtSciAMN4rMjSq1OEaI",
         "email": "nclong.salesroom.2@mailinator.com"
      },
      "p1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMDkxMGE5N2YtYjU4NS00NmIxLTg1NzktMDYzMGZjNmQ1OTVjIiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MTU2MDg4MzQsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMSBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4xQG1haWxpbmF0b3IuY29tIiwiaWQiOiIxMjM0In0sImdyb3VwIjoiIn0sIm1vZGVyYXRvciI6ZmFsc2V9.QTslKU-Cd78p5-MJ-MkNIOV4X_jdrchTzfM91V1BbNI",
        "email": "nclong.part.1@mailinator.com"
      },
      "p2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMDkxMGE5N2YtYjU4NS00NmIxLTg1NzktMDYzMGZjNmQ1OTVjIiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MTU2MDg4MDYsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMiBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4yQG1haWxpbmF0b3IuY29tIiwiaWQiOiIxMjIzIn0sImdyb3VwIjoiIn0sIm1vZGVyYXRvciI6ZmFsc2V9.AzIZRP9KGujhDo2b-zdeEjHSOsdnv_vNrnjeMmg2ocY",
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
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS0yZTE5YTlhNS0yNDU0LTRhZDktYmI3MC03NmRkZDRlODgwM2IiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjE1NjQ5NTkwLCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjEgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuMUBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNjcwNSJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.e-VL8c81EANJYBJbZ5iUxyVHZn92iyeaGAtl-4WXMg8s",
        "email": "nclong.part.1@mailinator.com"
      },
      "p2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS0yZTE5YTlhNS0yNDU0LTRhZDktYmI3MC03NmRkZDRlODgwM2IiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjE1NjQ5NjQ2LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjIgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNjcwNiJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.78Vj95ti3F0-5oXnfDnwqgjyVk3Wbdikv00OxIgVNpY",
        "email": "nclong.part.2@mailinator.com"
      }
    }
  }
}
