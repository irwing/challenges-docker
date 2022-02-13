# 🚀 Basic web server 
Basic mysql server, include commands for create database dumps and restore data from dump files.

This lab is a basic server save data on databases mysql.

####  📋 Requirements
- [Docker](https://www.docker.com/get-started)
- OS: MacOS - GNU/Linux - Windows

#### 📦  Major package versions
- [Mysql:latest](https://hub.docker.com/_/mysql)

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
Image: mysql_server
Service: mysqltest
Containers: mysqltest_servermysql_1

### 💻 Commands docker
Build image
```bash
docker build -t mysql_server .
```
Build service (containers)
```bash
docker-compose -p "mysqltest" up -d
```
Stop container
```bash
docker container stop mysqltest_servermysql_1
```
Remove container
```bash
docker container rm mysqltest_servermysql_1
```
Remove image
```bash
docker image rm mysql_service
```
Creating database dumps
```bash
docker exec mysqltest_servermysql_1 sh -c 'exec mysqldump --all-databases -uroot -p"$MYSQL_ROOT_PASSWORD"' > ./backups/all-databases.sql
```
Restoring data from dump files
```bash
docker exec -i mysqltest_servermysql_1 sh -c 'exec mysql -uroot -p"$MYSQL_ROOT_PASSWORD"' < ./backups/all-databases.sql
```

####  📋 Issues
Generate script for backup specific database