# 🚀 Basic web server 
Basic web server, based on Ubuntu 22.04 and Apache.

Este laboratorio está diseñado para ejecutar pequeñas aplicaciones todo en uno que ejecutan PHP, MySql o Postgres. Se configura el protocolo seguro HTTPS.

####  📋 Requirements
- [Docker](https://www.docker.com/get-started)
- OS: MacOS - GNU/Linux - Windows

#### 📦  Major package versions
- PHP 7.4

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
Image: ubuntu_serverweb
Service: apptest
Containers: apptest_serverweb_1

### 💻 Commands docker
Build image
```bash
docker build -t ubuntu_serverweb .
```
Build service (containers)
```bash
docker-compose -p "apptest" up -d
```
Stop container
```bash
docker container stop apptest_serverweb_1
```
Remove container
```bash
docker container rm apptest_serverweb_1
```
Remove image
```bash
docker image rm ubuntu_serviceweb
```