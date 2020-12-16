const rooms = {
  "1": {
    "id": "stage-33c3c0a4-6bc2-479d-85b9-5b6afbb0a818",
    "users": {
      "mod": {
         "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMzNjM2MwYTQtNmJjMi00NzlkLTg1YjktNWI2YWZiYjBhODE4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDgyMDA1NjIsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiQSBQbGFubmVyIiwiZW1haWwiOiJuY2xvbmcucGxhbm5lci5hQG1haWxpbmF0b3IuY29tIiwiaWQiOiI1ODgifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjp0cnVlfQ.pwuraa_SHl5gF98Dsua0idLnDi7cMPoCSDwjcp6ysD8",
         "email": "nclong.planner.a@mailinator.com"
      },
      "speaker1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMzNjM2MwYTQtNmJjMi00NzlkLTg1YjktNWI2YWZiYjBhODE4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDgyMDA1MzUsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMSBTcGVha2VyIiwiZW1haWwiOiJuY2xvbmcuc3BlYWtlci4xQG1haWxpbmF0b3IuY29tIiwiaWQiOiI1OTgifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.mW3SFMxevMs-z_o18xIEpw5YRFWLlC0akucL3udS-gk",
        "email": "nclong.speaker.1@mailinator.com"
      },
      "speaker2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMzNjM2MwYTQtNmJjMi00NzlkLTg1YjktNWI2YWZiYjBhODE4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDgyMDA1ODQsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMiBTb2Vha2VyIiwiZW1haWwiOiJuY2xvbmcuc3BlYWtlci4yQG1haWxpbmF0b3IuY29tIiwiaWQiOiI2MzcifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.WFbHiO8qOTcQaAbVF9hwbcEH-AM4RK0KPaTdI81iyiY",
        "email": "nclong.speaker.2@mailinator.com"
      },
      "part1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMzNjM2MwYTQtNmJjMi00NzlkLTg1YjktNWI2YWZiYjBhODE4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDgxMTcyNzQsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMSBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4xQG1haWxpbmF0b3IuY29tIiwiaWQiOiI1ODkifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.yf11A2aN4EvOVwMRT0KYaxmGnvo1zLgUWIpBI2Bi4S4",
        "email": "nclong.part.1@mailinator.com"
      },
      "part2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLWRldi5tZWV0aW5nbWFrZXIuc2UiLCJyb29tIjoic3RhZ2UtMzNjM2MwYTQtNmJjMi00NzlkLTg1YjktNWI2YWZiYjBhODE4IiwiaXNzIjoibWVldGluZ21ha2VyLXdlYi1kZXYiLCJleHAiOjE2MDgxMTcyOTcsImNvbnRleHQiOnsidXNlciI6eyJhdmF0YXIiOiIiLCJuYW1lIjoiMiBQYXJ0IiwiZW1haWwiOiJuY2xvbmcucGFydC4yQG1haWxpbmF0b3IuY29tIiwiaWQiOiI1OTEifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjpmYWxzZX0.CQvK0XFh5bTLEHFuSNIuf1u4892KPlixgnOeKWPFFuA",
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
