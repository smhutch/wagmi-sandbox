import { providers } from "ethers";
import { createClient, useAccount, WagmiConfig } from "wagmi";

function Example() {
  const account = useAccount();

  return (
    <>
      {account.isLoading ? (
        <h1 className="blue">Loading</h1>
      ) : (
        <h2 className="red">Idle</h2>
      )}
      <code>
        <pre>{JSON.stringify(account, null, 2)}</pre>
      </code>
    </>
  );
}

const client = createClient({
  autoConnect: false,
});

export default function IndexPage() {
  return (
    <WagmiConfig client={client}>
      <div
        style={{
          display: "grid",
          placeContent: "center",
          height: "100vh",
          maxWidth: "65ch",
        }}
      >
        <Example />
      </div>
    </WagmiConfig>
  );
}
