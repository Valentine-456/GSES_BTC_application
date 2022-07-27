import { FastifyPluginAsync } from "fastify";
import Subscribtion from "../../database/models/subscribtion.model";

const subscribe: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
    fastify.get("/", getSubscription)
}

export default subscribe

// Controllers are here

async function getSubscription(request: any, reply: any) {
    await new Subscribtion("request").save();
    const emails = (await Subscribtion.findMany()).map(sub => sub.email)
    return { 
        status: "E-mail додано",
        emails: emails,
        length: emails.length
    };
}
