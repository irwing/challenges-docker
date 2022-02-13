#!/bin/bash

echo "building image"
docker build -t mysql_server .
echo "\n"

echo "up services"
docker-compose -p "mysqltest" up -d
echo "\n"