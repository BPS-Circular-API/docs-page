---
sidebar_position: 2
---


# Features

The BPS Circular API Discord Bot has a lot of features, and we'll be listing them here.

## Latest Circular

The `/circular latest [category]` command will send the latest circular posted to the BPS Website of the specified category.




<Tabs>
<TabItem value="general" label="General" default>

![](/img/circular-latest-general.png)

</TabItem>
<TabItem value="ptm" label="PTM">

![](/img/circular-latest-ptm.png)

</TabItem>
<TabItem value="exam" label="Exam">

![](/img/circular-latest-exam.png)

</TabItem>
</Tabs>



## List of Circulars

The `/circular list [category]` command will send a list of all the circulars posted to the BPS Website of the specified category.


<Tabs>
<TabItem value="general" label="General" default>

![](/img/circular-list-general.png)

</TabItem>
<TabItem value="ptm" label="PTM">

![](/img/circular-list-ptm.png)

</TabItem>
<TabItem value="exam" label="Exam">

![](/img/circular-list-exam.png)

</TabItem>
</Tabs>



## Search Circulars

The `/circular search [query]` fill find a matching circular based on the query and send it to the channel.


<Tabs>
<TabItem value="cyber" label="Cyber" default>

Searching for `cyber` will return the following result:

![](/img/circular-search-cyber.png)

</TabItem>
<TabItem value="mobile" label="Mobile">

Searching for `mobile` will return the following result:

![](/img/circular-search-mobile.png)

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

Thanks for reading, if you have any questions feel free to contact me on Discord: `Raj Dave#3215`

import Tabs			from "@theme/Tabs";
import TabItem		from "@theme/TabItem";