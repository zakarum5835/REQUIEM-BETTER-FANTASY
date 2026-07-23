// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:exodium_sword"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:spiteful_soul"
            },
            {
                item: "lethality:annihilation_alloy"
            },
            {
                item: "lethality:annihilation_alloy"
            },
            {
                item: "terramity:warden_soul"
            }
        ],
        result: {
            item: "lethality:grievance"
        }
    });
});