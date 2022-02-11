#!/bin/bash

echo "building image"
docker build -t ubuntu_serverweb .
echo "\n"

echo "up services"
docker-compose -p "apptest" up -d
echo "\n"