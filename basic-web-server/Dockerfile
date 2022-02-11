# Version SO
FROM ubuntu:20.04

# Disabled user interactions
ENV DEBIAN_FRONTEND=noninteractive

# Update OS
RUN apt-get update

# Run packages
RUN apt-get install -yq --no-install-recommends \
    apt-utils \
    curl \
    git \
    apache2 \
    libapache2-mod-php7.4 \
    php7.4-cli \
    php7.4-json \
    php7.4-curl \
    php7.4-fpm \
    php7.4-gd \
    php7.4-ldap \
    php7.4-mbstring \
    php7.4-mysql \
    php7.4-pgsql \
    php7.4-soap \
    php7.4-sqlite3 \
    php7.4-xml \
    php7.4-zip \
    php7.4-intl \
    php-imagick \
    ssh \
    openssl \
    nano \
    graphicsmagick \
    imagemagick \
    ghostscript \
    mysql-client \
    iputils-ping \
    locales \
    ca-certificates \
    build-essential \
    screen \
    wget \
    git-core \
    libssl-dev \
    openssh-server

# Clear apt
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set locales
RUN locale-gen en_US.UTF-8 es_ES.UTF-8

# Crate directory https
RUN mkdir /var/www/html/https

# Create volume
VOLUME /www

# Configure PHP
COPY ./config/php.ini /etc/php/7.4/mods-available/
RUN phpenmod php

# Configure apache
RUN a2enmod rewrite expires
RUN echo "ServerName localhost" | tee /etc/apache2/conf-available/servername.conf
RUN a2enconf servername

# Configure vhost apache
COPY ./config/apache.conf /etc/apache2/sites-available/
RUN a2dissite 000-default
RUN a2ensite apache.conf

# Copy keys
RUN mkdir /root/.ssh
COPY ./keys/apache-selfsigned.key /etc/ssl/private/
COPY ./keys/apache-selfsigned.crt /etc/ssl/certs/

# Configure SSL
RUN a2enmod ssl

# Open ports
EXPOSE 22 80 443

# Run apache
CMD apachectl -D FOREGROUND