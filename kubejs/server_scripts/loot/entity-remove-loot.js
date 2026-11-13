LootJS.modifiers((event) => {
    const minotaurRemovals = [
        // Bards RPG
        "bards_rpg:troubadour_garb_head",
        "bards_rpg:troubadour_garb_chest",
        "bards_rpg:troubadour_garb_legs",
        "bards_rpg:troubadour_garb_feet",
        "bards_rpg:diamond_lyre",
        "bards_rpg:diamond_harp_crossbow",
        "bards_rpg:diamond_rapier",
        "bards_rpg:diamond_lute",

        // Wizards
        "wizards:frost_robe_head",
        "wizards:frost_robe_chest",
        "wizards:frost_robe_legs",
        "wizards:frost_robe_feet",
        "wizards:fire_robe_head",
        "wizards:fire_robe_chest",
        "wizards:fire_robe_legs",
        "wizards:fire_robe_feet",
        "wizards:arcane_robe_head",
        "wizards:arcane_robe_chest",
        "wizards:arcane_robe_legs",
        "wizards:arcane_robe_feet",
        "wizards:staff_arcane",
        "wizards:staff_fire",
        "wizards:wand_fire",

        // Vanilla
        "minecraft:golden_axe",

        // Forcemaster RPG
        "forcemaster_rpg:phasleb_head",
        "forcemaster_rpg:phasleb_chest",
        "forcemaster_rpg:phasleb_legs",
        "forcemaster_rpg:phasleb_feet",

        // Rogues
        "rogues:berserker_armor_head",
        "rogues:berserker_armor_chest",
        "rogues:berserker_armor_legs",
        "rogues:berserker_armor_feet",
        "rogues:assassin_armor_head",
        "rogues:assassin_armor_chest",
        "rogues:assassin_armor_legs",
        "rogues:assassin_armor_feet",
        "rogues:diamond_sickle",
        "rogues:diamond_dagger",
        "rogues:diamond_double_axe",
        "rogues:diamond_glaive",

        // Archers
        "archers:ranger_armor_head",
        "archers:ranger_armor_chest",
        "archers:ranger_armor_legs",
        "archers:ranger_armor_feet",
        "archers:rapid_crossbow",
        "archers:heavy_crossbow",
        "archers:mechanic_shortbow",
        "archers:diamond_spear",
        "archers:royal_longbow",

        // Paladins
        "paladins:crusader_armor_head",
        "paladins:crusader_armor_chest",
        "paladins:crusader_armor_legs",
        "paladins:crusader_armor_feet",
        "paladins:prior_robe_head",
        "paladins:prior_robe_chest",
        "paladins:prior_robe_legs",
        "paladins:prior_robe_feet",
        "paladins:diamond_holy_staff",
        "paladins:diamond_holy_wand",
        "paladins:diamond_mace",
        "paladins:diamond_kite_shield",
        "paladins:diamond_great_hammer",
        "paladins:diamond_claymore"
    ];

    event.addEntityLootModifier("twilightforest:minotaur")
        .removeLoot(minotaurRemovals);
});
