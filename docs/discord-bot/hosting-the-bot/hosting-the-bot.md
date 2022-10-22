---
sidebar_position: 3
---
# Hosting the Bot

Before continuing, make sure you have the Bot Account from the previous step.

Make sure You have Python 3.9 or above installed

Begin with installing the packages -
```bash
pip install -r requirements.txt 
```

If you don't already have the code downloaded, clone the repository
```bash
git clone https://github.com/BPS-Circular-API/discord-bot
```

CD into the directory
```bash
cd discord-bot
```
Edit the `config.ini` file and replace the token with your bot's token, also make sure to change stuff to your liking

```bash
nano ./data/config.ini
```



Run the bot with the following command
```bash
python bot.py
```


There you go! Your bot should now be running.

Feel free to edit the cogs or upload cogs of your own to `/cogs`. Happy programming!
