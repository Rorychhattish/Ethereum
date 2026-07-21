// Goal: Sign Message
// Let's sign a message!
// First step is to hash it using the hashMessage function you created in the last stage (we've already imported it for you on line 2)
// Once you have the message hash, use the sign method.
// Note:The sign method will take your message hash along with the constant PRIVATE_KEY declared at the top of the file. This private key is a valid key that could be used to authorize blockchain transactions. Never use this specific key because it is published on the internet, so many people including yourself could authenticate with this specific private key. In future lessons we'll be discussing good private key hygiene to avoid losing funds.
// The sign method takes an optional third parameter called options, which you'll see in the documentation. Use this parameter to return the recovered bit so that the public key can be recovered from this signature.




const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(msg) {
    const messageHash = hashMessage(msg);

    // 2. Sign the hash using the private key
    // We use the 'recovered' option so we can derive the public key later
    const signature = await secp.sign(messageHash, PRIVATE_KEY, { recovered: true });

    // 3. Return the signature (which now includes the recovery bit)
    return signature;
}

module.exports = signMessage;