# first_web_api

## Essai avec docker

Voici les commandes

```bash
docker build -t todoapi .
```

```bash
docker run -it -p 5001:5001 todoapi
```
ou
```bash
docker run -it -p 5001:5001 todoapi bash
```

Dans les deux cas ci-dessus avec le Dockerfile courant, il faut partir l'application à la main avec
``` bash
dotnet run
```

Ça ne fonctionne pas, le localhost:5001 ne semble pas fonctionner sur le host.