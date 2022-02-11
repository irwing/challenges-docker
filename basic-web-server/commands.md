# build container
docker build -t ubuntu_serverweb .

# run
docker-compose -p "app" up -d

# connect to container (running)
docker exec -ti app_serverweb_1 /bin/bash

# run config scripts
sh /emapscomp/scripts/erp.sh

# run container
docker container start app_serverweb_1