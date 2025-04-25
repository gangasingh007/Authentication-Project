import zod from "zod"

export const userInputverification = zod.object({
    email : zod.string(),
    password : zod.string(),
    name : zod.string(),
    isVerified : zod.boolean(),
    latsLogin : zod.date()
})