# first_web_api

## Premier essai avec docker

Voici les commandes

```bash
docker build -t todoapi .
```

```bash
docker run -it -p 5000:5000 todoapi
```
ou
```bash
docker run -it -p 5000:5000 todoapi bash
```

Dans les deux cas ci-dessus avec le Dockerfile courant, il faut partir l'application à la main avec
``` bash
dotnet run
```

## Problème avec la connexion dans le Docker
Ça ne fonctionne pas, le http://localhost:5000 ne semble pas fonctionner sur le host (même chose pour le https://localhost:5001). Voici la solution:

- https://github.community/t/docker-container-not-mapping-to-correct-port-connection-refused/15242

Donc modifier _appsettings.json_. Les autres solutions qui entre autres set l'URL et le port (et qui devrait fonctionner) comme par les variables d'environnement ne fonctionnent pas.

Il reste aussi à passer au HTTPS mais la configuration du certificat semble tough. À voir plus tard.