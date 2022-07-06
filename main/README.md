## How to run flask application 

[How to run flask application guide](https://www.twilio.com/blog/how-run-flask-application)

```
sudo docker compose exec backend /bin/sh

sudo docker stop $(sudo docker ps -a -q)

sudo docker rm $(sudo docker ps -a -q)

sudo docker image rm $(sudo docker images -a -q)
```