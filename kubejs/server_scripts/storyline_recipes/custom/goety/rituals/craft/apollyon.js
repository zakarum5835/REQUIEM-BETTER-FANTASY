//Made by KCtops6

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:summon",
        activation_item: {
            item: "zakarumtweaks:zaka_star"
        },
        craftType: "adept_nether",
        entity_to_summon: "goety_revelation:summon_apollyon",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "goety:crone_hat"
            },
            {
                item: "goety:warlock_sash"
            },
            {
                item: "brutality:darkin_blade"
            },
            {
                item: "goety:unholy_blood"
            }
        ],
        result: {
            item: "goety_revelation:revelation"
        }
    });
});