---
sidebar_position: 4
---

# Hosting on Pterodactyl (Optional)

You can also host it on the Pterodactyl hosting panel.

:::warning Pterodactyl Specific Guide

Proceed only if you have the Pterodactyl hosting panel.

:::

## Requirements

* Pterodactyl hosting panel.
* The Pterodactyl [Python Egg](https://github.com/parkervcp/eggs/blob/master/bots/discord/discord.py/egg-discord-py-generic.json)

## Setup

1. If you didn't add the Python Egg into the Panel, do so now.
2. Create a new server with the Python Egg.
3. Use a random port for the API, it does not matter.
4. Give it at least 256MB of RAM.
5. After the server is created and the auto-installation has completed, put in the Bot files from [Our Repository](https://bpsapi.rajtech.me/r/discord-bot) 
6. You may need to connect through SFTP to upload the folders and the `data.db` file.
7. Make sure the main bot file is `bot.py`
8. Configure `./data/config.ini` to your liking.
9. Click the run button. It should start running.

There you go! Your Discord Bot is now running and ready to use.