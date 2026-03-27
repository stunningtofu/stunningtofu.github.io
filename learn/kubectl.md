---
layout: learn
title: Kubectl base command
permalink: /learn/kubetctl/
---

# Kubectl Commands
1.  `kubectl get nodes`: Check cluster nodes.
2.  `kubectl get pods -A`: List all pods in all namespaces.
3.  `kubectl apply -f <file.yaml>`: Apply configuration.
4.  `kubectl describe pod <pod-name>`: Detailed pod info.
5.  `kubectl logs <pod-name>`: Print pod logs.
6.  `kubectl expose deployment <name> --port=80`: Create service.
7.  `kubectl edit svc <service-name>`: Edit service config.
8.  `kubectl delete -f <file.yaml>`: Delete resources.
9.  `kubectl top nodes`: CPU/Memory usage.
10. `kubectl config view`: Show kubeconfig settings.