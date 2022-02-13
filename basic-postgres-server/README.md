# 🚀 Basic postgres server 
Basic postgres server, include commands for create database dumps and restore data from dump files.

This lab is a basic server save data on databases postgres.

####  📋 Requirements
- [Docker](https://www.docker.com/get-started)
- OS: MacOS - GNU/Linux - Windows

#### 📦  Major package versions
- [Postgres:latest](https://hub.docker.com/_/postgres)

#### 💻 Script
Installation - (does not work on windows)
```bash
sh ./install.sh
```

Unistall - does not work on windows - (does not work on windows)
```bash
sh ./unistall.sh
```

#### ⚙️ Namespace
Image: postgres_server
Service: postgrestest
Containers: postgrestest_serverpostgres_1

### 💻 Commands docker
Build image
```bash
docker build -t postgres_server .
```
Build service (containers)
```bash
docker-compose -p "postgrestest" up -d
```
Stop container
```bash
docker container stop postgrestest_serverpostgres_1
```
Remove container
```bash
docker container rm postgrestest_serverpostgres_1
```
Remove image
```bash
docker image rm postgres_service
```
Creating database dumps
```bash
docker exec -t postgrestest_serverpostgres_1 pg_dumpall -c -U admin | gzip > ./database.gz
```
Restoring data from dump files
```bash
gunzip < ./database.gz | docker exec -i postgrestest_serverpostgres_1 psql -U admin -d database
```

####  📋 Issues
Optimize proccess backups