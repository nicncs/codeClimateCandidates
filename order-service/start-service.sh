#!/usr/bin/env bash

docker service create --replicas 1 --name order-service -l=apiRoute='/movies' -p 3000:3000 oms/order-service
