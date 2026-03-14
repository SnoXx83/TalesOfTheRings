import express from "express";
import cookieparser from "cookie-parser";
import router from "./routes";
import type { ErrorRequestHandler } from "express";

const app = express();
const port = 4000;

app.use(cookieparser());

// cors
// app.use(cors());
// Si besoin de donner acces a une url, on peut faire ça:
/*
app.use(
  cors({
    origin: ["http://mysite.com", "http://another-domain.com"],
  }),
);
*/
// parsing des données envoyer par le client en json ( ajouter si besoin : url-encoded, text, raw)
app.use(express.json());

// notre router
app.use(router);

// ici on va devoir setup un truc pour permettre le routing ( sinon tout ce qui est charger en front sans passer par un get ne
// chargera pas. ex: user va directement  sur la page home/dashboard, sans passer par l accueil => erreur 404)

// *********************************

// error handler pour le debug ( sans next express ne sait pas que c'est une erreur et block/renvoie code 200 par erreur)
// toujours mettre ce middlware en dernier
const logErrors: ErrorRequestHandler = (err, req, res, next) => {
   console.log(err);
   console.log("on req:", req.method, req.path);

   next(err);
};

app.use(logErrors);

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
