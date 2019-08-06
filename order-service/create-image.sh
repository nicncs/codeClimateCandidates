#!/usr/bin/env bash

docker rm -f order-service

docker rmi order-service

docker image prune

docker volume prune

docker build -t order-service .
