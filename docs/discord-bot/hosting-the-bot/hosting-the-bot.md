---
sidebar_position: 3
---
# Hosting the Bot

Before continuing, make sure you have the Bot Account from the previous step.

Make sure You have Python 3.9 or above installed

If you don't already have the code downloaded, clone the repository
```bash
git clone https://github.com/BPS-Circular-API/discord-bot
```
Or just download the zip file from [here](https://bpsapi.rajtech.me/r/discord-bot)


CD into the directory
```bash
cd discord-bot
```


Install the packages -
```bash
pip install -r requirements.txt 
```



Edit the `config.ini` file and replace the token with your bot token, also make sure to modify the config to your liking

```bash
nano ./data/config.ini
```


Run the bot with the following command
```bash
python bot.py
```


There you go! Your bot should now be running.

Feel free to edit the cogs or upload cogs of your own to `/cogs`. Happy programming!
