const { Connection, Keypair, PublicKey } = require(@solanaweb3.js);
const { Program, AnchorProvider } = require(@project-serumanchor);
const fs = require(fs);

async function main() {
    const connection = new Connection(http127.0.0.18899, confirmed);
    const walletKeypair = Keypair.fromSecretKey(
        Uint8Array.from(JSON.parse(fs.readFileSync(~.configsolanaid.json)))
    );
    const provider = new AnchorProvider(connection, walletKeypair, {});
    const programId = new PublicKey(YOUR_PROGRAM_ID_HERE);
    const idl = JSON.parse(fs.readFileSync(.targetidlutilitycoin.json));
    const program = new Program(idl, programId, provider);

    console.log(Deploying UtilityCoin...);
     Add deployment logic post-build
}

main().catch(console.error);