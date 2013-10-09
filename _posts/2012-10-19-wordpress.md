---
layout: post
title: WordPress Plugin
categories: integrations
author: Eric Fung
summary: Plugins for installing KISSmetrics on WordPress are available.
---
The official KISSmetrics WordPress plugin is now available ([download link][wp-plugin]). The source is also on [Github][github].

When you use this plugin, you *do not need to follow our usual instructions for installing the JavaScript snippet.* The plugin takes care of that for you, and more.

<a name="setup"></a>
# Setup Instructions

1. [Download the plugin][wp-plugin] and extract the contents.
2. Upload the entire `kissmetrics` folder to your `/wp-content/plugins/` directory.
3. In the WordPress admin dashboard, go to the `Plugins` menu and activate the plugin.
4. Go to `Settings` menu, then to the KISSmetrics settings.
5. Add your API key here and select which events you would like to have automatically tracked.

![Screenshot][wp-settings]

<a name="integration-details"></a>
# Integration Details

## Registration

Event Name | Properties | Identity
-----------| ---------- | --------
`Viewed Signup Page` |  | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Signed In` |  | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Created Account / Registered` |  | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Facebook Connect'd` |  | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Facebook Logout` |  | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)

## Activity

Event Name | Properties | Identity
-----------| ---------- | --------
`Viewed Blog Homepage` |  | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Viewed Post` | `ID`: the post ID viewed | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
 | `Title`: the title of the post |
 | `Categories`: an array of the post's categories |
`Viewed Page` | `ID`: the page ID viewed | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
 | `Title`: the title of the post |
`Article Link Clicked` | `Title`: the title of the link clicked | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
 | `Page`: the title of the post or page containing the link |
`Comment Link Clicked` | `Title`: the title of the comment clicked | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
 | `Page`: the title of the post or page containing the link |
 | |
`Tweet` | `Shared URL`: URL being tweeted  | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Twitter Follow` | `Username`: Username of the new Twitter follower | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Like` | `Shared URL`: URL of the article being Facebook Liked | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
`Unlike` | `Shared URL`: URL of the article being Facebook Unliked | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)
 | |
`Searched Site` | `WordPress Search Query`: the search terms from your site's *vanilla* WordPress search engine | JavaScript anonymous ID or WordPress login (`<?php echo $current_user->user_login ?>`)


## Comments

These events apply to WordPress' vanilla commenting system.

Event Name | Properties | Identity
-----------| ---------- | --------
`Commented` | `Commenter name`: the commenter's name | The commenter's email address
 | `Commenter email`: the commenter's email |
 | `Comment`: the text of the comment |

[js-auto]: /apis/javascript#events-automatically-tracked
[wp-plugin]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/wordpress/kissmetrics.zip
[github]: https://github.com/kissmetrics/km-wordpress
[wp-settings]: https://s3.amazonaws.com/kissmetrics-support-files/assets/integrations/wordpress/wp-instructions.png