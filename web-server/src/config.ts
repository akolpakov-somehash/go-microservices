import * as dotenv from 'dotenv';
dotenv.config();

interface Env {
    CATALOG_GRPC_SERVER: string
    QUOTE_GRPC_SERVER: string
    SERVER_PORT: string
    DEFAULT_USER_ID: number
}

const env: Env = {
    CATALOG_GRPC_SERVER: process.env.CATALOG_GRPC_SERVER || 'localhost:50051',
    QUOTE_GRPC_SERVER: process.env.QUOTE_GRPC_SERVER || 'localhost:50052',
    SERVER_PORT: process.env.SERVER_PORT || '3000',
    DEFAULT_USER_ID: -1,
};

export default env;
