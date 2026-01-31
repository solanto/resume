import * as Schemas from "."
import { z } from "zod"

export type Time = z.infer<typeof Schemas.Time>
export type Education = z.infer<typeof Schemas.Education>
export type Experience = z.infer<typeof Schemas.Experience>
export type Meta = z.infer<typeof Schemas.Meta>
export type TechnicalSkills = z.infer<typeof Schemas.TechnicalSkills>

type Data = z.infer<typeof Schemas.Data>
export default Data