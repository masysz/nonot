const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7812576129:AAHxLQtfRlX-J5HnkfhED3X-Bx_VHiU_eWA";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://game.pallavempire.fun";
const community_link = "https://t.me/pallavaempire";
const discussion_link = "https://t.me/pallavaempire";


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName}! I am @psllvabot , Welcctx.replyWithMarkdown(`*Hey, ${userName}💞🌟!*

*Welcome to Pallava Empire!🥳*

You have the opportunity to build a new empire and make real money!💰

Invite friends to compete, join lotteries, and level up faster!🚀.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "✌️ Join our Community ✌️", url: community_link }],
              [{ text: " 🚁 nHelp 🚁", callback_data: 'help' }],
              [{ text: " 🌟 Play ✨", web_app: { url: urlSent } }]
            ]

        },
    });
});

bot.action('help', (ctx) => {
    const urlSent = `${web_link}?ref=${ctx.from.id}`;
    ctx.reply('What\'s the goal?\n\nEarn coins, upgrade character, compete with players, and invest! AirDrop is coming soon...👀\n\n🔵Earn\nTap the screen to mine coins. You can never have too many!\n\n🔝Improve\nUpgrade your character and it\'s business to increase passive income and boost your level!\n\n📈Profit per hour\nEarn for 3 hours while you are not in the game.\n\n👥Friends\nInvite friends to develop empires together! You will earn bonuses for invited friends and their achievements in the game.\n\n⚡️Negotiations\nCompete with players and win coins!\n\n📋Quests\nComplete simple tasks every day and receive rewards!\n\n🏛Stock Exchange\nInvest your coins in various funds to achieve super returns! However, remember that you can either make a profit or lose your deposit.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: "Join our Community", url: community_link }],
                [{ text: "Join our Discussion", url: discussion_link }],
                [{ text: "👋 Start now!", web_app: { url: urlSent } }]
            ]
        }
    });
});

app.listen(3002, () => {
    console.log("server is me and now running")
});
