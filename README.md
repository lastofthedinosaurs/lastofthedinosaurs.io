# lastofthedinosaurs.io
Personal website


## Run

NOTE: As this is a non-root container, the mounted files and directories must have the proper permissions for the UID `1001`.

```
cp .env.example .env
export NODE_ENV="development"
docker-compose up -d --force-recreate --no-deps --build db
npm install
npx prisma db push
npm run dev
```

## View

Open [http://localhost:3000](http://localhost:3000)