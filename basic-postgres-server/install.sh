#!/bin/bash

echo "building image"
docker build -t postgres_server .
echo "\n"

echo "up services"
docker-compose -p "postgrestest" up -d
echo "\n"