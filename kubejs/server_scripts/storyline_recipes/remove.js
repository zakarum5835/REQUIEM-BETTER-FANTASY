// Made by KCtops6

ServerEvents.recipes(event => {
    event.remove({ mod: 'sophisticatedstorage', id: /_from_quark_/ });
    const brokenIDs = [
        'forbidden_arcanus:aurum_chest_boat',
        'forbidden_arcanus:edelwood_chest_boat',
        'lethality:broken_biome_blade',
        'celestisynth:celestial_spellbook',
        'starcatcher:aquaculture_fillet',
        'goetyawaken:emerald_grimoire1',
        'goety_revelation:gold_crown',
        'goetyawaken:fairy_focus',
        'goetyawaken:maid_fairy_servant',
        'incendium:upgrade_elytra',
        'theabyss:jungle_planks_rcp_2'
    ];
    brokenIDs.forEach(recipeID => {
        event.remove({ id: recipeID });
    });
});