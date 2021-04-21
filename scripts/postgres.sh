docker rm postgres-db

sudo docker run -d \
    --name postgres-db \
    -e POSTGRES_PASSWORD=test123 \
    -p 5435:5432 \
    postgres

docker exec -d -it postgres-db psql -U postgres -c "CREATE DATABASE test";