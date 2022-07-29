import fastify, { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { request as fetch } from "undici";
import Subscribtion from "../../database/models/subscribtion.model";
import { sendMail } from "../../utils/emails";

const sendEmails: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.post("/", sendEmailsHandler)
}

export default sendEmails

// Controllers are here

async function sendEmailsHandler(request: FastifyRequest, reply: FastifyReply) {
    const url = "https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=1&symbol=BTC&convert=UAH";
    const { statusCode, body } = await fetch(url, {
        headers: {
            "X-CMC_PRO_API_KEY": process.env.CURRENCY_API_KEY
        }
    })

    
    const {data} = await body.json()
    const text = data[0].quote.UAH.price.toString();
   

    const subject = "Exchange rate: BTC to UAH"
    
    const subs = await Subscribtion.findMany();
    try {
        const mailingList = await Promise.allSettled(subs.map(sub => sendMail({subject, text, to: sub.email}))) 
    } catch (error){
        console.log(error)
    }
    return {status: "success", message: "Mailing is sent out!"}
}