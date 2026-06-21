// kubejs\server-scripts\entity-events\spawned\cancel-mob-spawns.js
// Author: KCtops6
EntityEvents.spawned(event => {
    const { entity, level } = event;
    const { type } = entity;
    const { dimension } = level;
    let blockedMobs = ['forbidden_arcanus:soul'];
    // let blockedMobsOverworld = ['minecraft:enderman'];
    // let blockedMobsNether = ['minecraft:skeleton'];
    // let blockedMobsEnd = ['minecraft:shulker'];
    if (blockedMobs.includes(type)) return event.cancel();
    // if (dimension === 'minecraft:overworld' && blockedMobsOverworld.includes(type)) return event.cancel();
    // if (dimension === 'minecraft:the_nether' && blockedMobsNether.includes(type)) return event.cancel();
    // if (dimension === 'minecraft:the_end' && blockedMobsEnd.includes(type)) return event.cancel();
});
