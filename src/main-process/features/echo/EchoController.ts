import { IPCControllerBase } from "../../cores/IPCControllerBase";

import { IPCControllerBaseV2 } from "../../cores/IPCControllerBaseV2";

import { IMainLogger } from "../../cores/IMainLog";


import { IpcMainInvokeEvent, IpcMainEvent } from "electron";
import { MainLogger } from "@/main-process/cores/MainLog";
import { globalAppDatabase } from "@/main-process/database/AppDatabase";
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

        globalAppDatabase.getConnection(); // Ensure the database connection is established
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