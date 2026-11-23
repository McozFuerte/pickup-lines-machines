import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Our embeddings are already neighbors; I only ran the query to see if you'd return.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
