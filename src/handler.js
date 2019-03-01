import {
  onBotGetPost,
  onBotJoinGroup
} from './default-bot-logic'

export default async event => {
  const { type } = event
  console.log('-------')
  console.log(event)
  console.log('-------')
  if (type === 'Message4Bot') {
    await onBotGetPost(event)
  } else if (type === 'BotJoinGroup') {
    let { bot, groupId } = event
    await onBotJoinGroup({
      bot,
      group: {
        id: groupId
      }
    })
  }
}
