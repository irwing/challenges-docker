#!/bin/bash

echo "stop container"
docker container stop postgrestest_serverpostgres_1
echo "\n"

echo "remove container"
docker container rm postgrestest_serverpostgres_1
echo "\n"

echo "remove image"
docker image rm postgres_server
echo "\n"

echo "clear www directory"
rm -Rf ./data/*
echo "\n"