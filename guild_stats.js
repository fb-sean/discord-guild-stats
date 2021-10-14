const cron = require("node-cron"); // npm i node-cron
const Discord = require("discord.js"); // npm i discord.js

async function init(client) {
    cron.schedule("*/5 * * * *", () => { // Updates all 5m (discord ratelimit)


        const chCount = await client.channels.cache.get("ID"), // ID from Channel Count Channel
        mCount = await client.channels.cache.get("ID"), // ID from Member Count Channel
        uCount = await client.channels.cache.get("ID"), // ID from User Count Channel
        bCount = await client.channels.cache.get("ID"), // ID from Bot Count Channel
        rCount = await client.channels.cache.get("ID"); // ID from Role Count Channel

        const chCountMessage = `Channel Count: ${chCount.guild.channels.cache.size}`,  // Channel Count Message
        mCountMessage = `Member Count: ${mCount.guild.members.cache.filter(m => !m.user.bot).size}`,  // Member Count Message
        uCountMessage = `User Count: ${uCount.guild.memberCount}`,  // User Count Message
        bCountMessage = `Bot Count: ${bCount.guild.members.cache.filter(m => m.user.bot).size}`,  // Bot Count Message
        rCountMessage = `Role Count: ${rCount.guild.roles.cache.size}`,  // Role Count Message


        if(chCount) {
            if (chCount.permissionsFor(chCount.guild.me).has(['VIEW_CHANNEL', 'MANAGE_CHANNELS'])) {
                channel.setName(chCountMessage).catch((err) => {
                    console.log("Count Update Error (Channel Count):") // Log the Error
                    console.error(err)
                });
            }
        }
        if(mCount) {
            if (mCount.permissionsFor(mCount.guild.me).has(['VIEW_CHANNEL', 'MANAGE_CHANNELS'])) {
                channel.setName(mCountMessage).catch((err) => {
                    console.log("Count Update Error (Member Count):") // Log the Error
                    console.error(err)
                });
            }
        }
        if(uCount) {
            if (uCount.permissionsFor(uCount.guild.me).has(['VIEW_CHANNEL', 'MANAGE_CHANNELS'])) {
                channel.setName(uCountMessage).catch((err) => {
                    console.log("Count Update Error (User Count):") // Log the Error
                    console.error(err)
                });
            }
        }
        if(bCount) {
            if (bCount.permissionsFor(bCount.guild.me).has(['VIEW_CHANNEL', 'MANAGE_CHANNELS'])) {
                channel.setName(bCountMessage).catch((err) => {
                    console.log("Count Update Error (Bot Count):") // Log the Error
                    console.error(err)
                });
            }
        }
        if(rCount) {
            if (rCount.permissionsFor(rCount.guild.me).has(['VIEW_CHANNEL', 'MANAGE_CHANNELS'])) {
                channel.setName(rCountMessage).catch((err) => {
                    console.log("Count Update Error (Role Count):") // Log the Error
                    console.error(err)
                });
            }
        }
    });
}

module.exports = { init };
