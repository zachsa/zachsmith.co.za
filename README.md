# API
# Browser client
## Run the build
- Change directory to the browser client `cd browser-client`
- Build a docker image `docker build -t z .`
- Start a docker container on port 8081 `docker run -d -p 8081:80 --restart always z`
- visit [localhost:8080](http://localhost:8081)