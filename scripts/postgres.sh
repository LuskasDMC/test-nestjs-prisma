docker stop postgres-db
docker rm postgres-db
docker run --name postgres-db -d -p 5435:5432 -e POSTGRES_PASSWORD=test123 -e POSTGRES_DB=test postgres 