'use strict'

const { log } = require('console');

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
  for (let i = 0; i < pilots.length; i++) { console.log(pilots[i]) }
  return pilots
}

function iterateForEach() {
  pilots.forEach(pilot => {
    console.log(pilot)
    return pilot
  })
}

function mapIds() {
  let ids = pilots.map(pilot => pilot.id)
  console.log(ids)

  return ids
}

function rebels() {

  let rebel = pilots.filter(pilot => pilot.faction === 'Rebels')

  console.log(rebel);

  return rebel
}

function totalFaction(faction) {

  let result = pilots.filter(pilot => pilot.faction === faction)

  console.log(result.length)
  return (result.length)

}

function avgYears(faction) {
  let resultFaction = pilots.filter(pilot => pilot.faction === faction)
  let resultYears = resultFaction.reduce((accumulator, currentValue) => accumulator.years + currentValue.years)
  let media = resultYears/resultFaction.length
  console.log(media)
  return media
}

// use console.log
iterateSimple()
iterateForEach()
try {
  assert.deepStrictEqual(mapIds(), [2, 8, 40, 66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])

  assert.deepStrictEqual(totalFaction('Rebels'), 2)

  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  //  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}