FROM tiangolo/uwsgi-nginx-flask:python3.9

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt 

COPY . /app

EXPOSE 5000
