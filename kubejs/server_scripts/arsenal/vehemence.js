// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:nyxium_shovel"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:spiteful_soul"
            },
            {
                item: "terramity:spectral_soul"
            },
            {
                item: "terramity:warden_soul"
            },
            {
                item: "lethality:annihilation_alloy"
            }
        ],
        result: {
            item: "lethality:vehemence"
        }
    });
});