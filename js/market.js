var inBuyCLAM, inBuyBNB, inSellCLAM, inSellBNB;
var btnExchangeCLAM, btnExchangeBNB;
var containerMarketTotalCLAM, containerMarketTotalBNB, containerExchangeValue, containerMarketBNB;

var marketBalanceCLAM;
var exchangeValue;

function initMarket() {
    inBuyCLAM = $("#in-buy-clam");
    inBuyBNB = $("#in-buy-bnb");

    inSellCLAM = $("#in-sell-clam");
    inSellBNB = $("#in-sell-bnb");

    btnExchangeCLAM = $("#btn-exchange-go-clam");
    btnExchangeBNB = $("#btn-exchange-go-bnb");

    containerMarketTotalCLAM = $("#container-market-total-clam");
    containerMarketTotalBNB = $("#container-market-total-bnb");
    containerExchangeValue = $("#container-exchange-value");
    containerMarketBNB = $("#container-market-bnb");
}

async function reloadMarketInfo() {
    marketBalanceCLAM = await market.methods.getBalanceCLAM().call();
    marketBalanceBNB = await market.methods.getBalanceBNB().call();
    containerMarketTotalCLAM.text(fixDecimals(marketBalanceCLAM));
    containerMarketTotalBNB.text(fixDecimals(marketBalanceBNB));

    exchangeValue = await market.methods.getExchangeValue().call();
    exchangeValue = await market.methods.getExchangeValue().call();
    containerExchangeValue.text(exchangeValue);
}

async function loadMarket() {
    await reloadMarketInfo();

    function calcBNB() {
        var bnbValue = inBuyCLAM.val() / exchangeValue;
        if (bnbValue > 0.0000009) inBuyBNB.val(bnbValue);
        else inBuyBNB.val("CLAM amount to low");
    };

    inBuyCLAM.on("input", function() { calcBNB() });
    inBuyCLAM.val("1000");
    calcBNB();

    function calcCLAM() {
        var value = inSellBNB.val() * exchangeValue;
        if (value > 0.0000009) inSellCLAM.val(value);
        else inSellCLAM.val("BNB amount to low");
    };

    inSellBNB.on("input", function() { calcCLAM() });
    inSellBNB.val("1");
    calcCLAM();

    btnExchangeCLAM.on("click", async function() {
        try {
            var sendValue = inBuyBNB.val();
            if (sendValue > 0) {
                loading.show();
                await market.methods.exchangeBNBtoCLAM().send({
                    from: selectedAccount,
                    value: Web3.utils.toWei(sendValue, "ether")
                });
                loading.hide();
                dialog.msg("Purchase successful!", "Your purchase has been successful and your CLAM has been sended!");
            }
        } catch (e) {
            console.log(e);
            loading.hide();
        }
    });

    var approved = false;
    btnExchangeBNB.text("Approve");
    btnExchangeBNB.on("click", async function() {
        sendValue = toBaseUnit(inSellCLAM.val(), 18, web3.utils.BN);
        if (approved) {
            try {
                if (sendValue > 0) {
                    loading.show();
                    await market.methods.exchangeCLAMtoBNB(sendValue).send({ from: selectedAccount });
                    loading.hide();
                    dialog.msg("Purchase successful!", "Your purchase has been successful and your BNB has been sended!");
                    btnExchangeBNB.text("Approve");
                }
            } catch (e) {
                console.log(e);
                loading.hide();
            }

        } else {
            approved = await approve(sendValue);
            if (approved) btnExchangeBNB.text("Exchange");
        }
    });
}

async function approve(value) {
    try {
        await clam.methods.approve(addressClam, value).send({
            from: selectedAccount
        });

        return true;
    } catch (e) {
        console.log(e);
    }

    return false;
}