import { toJSONSchema } from "zod"
import * as Schemas from "../src/data"
import { writeFile } from "node:fs/promises"

for (const [name, schema] of Object.entries(Schemas)) {
    writeFile(
        `dev/${name.toLowerCase()}.schema.json`,
        JSON.stringify(toJSONSchema(schema, { reused: "ref" }))
    )
}