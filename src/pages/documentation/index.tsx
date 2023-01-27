const Documentation = () => {
  return (
    <>
      <div>
        <h2>Affected Component Types</h2>
        <h3>Ledger</h3>
        <p>
          An electronic ledger is essentially a database containing all transactions that are constantly updated. <br />
          It is composed of multiple blocks (each containing at least one transaction) and these blocks are linked
          together into a chain using cryptography. <br />
          In other words, the following block will contain the cryptographic identifiers of the previous block. <br />
          So, if any block in the past has a problem, it will affect all the blocks at the back of the chain.
        </p>
        <h4>Classification</h4>
        <ul>
          <li>Public Ledger</li>
          <li>Distributed Ledger</li>
          <li>Decentralized Ledger</li>
        </ul>
        <hr />
        <h3>Peer-to-peer network - P2P</h3>
        <p>
          A Peer-to-peer network (P2P) is a decentralized model to communicate between many participants also known as
          peer nodes without any central servers or dependence on any other nodes. <br />A P2P network allows each party
          to act as both a client and a server. This means that after the network is formed, all participants own a copy
          of the ledger. <br />
          From there it can be used to share and store files without the help of an Intermediary. <br />
        </p>
        <h4>Classification</h4>
        <ul>
          <li>Unstructured P2P Network</li>
          <li>Structured P2P Network</li>
          <li>Hybrid P2P Network</li>
        </ul>
        <hr />
        <h3>Consensus Mechanism</h3>
        <p>
          The consensus mechanism prescribes sets of rules so that nodes participating in the peer-to-peer network can
          work in sync and agree on which transactions are legitimate and able to be added to the blockchain. The
          consensus mechanism is used to determine the actual state of the blockchain.
        </p>
        <h4>Classification</h4>
        <p>Each type of Blockchain will have a different consensus mechanism. These are just a few examples:</p>
        <ul>
          <li>Proof-of-work (PoW)</li>
          <li>Proof-of-stake (PoS)</li>
          <li>Proof-of-authority (PoA)</li>
        </ul>
        <hr />
        <h3>Cryptography</h3>
        <p>
          This component ensures the security, integrity and verification of the information in the ledger or the
          information transmitted between the nodes. By building on a foundation of mathematics (especially probability
          theory) along with knowledge of game theory, cryptography has come up with encryption methods that are
          impossible to break.
        </p>
        <hr />
        <h3>Virtual Machine</h3>
        <p>
          A virtual machine is a program that simulates a computer system. It has a CPU, memory and virtual storage.
          Basically, a virtual machine works like a physical computer, it can be used to store data, run application
          programs, and exist to jointly operate a Blockchain network with other virtual machines.
        </p>
        <hr />
        <h3>Nodes</h3>
        <p>
          It is one of the essential components of blockchains. Nodes are storage units that store vast amounts of
          blockchain data. As you know, nodes can be computers, servers, and laptops. All nodes are connected in a
          blockchain network. If any change is made in the blockchain&#39;s data, nodes can detect it quickly.
        </p>
        <h4>Classification</h4>
        <ul>
          <li>Full Nodes</li>
          <li>Light Nodes</li>
        </ul>
        <hr />
        <h3>Nonce</h3>
        <p>
          It refers to a &#34Number used only once&#34. In its basic form, a nonce is a 32-bit number randomly used only
          once. It is also a pseudo-random number that you can use only once in a cryptographic communication.
          Generally, a nonce is created only once while creating a new block or validating a new transaction. Once a
          perfect nonce is created, you can add it with the hashed blocks in a blockchain. After that, the block&#39;s
          hash value is rehashed, eventually creating a difficult algorithm. With this component of blockchain, you can
          make secured transactions because nonce verifies all the transactions along with other data of blocks.
        </p>
        <hr />
        <h3>Wallets</h3>
        <p>
          It is a digital wallet that allows user to store their cryptocurrency. Every node in the blockchain network
          has a Wallet. Privacy of a wallet in a blockchain network is maintained using public and private key pairs. In
          a wallet, there is no need for currency conversion as the currency in the wallet is universally acceptable.
        </p>
        <hr />
        <h3>Blocks</h3>
        <p>
          Basically, blocks are the backbone of blockchains. You can store data in blocks permanently but cannot change
          or delete it after it is stored. Once a block is filled with the data of transactions, then it will be linked
          with previous blocks. Every block will have information such as block size, transaction counter, block header,
          the previous block&#39;s hash, timestamp, and transaction data.
        </p>
        <hr />
      </div>
    </>
  )
}

export default Documentation
