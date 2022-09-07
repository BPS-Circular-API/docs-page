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
8. Congratulations! You have successfully hosted the API on Pterodactyl!

---

Thanks for reading!