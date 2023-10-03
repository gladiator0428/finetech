import express from "express";

const app = express();

app.set(express.json({ limit: "5mb" }));

app.post("/sendSMS", async (req, res) => {
  const resp = await fetch(
    "https://auth.privy.io/api/v1/passwordless_sms/init",
    {
      method: "POST",
      headers: {
        Origin: "https://www.friend.tech",
        "content-type": "application/json",
        "privy-app-id": "cll35818200cek208tedmjvqp",
      },
      body: req.body,
    }
  );

  const data = await resp.json();

  res.set().status(res.statusCode).send(data);
});

app.all("*", (req, res) => {
  res.send("Access Denied!");
});

app.listen(1337, () => console.log("Server started on *:1337"));
