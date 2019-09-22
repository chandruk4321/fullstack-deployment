# fullstack-app-deployment
deploying fullstack app using docker with connection to mongodb.

## prerequisite
1. docker installed (my Docker version 19.03.2, build 6a30dfc)
2. docker-compose installed (my docker-compose version 1.17.1, build unknown)

## how to run?
1. docker build -t fullstackapp . => creates a application docker image & tags it with the name fullstackapp
2. modify mongo credentials in docker-compose.yaml
3. RUN docker-compose up -d

I use gulp for building my application, which generates dist/server/app.js that will be the starting point of my application.  The UI is served through the express server. Change the content according to your project setup. 


## verifying the installation
check your application logic if the mongo connection is successful


## Note: 
According to the port binding in docker-compose.yaml, the mongodb port is accessible only from localhost (127.0.0.1). In order to expose to external network either 


1. remove 127.0.0.1 from port binding in docker-compose

(or)

2. configure nginx or similar to do the reverse proxy.
