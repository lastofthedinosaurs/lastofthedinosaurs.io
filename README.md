# lastofthedinosaurs.io
Personal website


## Run

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