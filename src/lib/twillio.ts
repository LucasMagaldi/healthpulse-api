import twillio from "twilio"
import { env } from "../env"

const accoundSid = env.TWILLIO_ACCOUNT_SID
const auth = env.TWILLIO_AUTH

export const twilioClient = twillio(accoundSid, auth)

