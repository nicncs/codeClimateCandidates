#!/usr/bin/env bash

eval `docker-machine env manager1`

docker service rm payment-service order-service

for server in manager1 worker1 worker2
do
  eval `docker-machine env $server`

  for image in oms/order-service oms/payment-service
    do
      IMAGE=$(docker images $image -q)
      docker rmi -f $IMAGE
  done
done
