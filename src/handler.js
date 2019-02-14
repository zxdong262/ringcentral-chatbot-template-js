import {
  onBotGetPost,
  onBotJoinGroup
} from './default-bot-logic'
import { Bot } from 'ringcentral-chatbot/dist/models'

export default async event => {
  const { type } = event
  console.log('-------')
  console.log(event)
  console.log('-------')
  if (type === 'Message4Bot') {
    await onBotGetPost(event)
  } else if (type === 'GroupJoined') {
    const botId = event.message.ownerId
    const bot = await Bot.findByPk(botId)
    const groupId = event.message.body.id
    await onBotJoinGroup({
      bot,
      group: {
        id: groupId
      }
    })
  }
}
