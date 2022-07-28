const subscribeValidationSchema = {
    schema: {
        body: {
            type: 'object',
            required: ['email'],
            properties: {
                'email': {
                    type: "string",
                }
            }
        }
    }
}

interface ISubscribeBody {
    email: string
} 

export {
    subscribeValidationSchema,
    ISubscribeBody
}