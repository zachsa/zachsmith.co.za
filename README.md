# API
## Run just the API
- Change directory to the browser client `cd api`
- Build a docker image `docker build -t api .`
- Start a docker container on port 3000 `docker run -d -p 3000:3000 --restart always api`
- visit [localhost:8082](http://localhost:3000)

# Browser client
## Run just the client
- Change directory to the browser client `cd browser-client`
- Build a docker image `docker build -t c .`
- Start a docker container on port 3001 `docker run -d -p 3001:80 --restart always c`
- visit [localhost:8081](http://localhost:3001)

# Run all the containers
- `docker-compose up -d`

Refresh images with this command: `docker-compose up --force-recreate --build`