// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:cosmilite_sword"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "minecraft:nether_star"
            },
            {
                item: "terramity:gold_necklace"
            },
            {
                item: "terramity:topaz"
            },
            {
                item: "terramity:topaz"
            }
        ],
        result: {
            item: "brutality:seventh_star"
        }
    });
});