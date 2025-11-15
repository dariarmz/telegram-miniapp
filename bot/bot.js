const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "8211921398:AAGC95behJbzlVWvYXMqPt41Mk6ZVzGSi4Q"; // вставь токен BotFather
const APP_URL = "https://telegram-miniapp-blond.vercel.app"; // URL с Vercel

const bot = new TelegramBot(TOKEN, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📚 Открыть базу знаний", web_app: { url: APP_URL } }]
      ]
    }
  };
  bot.sendMessage(chatId, "Нажми, чтобы открыть Mini App:", opts);
});

console.log("Bot started. Send /start to the bot.");
