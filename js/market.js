var inBuyCLAM, inBuyBNB, inSellCLAM, inSellBNB;
var btnExchangeCLAM, btnExchangeBNB;
var containerMarketTotalCLAM, containerMarketTotalBNB, containerExchangeValue, containerMarketBNB;

var marketBalanceCLAM;
var exchangeValue;

function initMarket() {
    inBuyCLAM = $("#in-buy-clam");
    inBuyBNB = $("#in-buy-bnb");

    btnExchangeCLAM = $("#btn-exchange-go-clam");

    containerMarketTotalCLAM = $("#container-market-total-clam");
    containerExchangeValue = $("#container-exchange-value");
    containerMarketBNB = $("#container-market-bnb");
}

async function reloadMarketInfo() {
    marketBalanceCLAM = await market.methods.getBalanceCLAM().call();
    containerMarketTotalCLAM.text(fixDecimals(marketBalanceCLAM));

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

    btnExchangeCLAM.on("click", async function() {
        try {
            var sendValue = inBuyBNB.val();
            if (sendValue > 0) {
                loading.show();
                await market.methods.exchange().send({
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