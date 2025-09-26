# Inbound Management Examples

This document provides examples of how to use the inbound management functionality in the XTLS SDK.

## Basic Usage

```typescript
import { XtlsApi } from 'xtls-sdk';

const api = new XtlsApi('127.0.0.1', '10085');

// List all existing inbounds
const inbounds = await api.handler.listInbounds();
if (inbounds.isOk) {
    console.log('Existing inbounds:', inbounds.data.inbounds.map(i => i.tag));
}

// Add a new inbound
const inboundConfig = {
    tag: 'my-new-inbound',
    receiverSettings: {
        // Network and listening configuration
    },
    proxySettings: {
        // Protocol-specific settings (VLESS, Trojan, etc.)
    }
};

const addResult = await api.handler.addInbound({ inbound: inboundConfig });
if (addResult.isOk) {
    console.log('Inbound added successfully');
} else {
    console.error('Failed to add inbound:', addResult.message);
}

// Remove an inbound
const removeResult = await api.handler.removeInbound({ tag: 'my-new-inbound' });
if (removeResult.isOk) {
    console.log('Inbound removed successfully');
} else {
    console.error('Failed to remove inbound:', removeResult.message);
}
```

## Error Handling

All inbound management methods follow the same error handling pattern:

```typescript
const result = await api.handler.addInbound({ inbound: config });

if (result.isOk) {
    // Operation successful
    console.log('Success:', result.data.success);
} else {
    // Operation failed
    console.error('Error Code:', result.code);
    console.error('Error Message:', result.message);
}
```

## Notes

- Inbound configurations must include proper `receiverSettings` and `proxySettings`
- The `tag` field must be unique among all inbounds
- Use `listInbounds({ isOnlyTags: true })` to get only tag names for better performance
- Removing an inbound will also remove all users associated with that inbound