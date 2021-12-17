import { useState } from "react";
import A from "../../shared/A.component";
import { wallet } from '@vite/vitejs';
import { callContract, testContract, callOffChain } from '../../utils/vitescripts';
import Connector from '@vite/connector';
import provider from '@vite/vitejs-ws';
import { ViteAPI, abi, accountBlock } from '@vite/vitejs';


// import { Vite_TokenId, Vite_Token_Info } from "@vite/vitejs/distSrc/constant";

const Faucet = () => {
  const [addressInput, setAddressInput] = useState("");

  const status = {
    ERROR: "An error occurred. Please try again.",
    INVALID_ADDRESS: "Please enter a valid address.",
  }

  const changeAddress = (address: string) => {
    setAddressInput(address)
  }

  const submit = () => {
    console.log(addressInput)
    console.log(wallet.isValidAddress(addressInput))

    // const providerURL = 'wss://node-tokyo.vite.net/ws';
    // const providerURL = 'wss://node.vite.net/gvite/ws';
    const BRIDGE = 'ws://localhost:23457';
    // const providerTimeout = 60000;
    // const providerOptions = { retryTimes: 10, retryInterval: 5000 };
    // const WS_RPC = new provider(providerURL, providerTimeout, providerOptions);
    // const viteClient = new ViteAPI(WS_RPC, () => {
    //   console.log('client connected');
    // });
    // const BRIDGE = 'wss://biforst.vite.net';
    const vbInstance = new Connector({ bridge: BRIDGE });

    // callOffChain(vbInstance, 'sayHello', ['vite_c73a46f49acf8822ad8e901ca62f23ae01bc810c391d28e5b3'])

  }

  return (
    <div className=" bg-vite-primary">
      <div className=" h-96 mx-10 space-y-6 flex flex-col justify-center items-center">
        <div className="montserrat font-semibold text-gray-100 text-lg">
          VITE FAUCET
        </div>
        <div className="flex flex-col items-center">
          <div className="montserrat text-gray-100 text-lg">
            Get started by downloading the <A className="underline" href="https://app.vite.net/">Vite wallet mobile app</A>.
          </div>
          <div className="montserrat text-gray-100 text-lg">
            Visit <A className="underline" href="https://vite.org">Vite.org</A> for more information.
          </div></div>
        <input
          onChange={(
            ev: React.ChangeEvent<HTMLInputElement>,
          ): void => changeAddress(ev.target.value)}
          value={addressInput}
          type="text"
          placeholder="Enter your Vite Address"
          className="max-w-xl px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
        <button
          onClick={() => submit()}
          disabled={false}
          className=" bg-white p-2 rounded-md text-lg text-vite-primary font-semibold">
          Send VITE
        </button>
      </div>
    </div>
  );
};

export default Faucet;