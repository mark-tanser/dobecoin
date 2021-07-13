# dobecoin
# Proof-Of-Work Blockchain Example

## CHAIN :  BLOCK(0) + BLOCK(1) + BLOCK(2) + .... + BLOCK(n)

### BLOCK(i) : { timestamp(i), lastHash(i), data(i), hash(i), nonce(i), difficulty(i) }

#### Chain validation rules for a new block:
1) correct block fields are present
2) lastHash value must match the previous block hash ( lastHash(i) === hash(i-1) )
3) must have a valid Hash: hash(i) = generatedHash(timestamp(i),data(i),lastHash(i))

### BLOCK(0) = genisis block

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

transaction pool
transaction miner
-reward transaction

#### Transaction Validation:
1) block shouldn't contain duplicate miner rewards
2) transactions should be formatted correctly:
    i) input signature valid
    ii) output map foratted correctly
3) input balances must be valid and corect with history
4) no duplicate transactions

