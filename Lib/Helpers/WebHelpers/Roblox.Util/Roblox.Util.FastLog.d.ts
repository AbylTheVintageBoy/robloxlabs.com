export declare const cache: {
    readonly DFLog: Map<string, number>;
    readonly DFFlag: Map<string, boolean>;
    readonly DFInt: Map<string, number>;
    readonly DFString: Map<string, string>;
};
export declare const FLog: Record<string, number>;
export declare const DFLog: (name: string) => number;
export declare const SFLog: Record<string, number>;
export declare const FFlag: Record<string, boolean>;
export declare const DFFlag: (name: string) => boolean;
export declare const SFFlag: Record<string, boolean>;
export declare const FInt: Record<string, number>;
export declare const DFInt: (name: string) => number;
export declare const SFInt: Record<string, number>;
export declare const FString: Record<string, string>;
export declare const DFString: (name: string) => string;
export declare const SFString: Record<string, string>;
export declare const FSettings: Array<string>;
export declare const d: {
    setup: boolean;
};
export declare const FASTLOG: (group: number, message: string) => void;
export declare const FASTLOG1: (group: number, message: string, arg0: any) => void;
export declare const FASTLOG2: (group: number, message: string, arg0: any, arg1: any) => void;
export declare const FASTLOG3: (group: number, message: string, arg0: any, arg1: any, arg2: any) => void;
export declare const FASTLOG4: (group: number, message: string, arg0: any, arg1: any, arg2: any, arg3: any) => void;
export declare const FASTLOG5: (group: number, message: string, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any) => void;
export declare const FASTLOGS: (group: number, message: string, sarg: string) => void;
export declare const FASTLOG1F: (group: number, message: string, arg0: number) => void;
export declare const FASTLOG2F: (group: number, message: string, arg0: number, arg1: number) => void;
export declare const FASTLOG3F: (group: number, message: string, arg0: number, arg1: number, arg2: number) => void;
export declare const FASTLOG4F: (group: number, message: string, arg0: number, arg1: number, arg2: number, arg3: number) => void;
export declare const FASTLOGNOFILTER: (group: number, message: string) => void;
export declare const FASTLOGNOFILTER2: (group: number, message: string, arg0: any, arg1: any) => void;
export declare const LOGGROUP: (group: string) => void;
export declare const LOGVARIABLE: (group: string, defaulton: number) => void;
export declare const DYNAMIC_LOGGROUP: (group: string) => void;
export declare const DYNAMIC_LOGVARIABLE: (group: string, defaulton: number) => void;
export declare const SYNCHRONIZED_LOGGROUP: (group: string) => void;
export declare const SYNCHRONIZED_LOGVARIABLE: (group: string, defaulton: number) => void;
export declare const FASTFLAG: (v: string) => void;
export declare const FASTFLAGVARIABLE: (v: string, defaulton: boolean) => void;
export declare const DYNAMIC_FASTFLAG: (v: string) => void;
export declare const DYNAMIC_FASTFLAGVARIABLE: (v: string, defaulton: boolean) => void;
export declare const SYNCHRONIZED_FASTFLAG: (v: string) => void;
export declare const SYNCHRONIZED_FASTFLAGVARIABLE: (v: string, defaulton: boolean) => void;
export declare const FASTINT: (v: string) => void;
export declare const FASTINTVARIABLE: (v: string, defaulton: number) => void;
export declare const DYNAMIC_FASTINT: (v: string) => void;
export declare const DYNAMIC_FASTINTVARIABLE: (v: string, defaulton: number) => void;
export declare const SYNCHRONIZED_FASTINT: (v: string) => void;
export declare const SYNCHRONIZED_FASTINTVARIABLE: (v: string, defaulton: number) => void;
export declare const FASTSTRING: (v: string) => void;
export declare const FASTSTRINGVARIABLE: (v: string, defaulton: string) => void;
export declare const DYNAMIC_FASTSTRING: (v: string) => void;
export declare const DYNAMIC_FASTSTRINGVARIABLE: (v: string, defaulton: string) => void;
export declare const SYNCHRONIZED_FASTSTRING: (v: string) => void;
export declare const SYNCHRONIZED_FASTSTRINGVARIABLE: (v: string, defaulton: string) => void;
