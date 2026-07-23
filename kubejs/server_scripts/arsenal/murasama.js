// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:simmeredge"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:hero_sword"
            },
            {
                item: "terramity:advanced_gun_parts"
            },
            {
                item: "terramity:hellspec_alloy"
            },
            {
                item: "terramity:exodium_superalloy"
            }
        ],
        result: {
            item: "terramity:murasama"
        }
    });
});