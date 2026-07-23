// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:hellspec_sword"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:spiteful_soul"
            },
            {
                item: "terramity:chthonian_void"
            },
            {
                item: "terramity:chthonian_void"
            },
            {
                item: "minecraft:nether_star"
            }
        ],
        result: {
            item: "brutality:darkin_blade"
        }
    });
});