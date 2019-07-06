# API
## Run just the API
- Change directory to the browser client `cd api`
- Build a docker image `docker build -t api .`
- Start a docker container on port 8081 `docker run -d -p 8082:9000 --restart always api`
- visit [localhost:8082](http://localhost:8082)

# Browser client
## Run just the client
- Change directory to the browser client `cd browser-client`
- Build a docker image `docker build -t z .`
- Start a docker container on port 8081 `docker run -d -p 8081:80 --restart always z`
- visit [localhost:8081](http://localhost:8081)

# Run all the containers
- `docker-compose up -d`

Refresh images with this command: `docker-compose up --force-recreate --build`