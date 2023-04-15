# dobecoin
# Proof-Of-Work Blockchain Example

## EXAMPLE NODES:

1) https://dobecoin-example-node-1.herokuapp.com/
2) https://dobecoin-example-node-2.herokuapp.com/
3) https://dobecoin-example-node-3.herokuapp.com/


## DEPLOY NODE INSTANCE

### Suggested Method
1) Clone this repo to a local folder
2) Initialise git in cloned folder: $ git init
2) Open/Create Heroku Account & Install Heroku CLI
3) Create project in heroku: $ heroku create
4) Push to heroku: $ git push heroku main
5) Open application: $ heroku open

## BLOCKCHAIN RULES:

### CHAIN :  BLOCK(0) + BLOCK(1) + BLOCK(2) + .... + BLOCK(n)
### BLOCK(0) = genesis block
### BLOCK(i>0) : { timestamp(i), lastHash(i), data(i), hash(i), nonce(i), difficulty(i) }

#### Chain validation rules for a new block:
1) correct block fields are present
2) lastHash value must match the previous block hash ( lastHash(i) === hash(i-1) )
3) must have a valid Hash: hash(i) = generatedHash(timestamp(i),data(i),lastHash(i))

#### Chain replacement rules:
1) new chain must be longer than existing chain
2) new chain must contain valid data

#### Proof Of Work
Difficulty level adjusts through speed of addition of previous block
51% exclusion

#### Publish & Submit
1) transactions as validated
2) blocks as completed

#### Wallets
1) contain key pair: private & public

#### Transactions
1) input field
2) output map
3) remaining balance

#### Transaction Validation:
1) block shouldn't contain duplicate miner rewards
2) transactions should be formatted correctly:
    i) input signature valid
    ii) output map foratted correctly
3) input balances must be valid and corect with history
4) no duplicate transactions



