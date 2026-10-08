# Heart Run Club — Napoli

Sito vetrina del run club. HTML, CSS e JavaScript puri: nessuna build, nessuna dipendenza.
Lo stile segue le locandine degli eventi: carta, caratteri disegnati a mano, un colore per ogni evento.

## Struttura

```
index.html
style.css
script.js
assets/
  logo-heart.png   logo con cuore (hero)
  logo-flame.png   logo con fiamma (menu e footer)
  heart.svg        icona della scheda del browser
  foto/            foto1.jpg … foto6.jpg per la galleria
```

## Pubblicare su GitHub Pages

```bash
git init
git add .
git commit -m "Primo commit: sito Heart Run Club"
git branch -M main
git remote add origin https://github.com/TUO-UTENTE/heart-run-club.git
git push -u origin main
```

Poi su GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`**.
Il sito sarà online su `https://TUO-UTENTE.github.io/heart-run-club/`.

## Aggiungere un nuovo evento

In `index.html`, nella sezione `#eventi`, copia una `<article class="poster ...">` e cambia testi e `data-date="AAAA-MM-GG"`.
Il sito mette da solo l'etichetta **Prossimo** / **Già fatto** e ordina le card per data.
Gli stili delle locandine (`.p-green`, `.p-disco`, `.p-wings`, `.p-rome`, `.p-sosta`) sono in `style.css`: per un nuovo evento puoi riusarne uno o crearne uno nuovo.

## Da personalizzare

- **Contatti**: `ciao@heartrunclub.it` è un segnaposto, metti l'email vera. L'Instagram è `@heartrunclub`.
- **Foto**: metti le immagini in `assets/foto/` con i nomi `foto1.jpg` … `foto6.jpg`.
- **Colori**: variabili in cima a `style.css`.
