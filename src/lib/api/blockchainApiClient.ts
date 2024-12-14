import axios, {type AxiosInstance, type AxiosResponse} from 'axios';
import Blockchain from "$lib/types/blockchain";
import config from "$lib/config";

export class BlockchainApiClient {
    private readonly baseUrl = config.blockchainApiBaseUrl;
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
    }

    async getTypes(): Promise<Blockchain.Types.Response> {
        return (await this.client.get<Blockchain.Types.Response>('/types')).data;
    }
}

export default BlockchainApiClient;