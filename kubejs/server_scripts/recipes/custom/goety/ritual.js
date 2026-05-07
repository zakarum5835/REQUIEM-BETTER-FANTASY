ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:summon",
        activation_item: {
            item: "zakarumtweaks:zaka_star"
        },
        craftType: "sabbath",
        entity_to_summon: "goety:apostle",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "goety:crone_hat"
            },
            {
                tag: "goety:warlock_sash"
            },
            {
                item: "brutality:darkin_blade"
            },
            {
                item: "goety:void_block"
            }
        ],
        result: {
            item: "goety:jei_dummy/none"
        }
    });
});