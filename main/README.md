## How to run flask application 

[How to run flask application guide](https://www.twilio.com/blog/how-run-flask-application)

```
sudo docker compose exec backend /bin/sh

sudo docker stop $(sudo docker ps -a -q)

sudo docker rm $(sudo docker ps -a -q)

sudo docker image rm -f $(sudo docker images -a -q)

 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '2222';  

 sudo mysql -u root -p

 sudo rabbitmqctl add_user admin 2222
```

possible errors:

[mysql_config not found](https://stackoverflow.com/questions/7475223/mysql-config-not-found-when-installing-mysqldb-python-interface)

[docker doesn't map port](https://medium.com/@rokinmaharjan/running-a-flask-application-in-docker-80191791e143)

[shared rabbit on local machine](https://stackoverflow.com/questions/39146230/accessing-rabbitmq-running-on-local-machine-from-docker-container)

[connect from docker compose](https://stackoverflow.com/questions/44658101/how-to-run-docker-containers-in-host-network-mode-using-docker-compose)