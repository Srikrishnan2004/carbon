import type { Redis as RedisType } from "@upstash/redis";
import { Redis } from "@upstash/redis";

// Use environment variables or placeholders for Redis configuration
const UPSTASH_REDIS_REST_URL =
  process.env.UPSTASH_REDIS_REST_URL ||
  "https://capital-sponge-24314.upstash.io";
const UPSTASH_REDIS_REST_TOKEN =
  process.env.UPSTASH_REDIS_REST_TOKEN ||
  "AV76AAIncDE1ZDg4YWVjODRhZmI0ZTBkOGZlMjdiNzU5ZjdlMzg3Y3AxMjQzMTQ";

let redis: RedisType | null = null;

declare global {
  var __redis: RedisType | undefined;
}

// Initialize Redis with hardcoded values
if (UPSTASH_REDIS_REST_URL && UPSTASH_REDIS_REST_TOKEN) {
  if (process.env.VERCEL_ENV === "production") {
    redis = new Redis({
      url: UPSTASH_REDIS_REST_URL,
      token: UPSTASH_REDIS_REST_TOKEN,
    });
  } else {
    if (!global.__redis) {
      global.__redis = new Redis({
        url: UPSTASH_REDIS_REST_URL,
        token: UPSTASH_REDIS_REST_TOKEN,
      });
    }
    redis = global.__redis;
  }
}

export default redis;
