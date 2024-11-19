import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'acc', 'prod']).default('dev'),
    PORT: z.coerce.number().default(8080)
})

const _env = envSchema.safeParse(process.env)

if(!_env.success) {
    console.log('😓 Invalid Environment variables', _env.error.format())

    throw new Error('Invalid Environment variables')
}

export const env = _env.data