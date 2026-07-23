// Made by KCtops6

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "macabre:company_from_below"
        },
        craftType: "adept_nether",
        soulCost: 1,
        duration: 10,
        ingredients: [
            {
                item: "forbidden_arcanus:eternal_stella"
            },
            {
                item: "macabre:gomoria_heart"
            },
            {
                item: "ae2:singularity"
            },
            {
                item: "mekanism:pellet_antimatter"
            },
            {
                item: "create:blaze_cake"
            },
            {
                item: "powah:crystal_nitro"
            },
            {
                item: "betterend:eternal_crystal"
            }
        ],
        result: {
            item: "goety:infernal_tome"
        }
    });
});