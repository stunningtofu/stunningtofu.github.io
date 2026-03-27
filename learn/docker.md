---
layout: default
title: Docker Basics
parent: Learning Center
nav_order: 1
---

# Docker Basic Commands
1.  `docker pull <image>`: Download an image from a registry.
2.  `docker run -d <image>`: Run a container in detached mode.
3.  `docker ps`: List all running containers.
4.  `docker exec -it <container> sh`: Access a running container.
5.  `docker logs -f <container>`: Follow live logs.
6.  `docker stop <container>`: Stop a running container.
7.  `docker rm -f <container>`: Force remove a container.
8.  `docker images`: List all locally stored images.
9.  `docker build -t <name> .`: Build an image from a Dockerfile.
10. `docker network ls`: List all networks.