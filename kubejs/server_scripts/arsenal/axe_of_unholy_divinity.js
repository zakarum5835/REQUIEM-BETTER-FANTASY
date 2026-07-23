// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:exodium_waraxe"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:exodium_waraxe"
            },
            {
                item: "terramity:exodium_superalloy"
            },
            {
                item: "terramity:reverium"
            },
            {
                item: "terramity:reverium"
            }
        ],
        result: {
            item: "terramity:axe_of_unholy_divinity"
        }
    });
});