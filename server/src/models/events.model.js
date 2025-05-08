import knex from "../knex.js";

async function getEvents() {
  const events = await knex
    .select(
      "uuid",
      "name",
      "placeId",
      "createdAt",
      "updatedAt",
    )
    .from("placeEvent")
    .where("userId","=",1)
    .orderBy("updatedAt", "desc");
  return events;
}

async function addEvent(placeId, eventName) {
  const result = await knex
    .insert(
      {
        "name": eventName,
        "placeId": placeId,
        "userId": 1
      }
     )
     .into("placeEvent");

    return
}

// FIXME: return void => throw an error ?
async function deleteEvent(placeId, eventName) {
  const result = await knex
    .table("placeEvent")
    .where("placeId", "=", placeId)
    .andWhere("name", "=", eventName)
    .andWhere("userId", "=", 1)
    .del();

    if (result === 0) throw(new Error("NotFound"));

    return
}

export default { getEvents, deleteEvent, addEvent};
