# 🚀 Microservices personal website
Basic microservices, for get data on github and platzi, for showing on personal website.

####  📋 Requirements
- [Docker](https://www.docker.com/get-started)
- OS: MacOS - GNU/Linux - Windows

#### 📦  Major package versions
- 

#### 💻 Script
Installation - (does not work on windows)
```bash
sh ./install.sh
```

Unistall - does not work on windows - (does not work on windows)
```bash
sh ./unistall.sh
```

#### ⚙️ Architecture
```
server_web
│   proxy:nginx_proxy
│   web:express_server

scraper_github
│   scraper:node_scrapper
│   db:mongo_db

scraper_platzi
│   scraper:python_scraper
│   db:mysql_db
```

### 💻 Commands docker
docker build ./proxy/ -t nginx_proxy
docker build ./app/ -t express_server

docker-compose -p "microservices-personal-web" up -d

docker container stop web proxy
docker container rm web proxy
docker image rm nginx_proxy express_server

docker container stop web && docker container rm web && docker image rm express_server
docker build ./app/ -t express_server && docker-compose -p "microservices-personal-web" up -d