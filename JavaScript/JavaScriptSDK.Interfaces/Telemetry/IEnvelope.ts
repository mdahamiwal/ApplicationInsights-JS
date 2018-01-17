﻿/// <reference path="./ISerializable.ts" />

module Microsoft.ApplicationInsights {

    "use strict";

    export interface IEnvelope extends ISerializable {
        ver: number;
        name: string;
        time: string;
        sampleRate: number;
        seq: string;
        iKey: string;
        tags: { [name: string]: any };
        data: any;
    }
}
