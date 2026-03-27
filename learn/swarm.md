---
layout: learn
title: Swarm Basic Commands
permalink: /learn/swarm/
---

# Docker Swarm Commands
1.  `docker swarm init`: Initialize a swarm.
2.  `docker node ls`: List all nodes.
3.  `docker service create --name <name> <image>`: Deploy a service.
4.  `docker service ls`: List active services.
5.  `docker service scale <name>=<replicas>`: Scale a service.
6.  `docker service update --image <new-image> <name>`: Rolling update.
7.  `docker stack deploy -c docker-compose.yml <stack-name>`: Deploy a stack.
8.  `docker swarm join-token worker`: Get worker join command.
9.  `docker service ps <service>`: Check service tasks.
10. `docker swarm leave --force`: Remove node from swarm.