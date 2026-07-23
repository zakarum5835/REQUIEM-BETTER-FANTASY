// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "enigmaticlegacy:twisted_heart"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 10,
        ingredients: [
            {
                item: "fdbosses:fire_and_ice_core"
            },
            {
                item: "fdbosses:geburah_trophy"
            },
            {
                item: "brutality:event_horizon"
            },
            {
                item: "fdbosses:malkuth_fist"
            }
        ],
        result: {
            item: "macabre:sacrificial_dirk"
        }
    });
});