import { InboundHandlerConfig } from '../xray-protos/core/config';

/**
 * Example inbound configuration for VLESS protocol
 */
export const createVlessInbound = (tag: string, port: number): InboundHandlerConfig => ({
    $type: 'xray.core.InboundHandlerConfig',
    tag,
    receiverSettings: {
        $type: 'xray.common.serial.TypedMessage',
        type: 'xray.transport.internet.Config',
        value: new Uint8Array() // This would be properly configured in real usage
    },
    proxySettings: {
        $type: 'xray.common.serial.TypedMessage', 
        type: 'xray.proxy.vless.inbound.Config',
        value: new Uint8Array() // This would be properly configured in real usage
    }
});

/**
 * Example inbound configuration for Trojan protocol
 */
export const createTrojanInbound = (tag: string, port: number): InboundHandlerConfig => ({
    $type: 'xray.core.InboundHandlerConfig',
    tag,
    receiverSettings: {
        $type: 'xray.common.serial.TypedMessage',
        type: 'xray.transport.internet.Config', 
        value: new Uint8Array() // This would be properly configured in real usage
    },
    proxySettings: {
        $type: 'xray.common.serial.TypedMessage',
        type: 'xray.proxy.trojan.Config',
        value: new Uint8Array() // This would be properly configured in real usage
    }
});

/**
 * Example inbound configuration for Shadowsocks protocol
 */
export const createShadowsocksInbound = (tag: string, port: number): InboundHandlerConfig => ({
    $type: 'xray.core.InboundHandlerConfig', 
    tag,
    receiverSettings: {
        $type: 'xray.common.serial.TypedMessage',
        type: 'xray.transport.internet.Config',
        value: new Uint8Array() // This would be properly configured in real usage
    },
    proxySettings: {
        $type: 'xray.common.serial.TypedMessage',
        type: 'xray.proxy.shadowsocks.Config',
        value: new Uint8Array() // This would be properly configured in real usage
    }
});