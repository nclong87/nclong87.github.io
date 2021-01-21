const rooms = {
  "1": {
    "id": "stage-b04dc24a-0125-4b8c-8d98-1f42d82fc833",
    "users": {
      "mod": {
         "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtYjA0ZGMyNGEtMDEyNS00YjhjLThkOTgtMWY0MmQ4MmZjODMzIiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MTEzMTE0NzMsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiTG9uZyBOZ3V5ZW4iLCJlbWFpbCI6Im5jbG9uZy5zYWxlc3Jvb20uMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiOTU5In0sImdyb3VwIjoiIn0sIm1vZGVyYXRvciI6dHJ1ZX0.Idc6Kuv7AAE2b41hKRbI2BzRiAdUehGrL7oP4dMSFq4",
         "email": "nclong.salesroom.2@mailinator.com"
      },
      "s1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMGIyNDkwMWItZjBiMC00YTU5LWFkYTUtMzE3ZjdkMDY4ZDc4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDg5ODIzNTUsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMSBTcGVha2VyIiwiZW1haWwiOiJuY2xvbmcuc3BlYWtlci4xQG1haWxpbmF0b3IuY29tIiwiaWQiOiI3NjkifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.mwh0MZ6DnIAs6v4iv_eme-x6wzOYX3JT4Rmk2cRhNhw",
        "email": "nclong.speaker.1@mailinator.com"
      },
      "p1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMGIyNDkwMWItZjBiMC00YTU5LWFkYTUtMzE3ZjdkMDY4ZDc4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDg5ODIzODcsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMSBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4xQG1haWxpbmF0b3IuY29tIiwiaWQiOiI3NzAifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.LS_GZ7rP3z75K28b1Do3_dl6ItfRbUzItIwTsdvwA08",
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
