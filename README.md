# first_web_api

## Premier essai avec docker

### Documentation importante

- https://docs.microsoft.com/fr-fr/aspnet/core/host-and-deploy/docker/building-net-docker-images?view=aspnetcore-3.1
- https://github.com/dotnet/dotnet-docker/tree/master/samples/aspnetapp


### Voici les commandes à utiliser avec version courante de Dockerfile

```bash
docker build -t todoapi .
```

```bash
docker run -dp 5000:5000 todoapi
```

### Voici les commandes lorsque utiliser avec ancienne version de Dockerfile

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

La connexion ne fonctionnait pas avec http://localhost:5000 et https://localhost:5001 avec le host. Solution:

- https://github.community/t/docker-container-not-mapping-to-correct-port-connection-refused/15242

Donc modifier _appsettings.json_. Les autres solutions qui entre autres set l'URL et le port (et qui devrait fonctionner) comme par les variables d'environnement ne fonctionnent pas.

Il reste aussi à passer au HTTPS mais la configuration du certificat semble tough. À voir plus tard.