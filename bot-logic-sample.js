/**
 * bot logic sample
 */

/**
 * when chat group got new post
 * @param {string} text post text content
 * @param {object} group info
 * @param {Bot} bot instance
 */

/*
exports.onBotGetPost = async ({
  text, group, bot, userId
}) => {
  if (!text.includes(`![:Person](${bot.id})`)) {
    return
  }

  bot.sendMessage(
    group.id,
    {
      text: `![:Person](${userId}), Hello, you just posted "${text}"`
    }
  )
}
*/

/**
 * when bot join chat group
 * @param {object} group info
 * @param {Bot} bot instance
 */
/*
exports.onBotJoinGroup = async ({
  bot,
  group
}) => {
  await bot.sendMessage(
    group.id,
    {
      text: `Hello, I am a chatbot. Please reply "![:Person](${bot.id})" if you want to talk to me.`
    }
  )
}
*/
