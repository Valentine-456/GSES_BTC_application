import { FastifyPluginAsync } from "fastify";
import { request as fetch } from "undici";

const rate: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get("/", getCurrencyRate)
}

export default rate

// Controllers are here

async function getCurrencyRate(request: any, reply: any) {
    const url = "https://pro-api.coinmarketcap.com/v2/tools/price-conversion?amount=1&symbol=BTC&convert=UAH";
    const { statusCode, body } = await fetch(url, {
        headers: {
            "X-CMC_PRO_API_KEY": process.env.CURRENCY_API_KEY
        }
    })

    if(statusCode == 200) {
        const {data} = await body.json()
        return data[0].quote.UAH.price;
    }
    else {
        return reply.badRequest("Invalid status value")
    }
}

