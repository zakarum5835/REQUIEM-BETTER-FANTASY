//Made by zakarum5835

ServerEvents.recipes(event => {
  event.custom({
      type: "mysticalagriculture:infusion",
      input: {
        item: "zakarumtweaks:yuki_star"

      },
      ingredients: [
          {
              item: "mysticalagradditions:insanium_block"
          },
          {
              item: "voidscape:voidic_crystal"
          },
          {
              item: "mysticalagradditions:insanium_block"
          },
          {
              item: "voidscape:voidic_crystal"
          },
          {
              item: "mysticalagradditions:insanium_block"
          },
          {
              item: "voidscape:voidic_crystal"
          },
          {
              item: "mysticalagradditions:insanium_block"
          },
          {
              item: "voidscape:voidic_crystal"
          }
      ],
      result: {
        item: "mysticalagradditions:creative_essence"
      }
  });
});