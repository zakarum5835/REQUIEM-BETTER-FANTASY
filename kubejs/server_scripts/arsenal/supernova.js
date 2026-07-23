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
                item: "minecraft:gold_block"
            },
            {
                item: "minecraft:gold_block"
            },
            {
                item: "terramity:neutron_star"
            },
            {
                item: "minecraft:amethyst_shard"
            }
        ],
        result: {
            item: "brutality:supernova"
        }
    });
});