// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "lethality:exalted_oathblade"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "terramity:antiprism"
            },
            {
                item: "terramity:spectral_soul"
            },
            {
                item: "terramity:warden_soul"
            },
            {
                item: "terramity:nyxium"
            }
        ],
        result: {
            item: "lethality:devils_devastation"
        }
    });
});