---
sidebar_position: 2
---


# Features

The BPS Circular API Discord Bot has a lot of features, and we'll be listing them here.

## Latest Circular

The `/circular latest [category]` command will send the latest circular posted to the BPS Website of the specified category.


![](/img/circular-latest.png)


## List of Circulars

The `/circular list [category]` command will send a list of all the circulars posted to the BPS Website of the specified category.


<Tabs>
<TabItem value="all-categories" label="All Categories" default>

![](/img/circular-list.png)

</TabItem>
<TabItem value="specific-category" label="Specific Category">

![](/img/circular-list-category.png)

</TabItem>
</Tabs>



## Search Circulars

The `/circular search [query]` fill find a matching circular based on the query and send it to the channel.


<Tabs>
<TabItem value="name" label="Circular Name" default>

Searching for `Grade X` will yield the following result:

First, you will be shown a list of circulars that match the query:

![](/img/circular-search-1.png)

Here is the list, it contains 3 circulars that match the query:

![](/img/circular-search-2.png)


Finally, upon selecting a circular, you will be shown the circular:

![](/img/circular-search-3.png)

</TabItem>


<TabItem value="code" label="Circular ID">

Searching for `1003` (the circular ID) will return the following result:

![](/img/circular-search-id.png)

</TabItem>

</Tabs>


## Automatic Reminders

The bot will automatically send a reminder to the set channel or User DMs every time a new circular is posted to the BPS Website.

<Tabs>
<TabItem value="channel" label="Channel" default>

Here, the bot has been set up to remind in the `#circulars` channel, with `/circular admin setup`

![](/img/circular-remind-channel.png)

</TabItem>
<TabItem value="dms" label="DM">

Here, the bot has been set up to remind you with in a DM with `/circular remindme`

![](/img/circular-remind-dm.png)

</TabItem>
</Tabs>

---

Thanks for reading, if you have any questions feel free to contact me on Discord: `@rajdave`

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";