#!/bin/bash

echo "stop container"
docker container stop mysqltest_servermysql_1
echo "\n"

echo "remove container"
docker container rm mysqltest_servermysql_1
echo "\n"

echo "remove image"
docker image rm mysql_server
echo "\n"

echo "clear www directory"
rm -Rf ./data/*
echo "\n"