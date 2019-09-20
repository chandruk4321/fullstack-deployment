# mongodb-deployment
deploying mongodb using docker with authentication enabled. The default login credentials are served through environment variables in docker-compose file. 

## how to run?
1. change the mongodb credentials in install_mongo.sh
2. RUN ./install_mongo.sh

## verifying the installation
1. RUN docker exec -it mongocontainername bash
2. mongo -u mongouser -p --authenticationDatabase=admin => provice password when prompted
3. RUN 'show dbs' should display the list of databases


## Note: 
According to the port binding in docker-compose.yaml, the mongodb port is accessible from any ip address. In order to add extra level of security either

1. bind only to the ip address(s) from where you would like to access the mongoDB

(or)

2. configure firewall at docker host, so that only set of ip addresses can access mongoDB port
