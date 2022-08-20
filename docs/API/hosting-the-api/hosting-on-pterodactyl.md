---
sidebar_position: 2
---
# Hosting with Pterodactyl

This tutorial will help you host the API on the Pterodactyl hosting panel.

:::warning Warning!

This is an advanced topic, and you should only proceed if you know what you're doing.

:::


## Requirements

* Pterodactyl hosting panel.
* The Pterodactyl [Uvicorn Egg](https://gist.github.com/isaackogan/f25e5bd044b551c24b56d1591aa6f724)

## Setup

1. If you didn't add the Uvicorn Egg into the Panel, do so now.
2. Create a new server with the Uvicorn Egg.
3. Use an unused port for the API.
4. Give it at least 512MB of RAM.
5. After the server is created and the auto-installation has completed, put in the API files from [Our Repository](https://github.com/BPS-Circular-API/api) 
6. Make sure the main API file is `main.py`
7. Click the run button. The server should start up
8. Now, You will need to route the API port using your web-server, here I will be using Apache on Ubuntu Server 20.04.

`example.com-le-ssl.conf` 
```apacheconf
<IfModule mod_ssl.c>
    <VirtualHost *:443>
        ServerName example.com
        DocumentRoot /var/www/example.com
        
        <Directory "/var/www/exampl.com">
            Require all granted
        </Directory>
        
    ProxyPass /api/ "http:<local-device-ip>:<api-port>"
    ProxyPassReverse /api/ "http:<local-device-ip>:<api-port>"
    
    SSLCertificateFile /etc/letsencrypt/live/raj.moonball.io/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/raj.moonball.io/privkey.pem
    Include /etc/letsencrypt/options-ssl-apache.conf
    
</VirtualHost>        
</IfModule>

```