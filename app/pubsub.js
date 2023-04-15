const PubNub = require('pubnub');

// If you are creating a new blockchain then replace these credentials with your own 
// keys generated from your own account at https://pubnub.com
const credentials = {
  publishKey: 'pub-c-96d86001-d213-44a0-9fc8-56d8477c312f',
  subscribeKey: 'sub-c-18fa17d7-f0f5-47ca-b809-18ead17f24db',
  secretKey: 'sec-c-MWE4ZmI3NjYtMGIxMS00MjU2LWFmM2MtMzdmZTQ3ZjkyOTlj'
};

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN',
    TRANSACTION: 'TRANSACTION'
};

class PubSub {
    constructor({ blockchain, transactionPool, wallet }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
    
        this.pubnub = new PubNub(credentials);
        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
        this.pubnub.addListener(this.listener());
      }

    handleMessage(channel, message) {
        console.log(`Message received. Channel: ${channel}. Message: ${message}.`);

        const parsedMessage = JSON.parse(message);

        switch(channel) {
            case CHANNELS.BLOCKCHAIN:
                this.blockchain.replaceChain(parsedMessage, true, () => {
                    this.transactionPool.clearBlockchainTransactions({
                        chain: parsedMessage
                    });
                });
                break;
            case CHANNELS.TRANSACTION:
                if (!this.transactionPool.existingTransaction({
                    inputAddress: this.wallet.publicKey
                })) { 
                    this.transactionPool.setTransaction(parsedMessage);
                }
                break;
            default:
                return;    
        }
    }

    listener() {
        return {
          message: messageObject => {
            const { channel, message } = messageObject;
            console.log(`Message received. Channel: ${channel}. Message ${message}`);
            this.handleMessage(channel, message);
          }
        };
      }
    
    publish({ channel, message}) {
        this.pubnub.publish({ channel, message });
      }

    broadcastChain() {
        this.publish({
            channel: CHANNELS.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain)
        });
    }

    broadcastTransaction(transaction) {
        this.publish({
            channel: CHANNELS.TRANSACTION,
            message: JSON.stringify(transaction)
        });
    }

}

module.exports = PubSub;