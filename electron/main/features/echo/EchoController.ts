import { IPCControllerBase } from "../../cores/IPCControllerBase";
import { IpcMainInvokeEvent, IpcMainEvent } from "electron";
import { IPCControllerBaseV2 } from "../../cores/IPCControllerBaseV2";
import { MainLogger } from "../../cores/MainLog";
import { IMainLogger } from "../../cores/IMainLog";

/**
 * Echo controller for testing purpose
 */
class EchoController extends IPCControllerBaseV2<string, string> {
    _logger: IMainLogger | undefined = new MainLogger("Echo Controller");

    private _message: string;

    constructor() {
        super();
       
        this._message = "";
        // this.handle = this.handle.bind(this);
    }

    channel(): string {
        return 'echo';
    }

    async handle(event: IpcMainInvokeEvent, message: string): Promise<string> {
        
        this._message = message;
        this._logger?.log(this._message);
        return `[Echo]: ${message}`;
    }

    on(event: IpcMainEvent, message: string): void { }
}

export const echoController = new EchoController();