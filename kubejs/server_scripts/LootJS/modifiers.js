LootJS.modifiers(event => {
    event.addLootTableModifier(/^twilightforest:chests\/.*/).removeLoot('minecraft:blaze_rod');
});