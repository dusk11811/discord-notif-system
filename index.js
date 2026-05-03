import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const WEBHOOK_URL = "https://discord.com/api/webhooks/1500618892467245220/C1MoJ3mhNApk7iWXOCspDZUdt_UEMAxN3ZRs5pEfXZW44FCVG1e_BnauK_Wr9Ja79Rxr";

// route test
app.get("/", (req, res) => {
  res.send("Serveur actif 😏");
});

// envoyer une notif
app.post("/send", async (req, res) => {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: "Notification depuis ton serveur 🚀"
    })
  });

  res.send("Message envoyé");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Serveur lancé");
});
