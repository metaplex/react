var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { Connection, Metaplex } from '@metaplex/js';
import { useMemo, useState } from 'react';
export var useMetaplex = function () {
    var _a = __read(useState(new Connection('devnet')), 2), connection = _a[0], setConnection = _a[1];
    var _b = __read(useState(), 2), wallet = _b[0], setWallet = _b[1];
    var provider = useMemo(function () {
        Metaplex.init(connection, wallet);
        return Metaplex.getProvider();
    }, [connection, wallet]);
    return {
        provider: provider,
        connection: connection,
        setConnection: setConnection,
        wallet: wallet,
        setWallet: setWallet,
    };
};
//# sourceMappingURL=useMetaplex.js.map