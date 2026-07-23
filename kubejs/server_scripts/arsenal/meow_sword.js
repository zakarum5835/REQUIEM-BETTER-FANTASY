// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "terramity:simmeredge"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "lethality:pixie_alloy"
            },
            {
                item: "terramity:conductite"
            },
            {
                item: "terramity:reverium"
            },
            {
                item: "terramity:ruby"
            }
        ],
        result: {
            item: "lethality:hf_meowrasama"
        }
    });
});