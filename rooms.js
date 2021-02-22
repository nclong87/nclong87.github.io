const rooms = {
  "1": {
    "id": "stage-cd0b43c3-3e2a-4d3d-856e-833a18ea48d4",
    "users": {
      "mod": {
         "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtY2QwYjQzYzMtM2UyYS00ZDNkLTg1NmUtODMzYTE4ZWE0OGQ0IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MTQwNTMzNjQsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiTG9uZyBOZ3V5ZW4iLCJlbWFpbCI6Im5jbG9uZy5zYWxlc3Jvb20uMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiMTA1MyJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOnRydWV9.aeIzGsJ6uggODKoMGq3AhL38iuY9fgVY5_T8J7ykjgs",
         "email": "nclong.salesroom.2@mailinator.com"
      },
      "s1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMGIyNDkwMWItZjBiMC00YTU5LWFkYTUtMzE3ZjdkMDY4ZDc4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDg5ODIzNTUsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMSBTcGVha2VyIiwiZW1haWwiOiJuY2xvbmcuc3BlYWtlci4xQG1haWxpbmF0b3IuY29tIiwiaWQiOiI3NjkifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.mwh0MZ6DnIAs6v4iv_eme-x6wzOYX3JT4Rmk2cRhNhw",
        "email": "nclong.speaker.1@mailinator.com"
      },
      "p1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtY2QwYjQzYzMtM2UyYS00ZDNkLTg1NmUtODMzYTE4ZWE0OGQ0IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MTQwNTMzMzgsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMSBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4xQG1haWxpbmF0b3IuY29tIiwiaWQiOiIxMDk4In0sImdyb3VwIjoiIn0sIm1vZGVyYXRvciI6ZmFsc2V9.Yxs5GBwIbdHVbY_nftegvsCRI5DZVwq8-C7u1adxhog",
        "email": "nclong.part.1@mailinator.com"
      },
      "p2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtY2QwYjQzYzMtM2UyYS00ZDNkLTg1NmUtODMzYTE4ZWE0OGQ0IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MTQwNTMyODcsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMiBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4yQG1haWxpbmF0b3IuY29tIiwiaWQiOiIxMDU3In0sImdyb3VwIjoiIn0sIm1vZGVyYXRvciI6ZmFsc2V9.5xtpaPtN9F9N9FydLjsNAu-hmyLgXm0fHkYEYKD12L8",
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
