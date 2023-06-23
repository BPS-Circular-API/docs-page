---
sidebar_position: 4
---
# Apache WebServer setup

This tutorial will help you host the API on the Pterodactyl hosting panel.

:::warning Warning!

This is an advanced topic, and you should only proceed if you know what you're doing.

:::


## Requirements

* Apache2 WebServer
* Ubuntu 20.04+

## Setup

1. Install Apache2 on your Ubuntu Server 20.04
    ```bash
    $ sudo apt install apache2
    ```
2. cd into `/etc/apache2/sites-enabled`
    ```bash
    $ cd /etc/apache2/sites-enabled
    ```
3. Create a new file called `example.com.conf`
    ```bash
    $ nano example.com.conf
    ```

4. After opening the `example.com.conf` file, add this. Make sure to replace `example.com` with your domain name.
   
    ```apacheconf title="example.com.conf"
    <VirtualHost *:443>
        ServerName bpsapi.rajtech.me
        DocumentRoot /var/www/bpsapi.rajtech.me

        <Directory "/var/www/bpsapi.rajtech.me">
                Require all granted
        </Directory>

        RewriteEngine on
        RewriteCond %{SERVER_NAME} =bpsapi.rajtech.me
        RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
   
        Include /etc/letsencrypt/options-ssl-apache.conf
   
        SSLCertificateFile /etc/letsencrypt/live/bpsapi.rajtech.me/fullchain.pem
        SSLCertificateKeyFile /etc/letsencrypt/live/bpsapi.rajtech.me/privkey.pem
    </VirtualHost>
    ```
   
5. Save the file and exit.
6. Create a new file in the same directory called `example.com-le-ssl.conf`
    
   ```bash
    $ nano example.com-le-ssl.conf
    ```
7. After opening the `example.com-le-ssl.conf` file, add this. Make sure to replace `example.com` with your domain name.
    
   ```apacheconf title="example.com-le-ssl.conf"
    <IfModule mod_ssl.c>
    <VirtualHost *:443>
        ServerName bpsapi.rajtech.me
        DocumentRoot /var/www/bpsapi.rajtech.me

        <Directory "/var/www/bpsapi.rajtech.me">
                Require all granted
        </Directory>

        ProxyPass "/api" "http://192.168.100.80:5641"
        ProxyPassReverse "/api" "http://192.168.100.80:5641"


        SSLCertificateFile /etc/letsencrypt/live/bpsapi.rajtech.me/fullchain.pem
        SSLCertificateKeyFile /etc/letsencrypt/live/bpsapi.rajtech.me/privkey.pem
        Include /etc/letsencrypt/options-ssl-apache.conf
        </VirtualHost>
        </IfModule>

    ```
8. Remember to point the `ProxyPass` and `ProxyPassReverse` to your API's correct node and port. Also make sure to change the `Alias` to your correct volume.
9. Find the Pterodactyl absolute path of the API's PNG output folder and put it in the `Alias` and `Directory` tags.

10. Install Let's Encrypt on your Ubuntu Server 20.04
    ```bash
    $ sudo apt install certbot python3-certbot-apache
    ```
11. Run the following command to get a certificate for your domain.
    ```bash
    $ sudo certbot -d example.com --manual --preferred-challenges dns certonly
    ```
    
12. You will have to add a TXT record to your domain's DNS records. You can find the record in the output of the command.
13. After adding the record, press enter to continue.
14. After the certificate is issued, you can remove the TXT record from your DNS records.
15. Now, You may restart Apache2 to apply the changes.
    ```bash
    $ sudo systemctl restart apache2
    ```
16. You're done! You can now access the API at `https://example.com/api`


---

Thanks for reading!