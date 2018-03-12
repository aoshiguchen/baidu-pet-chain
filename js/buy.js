/*
 * @author t@tabalt.net
 */

$(function(){
    setInterval(function(){
        Buyer.ShowPetsOnSale();
    }, Configurator.getOtherConf().refreshInterval.value);

    Buyer.InitBuyModal();

    setInterval(function(){
        Buyer.TryBuyPets();
    }, 100);
});