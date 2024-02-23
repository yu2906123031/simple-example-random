const Web3 = require('web3');

// Your Infura Project ID
const INFURA_SECRET_KEY = 'YOUR_INFURA_SECRET_KEY';

// 接入 Rinkeby Testnet
function getWeb3ByNetwork(network = 'mainnet') {
    const infuraUrl = `https://${network}.infura.io/v3/${INFURA_SECRET_KEY}`;
    const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));
    return web3;
}

// 转账 ETH 函数
async function transferEth(web3, fromAddress, privateKey, targetAddress, amount, chainId) {
    // 实现转账逻辑，这里需要添加您的转账逻辑
    // 注意：JavaScript中的异步操作可能需要使用async/await
}

async function main() {
    // 测试地址
    const fromAddress = '发送地址';

    // 测试私钥， 千万不能泄漏你自己的私钥信息
    const privateKey = '你的';

    // 测试转入地址
    const targetAddress = '接收地址';

    // 转账 ETH 金额
    const amount = 0.008;

    // Rinkeby Chain ID
    const chainId = 4;

    const web3 = getWeb3ByNetwork('rinkeby');

    // 查询地址 ETH 余额
    const balance = await web3.eth.getBalance(fromAddress);
    console.log(`当前地址余额: ${web3.utils.fromWei(balance, 'ether')} ETH`);

    // 调用转账函数
    const result = await transferEth(web3, fromAddress, privateKey, targetAddress, amount, chainId);
    console.log(result);
}

main();

