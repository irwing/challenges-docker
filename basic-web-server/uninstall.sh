#!/bin/bash

echo "stop container"
docker container stop apptest_serverweb_1
echo "\n"

echo "remove container"
docker container rm apptest_serverweb_1
echo "\n"

echo "remove image"
docker image rm ubuntu_serviceweb
echo "\n"

echo "clear www directory"
rm -Rf ./www/*
echo "\n"