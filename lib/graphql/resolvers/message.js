const pubsub  = require('../subscriptions/index');
const Message = require('../../models/Message');

const resolvers = {
    Query : {
        message : async ({ MessageCreateInput }) => {
            pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC)
        }
    },
    Mutation : {
        createMessage : async (parent, data, extensions) => {
            console.log('here')
            const { value, created_by } = data.messageCreateInput;
            const message = await Message.create({
                value,
                created_by,
                chat_id : created_by,
            })

            pubsub.publish('NEW_MESSAGE', { newMessage: message });
            
            return message;
        }
    },
    Subscription : {
        newMessage: {
            subscribe: (first, second, third) => {
                console.log(first, second, third)
                return pubsub.asyncIterator(['NEW_MESSAGE'])
            }
        },
    }
    
}

module.exports = resolvers;