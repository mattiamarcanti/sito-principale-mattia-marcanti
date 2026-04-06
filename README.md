# sito-principale-mattia-marcanti

<img width="1304" height="897" alt="image" src="https://github.com/user-attachments/assets/b10beb5c-68ab-408d-bbc9-461baeac6839" />

Dalla home è possibile accedere alla Web App (https://github.com/mattiamarcanti/mm-app) e all'Area Riservata (https://github.com/mattiamarcanti/mm-dashboard) previa autenticazione.

## Galleria dinamica
Aggiunto uno step nella GitHub Action che genera automaticamente il file gallery/gallery.json elencando tutti i file .jpg/.jpeg/.png/.gif/.webp nella cartella gallery/

Il JS ora carica le immagini dal JSON tramite fetch invece che da una lista hardcoded

*Per aggiungere una foto: basta metterla nella cartella gallery/ e pushare su main — la Action rigenera il JSON e deploya tutto*
