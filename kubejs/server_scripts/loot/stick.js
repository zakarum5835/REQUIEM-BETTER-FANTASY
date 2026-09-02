LootJS.modifiers((event) => {
    event.addBlockLootModifier("#minecraft:leaves")
        .removeLoot("minecraft:stick")
        .addLoot(LootItem.of("minecraft:stick").withChance(0.04));
});
