## start docker-digging
You can start your own docker-digging!!

## running nodejs server from docker
```
$ docker build -t docker-digging .
$ docker run -p 4075:4075 --env-file=.env docker-digging
```

## Share you docker image to docker hub
Docker Hub is a service provided by Docker for finding and sharing container images.
```
docker login 
docker tag docker-digging devkishor8007/docker-digging
docker push devkishor8007/docker-digging
```

## resources
- [Docker Get Started](https://docs.docker.com/guides/get-started/)
- [Setup Your Local Envirnoment](https://www.docker.com/blog/how-to-setup-your-local-node-js-development-environment-using-docker/)
- [Tips & Tricks](https://www.docker.com/blog/8-top-docker-tips-tricks-for-2024/)

