import { InboundHandlerConfig } from '../../../xray-protos/core/config';

export class ListInboundsResponseModel {
    public inbounds: InboundHandlerConfig[];

    constructor(inbounds: InboundHandlerConfig[]) {
        this.inbounds = inbounds;
    }
}