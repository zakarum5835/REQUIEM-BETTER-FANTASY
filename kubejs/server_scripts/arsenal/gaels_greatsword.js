// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "minecraft:bedrock"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:warden_soul"
            },
            {
                item: "terramity:sword_of_the_imprisoned"
            },
            {
                item: "terramity:spiteful_soul"
            },
            {
                item: "terramity:warden_soul"
            }
        ],
        result: {
            item: "lethality:gaels_greatsword"
        }
    });
});