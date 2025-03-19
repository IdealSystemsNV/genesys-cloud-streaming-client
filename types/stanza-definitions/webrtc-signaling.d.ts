import { DefinitionOptions } from 'stanza/jxt';
import { GenesysWebrtcJsonRpcMessage } from '../types/interfaces';
import { Stanzas } from 'stanza';
export interface Propose {
    sessionId: string;
    conversationId: string;
    autoAnswer: boolean;
    persistentConversationId?: string;
    originalRoomJid?: string;
    fromUserId?: string;
    sdpOverXmpp?: boolean;
}
declare module 'stanza/protocol' {
    interface IQPayload {
        genesysWebrtc?: GenesysWebrtcJsonRpcMessage;
    }
    interface AgentEvents {
        'iq:set:genesysWebrtc': Stanzas.ReceivedIQ & {
            genesysWebrtc: GenesysWebrtcJsonRpcMessage;
        };
    }
}
export declare const definitions: DefinitionOptions<any>[];
