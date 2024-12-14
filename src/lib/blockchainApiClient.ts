import axios, {type AxiosInstance, type AxiosResponse} from 'axios';
import Blockchain from "$lib/types/blockchain";

export class BlockchainApiClient {
    private readonly baseUrl = 'https://blockchain-gateway-nova.nursery.reitnorf.com';
    private readonly client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        this.client.interceptors.response.use((response: AxiosResponse) => {
            return response.data;
        }, (error) => {
            console.error('API Error:', error.response?.data || error.message);
            return Promise.reject(error.response?.data || error);
        } );
    }

    getTypes(): Promise<AxiosResponse<Blockchain.Types.Response>> {
        return this.client.get<Blockchain.Types.Response>('/types');
    }
}