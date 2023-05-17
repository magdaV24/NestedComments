import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { DataSource } from "typeorm";
import { schema } from "./schema/server";
import { Users } from "./entities/Users";
import { Posts } from "./entities/Posts";
import { Comments } from "./entities/Comments";
import dotenv from "dotenv";

const main = () => {
  dotenv.config();
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const database = new DataSource({
    type: "mysql",
    database: "nestedcomments",
    username: "root",
    password: DB_PASSWORD,
    logging: true,
    synchronize: false,
    entities: [Users, Posts, Comments],
  });
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  database
    .initialize()
    .then(() => {
      console.log("Database has been initialized");
    })
    .catch((err: any) => {
      console.error(err);
    });

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main();
