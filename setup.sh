#!/usr/bin/env bash

function setup-swarm {
  cd _docker_setup
  (bash < ./setup-swarm.sh)
  cd ..
}

function setup-mongo {
  rm -rf mongo-replica-with-docker
  git clone https://github.com/Crizstian/mongo-replica-with-docker.git
  cd mongo-replica-with-docker
  (bash < create-replica-set.sh)
  cd ..
}

function setup-images {
    cd _docker_setup

    echo '···························'
    echo '·· creating microservices images >>>>  ··'
    echo '···························'
    (bash < create-images.sh)
   cd ..
}

function setup-services {
    cd _docker_setup
    echo '···························'
    echo '·· starting up the microservices >>>>  ··'
    echo '···························'
    # we start all our microservices
    (bash < start-services.sh)
    cd ..
}

function status {
  eval `docker-machine env manager1`
  docker node ls
  docker service ls
}

function main {
  setup-swarm
  setup-mongo
  setup-images
  setup-services
  status
}

main
