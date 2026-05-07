//Made by zakarum5835

ServerEvents.recipes(event => {
  
  event.shaped(
    'legendarysurvivaloverhaul:canteen',
    [
      ' A ',
      'BCB',
      'BBB'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:leather',
      C: 'minecraft:glass_bottle'
    }
  ) 

  event.shaped(
    'legendarysurvivaloverhaul:large_canteen',
    [
      ' A ',
      'BCB',
      'BBB'
    ],
    {
      A: 'minecraft:diamond',
      B: 'minecraft:leather',
      C: 'minecraft:glass_bottle'
    }
  ) 

  event.shaped(
    'legendarysurvivaloverhaul:bandage',
    [
      'A A',
      ' B ',
      'A A'
    ],
    {
      A: 'legendarysurvivaloverhaul:plaster',
      B: 'legendarysurvivaloverhaul:healing_herbs'
    }
  ) 

  event.shaped(
    'legendarysurvivaloverhaul:medkit',
    [
      'ZAZ',
      'YXY',
      'CCC'
    ],
    {
      A: 'minecraft:gold_ingot',
      Y: 'minecraft:diamond',
      Z: 'minecraft:string',
      X: 'legendarysurvivaloverhaul:bandage',
      C: '#minecraft:wool'
    }
  ) 
})