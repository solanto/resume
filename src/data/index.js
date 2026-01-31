import { z } from "zod"

export const Time = z.union([
    z.int(),
    z.object({
        from: z.int(),
        to: z.int().optional(),
    })
])

export const Education = z.array(
    z.object({
        place: z.string(),
        time: Time,
        certification: z.union([
            z.string(),
            z.object({
                title: z.string(),
                extra: z.string(),
            }),
        ]),
        details: z.array(
            z.union([
                z.string(),
                z.object({
                    title: z.string(),
                    content: z.string(),
                })
            ])
        )
    })
)

export const Experience = z.array(
    z.object({
        place: z.string(),
        positions: z.array(
            z.object({
                time: Time,
                title: z.string(),
                department: z.string().optional(),
                details: z.array(z.string()),
            })
        )
    })
)

export const Meta = z.object({
    name: z.string(),
    email: z.string().optional(),
    phone: z.string().optional(),
    location: z.string(),
    websites: z.array(z.url()),
    personal: z.string()
})

export const TechnicalSkills = z.array(
    z.object({
        headline: z.string(),
        details: z.string()
    })
)

export const Data = z.object({
    education: Education,
    experience: Experience,
    meta: Meta,
    technicalSkills: TechnicalSkills
})
