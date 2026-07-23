// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:excalibur"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:decayed_bedrock_dust"
            },
            {
                item: "terramity:reverium"
            },
            {
                item: "terramity:prismatic_jewel"
            },
            {
                item: "terramity:spectral_soul"
            }
        ],
        result: {
            item: "terramity:hero_sword"
        }
    });
});