# MutantAPI
MercadoLibre API challenge

# Installation: 

1. Clone github repository: git clone https://github.com/EleazarTracana/MutantAPI.git
2. Select/enter project folder: cd MutantAPI.
3. Execute command npm start.

if you want to use your own database and don't share the current one:

3. Create MongoDB database with two empty collections: Humans,Mutants
4. Replace "conn" property in config.js file with your connection string.
5. Replace "databaseName" property in config.js file with your database name.

Note: Port 3000 should not be blocked by firewall.


# Resources:

Production API: http://ec2-52-15-184-39.us-east-2.compute.amazonaws.com:3000/xmen/mutant

1) /xmen/mutant
Verb: Post
Headers: none
Body Type: Json
Definition: returns 403 status if its human, 200 if its mutant and save data in database


2) /xmen/stats
Verb: Get
Headers: none
Body Type: none
Definition: ratio of mutants amoung humans


# Testing:

1. Execute command npm test.




