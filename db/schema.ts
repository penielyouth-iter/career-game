import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const appConfig = sqliteTable("app_config", {
  id: integer("id").primaryKey(),
  version: integer("version").notNull().default(1),
  dataJson: text("data_json").notNull(),
  updatedAt: text("updated_at").notNull(),
});
export const gameSession = sqliteTable("game_session", {
  id: text("id").primaryKey(),
  revision: integer("revision").notNull().default(0),
  stateJson: text("state_json").notNull(),
  updatedAt: text("updated_at").notNull(),
});
export const actionLog = sqliteTable("action_log", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  actionType: text("action_type").notNull(),
  payloadJson: text("payload_json").notNull(),
  createdAt: text("created_at").notNull(),
});

