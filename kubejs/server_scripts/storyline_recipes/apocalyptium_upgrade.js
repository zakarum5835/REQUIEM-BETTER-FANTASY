// Made by zakarum5835

//Apocalyptium Smithing Template

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "ancient_elements:galactrium_smithing_template"
        },
        craftType: "adept_nether",
        soulCost: 100,
        duration: 10,
        ingredients: [
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            },
            {
                item: "goety:dark_ingot"
            },
            {
                item: "enigmaticaddons:pure_heart"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            }
        ],
        result: {
            item: "goety_revelation:apocalyptium_upgrade_smithing_template"
        }
    });
});

//Apocalyptium Ingot

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "goety:dark_ingot"
        },
        craftType: "adept_nether",
        soulCost: 100,
        duration: 10,
        ingredients: [
            {
                item: "ancient_elements:galactrium_ingot"
            },
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            },
            {
                item: "ancient_elements:galactrium_ingot"
            },
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            }
        ],
        result: {
            item: "goety_revelation:apocalyptium_ingot"
        }
    });
});

//Apocalyptium Helmet

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "ancient_elements:galactrium_helmet"
        },
        craftType: "adept_nether",
        soulCost: 100,
        duration: 10,
        ingredients: [
            {
                item: "goety_revelation:apocalyptium_upgrade_smithing_template"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            }
        ],
        result: {
            item: "goety_revelation:apocalyptium_helmet"
        }
    });
});

//Apocalyptium Chestplate

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "ancient_elements:galactrium_chestplate"
        },
        craftType: "adept_nether",
        soulCost: 100,
        duration: 10,
        ingredients: [
            {
                item: "goety_revelation:apocalyptium_upgrade_smithing_template"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            }
        ],
        result: {
            item: "goety_revelation:apocalyptium_chestplate"
        }
    });
});

//Apocalyptium Leggings

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "ancient_elements:galactrium_leggings"
        },
        craftType: "adept_nether",
        soulCost: 100,
        duration: 10,
        ingredients: [
            {
                item: "goety_revelation:apocalyptium_upgrade_smithing_template"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            }
        ],
        result: {
            item: "goety_revelation:apocalyptium_leggings"
        }
    });
});

//Apocalyptium Boots

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "ancient_elements:galactrium_boots"
        },
        craftType: "adept_nether",
        soulCost: 100,
        duration: 10,
        ingredients: [
            {
                item: "goety_revelation:apocalyptium_upgrade_smithing_template"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "goety_revelation:apocalyptium_ingot"
            },
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            }
        ],
        result: {
            item: "goety_revelation:apocalyptium_boots"
        }
    });
});