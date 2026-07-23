// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:reverium_sword"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:iridescent_shard"
            },
            {
                item: "terramity:iridescent_shard"
            },
            {
                item: "terramity:reverium"
            },
            {
                item: "terramity:reverium"
            }
        ],
        result: {
            item: "brutality:whisperwaltz"
        }
    });
});