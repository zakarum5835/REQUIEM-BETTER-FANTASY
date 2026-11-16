LootJS.modifiers((event) => {
    const enderWyrmRemovals = [
        "minecraft:dragon_breath",
        "minecraft:dragon_head",
        "intensehorror:book_of_horror"
    ];

    event.addEntityLootModifier("realmrpg_wyrms:ender_wyrm")
        .removeLoot(enderWyrmRemovals);
});
