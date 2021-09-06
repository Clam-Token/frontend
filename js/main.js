var screenConnected, screenGames, screenMarket, screenHelp;
var gameLottery;
var containerContractBalance, containerTotal, containerCurrentStake, containerWaitingComplete, containerWaiting, containerAddress, containerBalance;
var linkPancake, linkContract, linkHelp, btnHome, linkMarket, linkBurn, linkGamesLottery;
var btnAdd, btnConnect, btnClaim;
var loading;

var intervalClaim;

var decimals = 1000000000000000000;

function initClam() {
    $(document).tooltip();
    loadClam();
    initMarket();
    loadMarket();
    loadLottery();
}

async function loadClam() {
    loading = $("#loading");

    screenConnected = $("#screen-connected");
    screenGames = $("#screen-games");
    screenMarket = $("#screen-market");
    screenHelp = $("#screen-help");

    gameLottery = $("#game-lottery");

    containerContractBalance = $("#container-contract-balance");
    containerTotal = $("#container-total");
    containerCurrentStake = $("#container-current-stake");
    containerWaitingComplete = $("#container-waiting-complete");
    containerWaiting = $("#container-waiting");
    containerAddress = $("#container-address");
    containerBalance = $("#container-balance");

    btnAdd = $("#btn-add");
    btnConnect = $("#btn-connect");
    btnClaim = $("#btn-claim");
    btnHome = $(".btn-home");

    linkPancake = $(".link-pancake");
    linkContract = $("#link-contract");
    linkHelp = $("#link-help");
    linkMarket = $("#link-market");
    linkBurn = $("#link-burn");
    linkGamesLottery = $("#link-games-lottery");

    linkContract.text(addressClam);
    linkContract.attr("href", "https://bscscan.com/address/" + addressClam)

    linkPancake.attr("href", "https://pancakeswap.info/tokens/" + addressClam)

    linkGamesLottery.on("click", function() {
        hideAll();
        screenGames.show();
        gameLottery.show();
    });

    linkMarket.on("click", function() {
        hideAll();
        screenMarket.show();
    });

    linkBurn.on("click", function() {
        dialog.burn.show(selectedAccount);
    });

    btnAdd.on("click", function() {
        addToken();
    });

    linkHelp.on("click", function() {
        hideAll();
        screenHelp.show();
    });

    btnHome.on("click", function() {
        hideAll();
        screenConnected.show();
    });

    containerAddress.text(selectedAccount);

    var balance = await clam.methods.balanceOf(selectedAccount).call();
    containerBalance.text(fixDecimals(balance));

    btnClaim.on("click", async function() {
        try {
            loading.show();
            await clam.methods.claim().send({
                from: selectedAccount
            });
            loading.hide();
        } catch (e) {
            loading.hide();
        }
    });

    containerWaitingComplete.show();
    btnClaim.show();


    var total = await clam.methods.totalSupply().call();
    containerTotal.text(fixDecimals(total));

    var contractBalance = await clam.methods.balanceOf(addressClam).call();
    containerContractBalance.text(fixDecimals(contractBalance));

    var block = await clam.methods.claimBlock().call();
    intervalClaim = setInterval(async function() {
        // block number of latest mined block
        web3.eth.getBlockNumber().then(data => {
            containerCurrentStake.text(data - block);
            containerWaiting.text((data - block) * (balance / total));
        });

        reloadMarketInfo();
    }, 5000);
}

function hideAll() {
    screenConnected.hide();
    screenGames.hide();
    screenMarket.hide();
    screenHelp.hide();
}

function reloadClam() {
    clearInterval(intervalClaim);
    containerWaiting.text("0");
    loadClam();
}

function fixDecimals(balance) {
    return Math.round(((balance / decimals) + Number.EPSILON) * 100000) / 100000;
}