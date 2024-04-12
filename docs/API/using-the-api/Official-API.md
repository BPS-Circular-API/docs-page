---
sidebar_position: -
---

# The Official API

This is the API that is hosted by me, completely free to use for everyone. Just don't abuse it :)

The Endpoint is **https://bpsapi.rajtech.me/**

To deliver the highest possible uptime, the API is being hosted on two different servers in two different locations.

:::info Tip

If you don't want to go into detail and simply want something direct to use, use https://bpsapi.rajtech.me

:::


The first one is being hosted in Qatar   
Second one is being hosted in Ashburn, USA

The first one is a fallback in most cases (more detail later)

## Routing

When you make a request to https://bpsapi.rajtech.me, most of the requests are forwarded to the proxy 2 (USA).

Even though there is added latency between the webserver and backend, the amount of latency reduction from backend <-> BPS's website makes it worth it for every type of request

THe second API is given more priority in every request other than the /circular-image/* 

This means that: 
- A `/list` request will:
  - Go to the second server (USA)
  - If it fails there (server down), it will be moved to the first server
- A `/latest` request will:
  - (follow the same as the `/list`)
- A `/circular-image` request will:
  - Go to the second server (QA)
  - If it fails there (server down), it will be moved to the second server


## Direct Access to any one API

Direct URLs have been created to provide you access to any one server in specific. THis is useful if you have your application based near to one in specific, and you would like to override the priority stuff that's being done.

If you want to access any one of them in specific -
- First one: https://bpsapi.rajtech.me/three/
- Second one: http://oracleone.nodes.rajtech.me:5001/ (prefer the first URL here for much lower latency)

## The webserver configuration I use

For transparency and to answer any other questions you might have which haven't been answered here, I'm choosing to make the webserver configuration public

I use the Caddy webserver, and the following is a Caddyfile

View it here: https://github.com/BPS-Circular-API/webserver-config/blob/main/Caddyfile
