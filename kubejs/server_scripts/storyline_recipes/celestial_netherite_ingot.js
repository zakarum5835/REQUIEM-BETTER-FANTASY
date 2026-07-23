//Made by zakarum5835

ServerEvents.recipes(event => {
  
  event.shaped(
    'celestisynth:celestial_core',
    [
      ' A ',
      'AYA',
      ' A '
    ],
    {
      A: 'minecraft:amethyst_shard',
      Y: 'minecraft:nether_star',
    }
  ) 
})

ServerEvents.recipes(event => {
     event.smithing(

         "celestisynth:supernal_netherite_ingot",
         "theinkarena:soul_core",
         "minecraft:netherite_ingot",
         "celestisynth:celestial_core",

)})