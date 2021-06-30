const rooms = {
  "1": {
    "id": "stage-3a52d875-c67f-4043-a1ca-0398e3793fd2",
    "users": {
      "mod": {
         "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6Im1lZXQubWVldGluZ21ha2VyLnNlIiwicm9vbSI6InN0YWdlLTNhNTJkODc1LWM2N2YtNDA0My1hMWNhLTAzOThlMzc5M2ZkMiIsImlzcyI6Im1lZXRpbmdtYWtlciIsImV4cCI6MTYyNTEzMzM4MCwiY29udGV4dCI6eyJ1c2VyIjp7ImF2YXRhciI6IiIsIm5hbWUiOiIxMTAgU1BDRSIsImVtYWlsIjoibmNsb25nLnNwY2UuMTEwQG1haWxpbmF0b3IuY29tIiwiaWQiOiI2OTUxIn0sImdyb3VwIjoiIn0sIm1vZGVyYXRvciI6dHJ1ZX0.kriFAjhrRoADxvtewcySDu8WHFvtLg0t6loGb8UBaOc",
         "email": "nclong.spce.110@mailinator.com"
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
    "id": "stage-b94ac0b0-ee14-4c9e-91e7-4275eca9b944",
    "users": {
      "mod": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS1iOTRhYzBiMC1lZTE0LTRjOWUtOTFlNy00Mjc1ZWNhOWI5NDQiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjI0Njg5ODYzLCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjExMCBTUENFIiwiZW1haWwiOiJuY2xvbmcuc3BjZS4xMTBAbWFpbGluYXRvci5jb20iLCJpZCI6IjY2MzUifSwiZ3JvdXAiOiIifSwibW9kZXJhdG9yIjp0cnVlfQ.zEcqIkHU1RcEHBcouWt26t3mFl7VyIf8nGr2laFNMTo",
        "email": "nclong.spce.110@mailinator.com"
      },
      "p1": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS1iOTRhYzBiMC1lZTE0LTRjOWUtOTFlNy00Mjc1ZWNhOWI5NDQiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjI0Njg5OTU4LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjEgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuMUBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNjg3NyJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.fhX9C02QMU9WSUPAY9xBf0q1BgN2jNnegM3W5wuaLks",
        "email": "nclong.part.1@mailinator.com"
      },
      "p2": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJqaXRzaSIsInN1YiI6InZpZGVvLm1lZXRpbmdtYWtlci5zZSIsInJvb20iOiJzdGFnZS1iOTRhYzBiMC1lZTE0LTRjOWUtOTFlNy00Mjc1ZWNhOWI5NDQiLCJpc3MiOiJtZWV0aW5nbWFrZXItd2ViIiwiZXhwIjoxNjI0Njg5OTg1LCJjb250ZXh0Ijp7InVzZXIiOnsiYXZhdGFyIjoiIiwibmFtZSI6IjIgUGFydCIsImVtYWlsIjoibmNsb25nLnBhcnQuMkBtYWlsaW5hdG9yLmNvbSIsImlkIjoiNjg3NiJ9LCJncm91cCI6IiJ9LCJtb2RlcmF0b3IiOmZhbHNlfQ.zbwerAwWBAAYq47_qrbkgVKZxVMI6iE0kgJ5X6QxU-Y",
        "email": "nclong.part.2@mailinator.com"
      }
    }
  }
}
