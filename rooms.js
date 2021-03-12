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
    "id": "54d67985-ca4e-45a3-ba2d-03eee1da77ef",
    "users": {
      "mod1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS0xYzk2YTNiMC05ZTgyLTQ5MmYtOGYxMi0wN2EyNjkzMjJlYTEiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjA4MTk3NjU3LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IkEgUGxhbm5lciIsImVtYWlsIjoibmNsb25nLnBsYW5uZXIuYUBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNDExOCJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOnRydWV9.Cs9Qw0PqcL6NjruE_4IREfqkbvhSlpLP3lojhCKRgso",
        "email": "nclong.planner.a@mailinator.com"
      },
      "part2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiI1NGQ2Nzk4NS1jYTRlLTQ1YTMtYmEyZC0wM2VlZTFkYTc3ZWYiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjA4MTk3NzA4LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjIgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNDEyMCJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.oTK2yq2Ls1Yg0vdbrRmBc4Bq-ATjsQbo-rheygzTjIs",
        "email": "nclong.part.2@mailinator.com"
      },
      "part3": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiI1NGQ2Nzk4NS1jYTRlLTQ1YTMtYmEyZC0wM2VlZTFkYTc3ZWYiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjA4MTk3NzMzLCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjMgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuM0BtYWlsaW5hdG9yLmNvbSIsImlkIjoiNDEyMSJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.AnFte2LSDVho5Ij3o71dpa5uDpkhKerTTQ8nL9LMDCM",
        "email": "nclong.part.3@mailinator.com"
      }
    }
  }
}
