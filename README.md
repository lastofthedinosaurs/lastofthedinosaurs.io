# lastofthedinosaurs.io
Personal website


## Run

NOTE: As this is a non-root container, the mounted files and directories must have the proper permissions for the UID `1001`.

```
mv .env.example .env
mkdir postgresql-persistence
sudo chown 1001:1001 postgresql-persistence/
docker compose up
```

## View

Open [http://localhost:3000](http://localhost:3000)