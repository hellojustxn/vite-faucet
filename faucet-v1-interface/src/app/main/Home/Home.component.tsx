import Navbar from '../../shared/Navbar.component';
import Faucet from './Faucet.component';

const home = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <Navbar />
      <Faucet />
      <div className="flex flex-col px-10 max-w-7xl my-10 space-y-6 mx-auto">
        <div className="flex justify-start flex-col w-full">
          <div className=" text-lg font-bold">
            What is VITE?
          </div>
          <div className=" text-lg">
            Vite is a generalised decentralized application platform that meets the requirements of industrial applications for high throughput, low latency and scalability while taking into account security.
          </div>
        </div>
        <div className="flex justify-start flex-col w-full">
          <div className=" text-lg font-bold">
            What is a faucet?
          </div>
          <div className=" text-lg">
            Similar to a kitchen faucet, a crypto faucet distributes small amounts of cryptocurrencies for free or as a reward for completing easy tasks.
          </div>
        </div>
        {/* <div className=" text-lg text-black">
          Digital currency for the real world. * Instant transactions * Zero fees * Infinitely scalable
          To get started downloas Natrium on mobile to get a Nano Account
          or pick a wallet from the many options listed on Nano Links
          Visit nano.org to learn more.
        </div> */}
      </div>
    </div>
  );
};

export default home;