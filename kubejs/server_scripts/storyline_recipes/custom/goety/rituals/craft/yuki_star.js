// Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "enigmaticaddons:earth_promise"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "macabre:valamon_heart"
            },
            {
                item: "macabre:gargamaw_heart"
            },
            {
                item: "macabre:cubeomeat"
            },
            {
                item: "macabre:skin_transfer"
            }
        ],
        result: {
            item: "zakarumtweaks:yuki_star"
        }
    });
});
