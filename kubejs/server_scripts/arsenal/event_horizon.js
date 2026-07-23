// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "brutality:pocket_black_hole"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "minecraft:netherite_shovel"
            },
            {
                item: "terramity:profanum"
            },
            {
                item: "terramity:void_alloy"
            },
            {
                item: "terramity:black_matter"
            }
        ],
        result: {
            item: "brutality:event_horizon"
        }
    });
});