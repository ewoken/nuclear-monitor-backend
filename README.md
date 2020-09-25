# Nuclear Monitor Backend

Nuclear monitor vous permet de consulter:
- le mix de production d'électricité
- l'état d'une centrale ou d'un réacteur

## Production environment

website url: https://nuclear-monitor.fr
backend url: https://nuclear-monitor-backend.herokuapp.com/

## Development

### Requirement
To run the project there are some requirements.

#### RTE API key
Create a RTE API key on https://data.rte-france.com (:warning: RTE website is blazing slow, a coffe? :coffe:)

RTE API Key at least needs access to:
- Unavailability Additional Information
- Actual Generation
- Consumption

to retrieve accesses you'll need to subscribe to each API.

Add the Base64 encoded API key in `config/default.json`.

#### Mongo DB
Install and Run [MongoDB](https://docs.mongodb.com/) 
or use the [docker image](https://hub.docker.com/_/mongo)

default database name: "devel", it can be changed in `config/default.json`.

### Run API

install dependencies:
`npm install`

run server:
`npm run watch`

expected logs:
```
info: Update unavailabilities
info: Server is listening on {"port":8080}
```

### Front end app
there is a front-end app at https://github.com/ewoken/nuclear-monitor

run front end with localhost API:
`REACT_APP_NUCLEAR_MONITOR_API=http://localhost:8080 npm run start`
