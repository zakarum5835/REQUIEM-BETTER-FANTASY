//Made by zakarum5835

//Minecraft String
ServerEvents.recipes(event => {

    event.shapeless('4x minecraft:string', [
        '#minecraft:wool'
    ]) 

})

//Healing Herbs

ServerEvents.recipes(event => {

    event.shapeless('legendarysurvivaloverhaul:healing_herbs', [
        '2x #minecraft:saplings',
        '2x #c:seeds'
    ]) 

})

// Black Matter

ServerEvents.recipes(event => {
  
  event.shaped(
    'terramity:black_matter',
    [
      'AAA',
      'AAA',
      'AAA'
    ],
    {
      A: 'terramity:decayed_bedrock_dust'
    }
  ) 
})