import knex from "../knex.js";

async function getEvents(user) {
  const events = await knex
    .select(
      "uuid",
      "name",
      "placeId",
      "createdAt",
      "updatedAt",
    )
    .from("placeEvent")
    .where("userId","=", user.id)
    .orderBy("updatedAt", "desc");
  return events;
}

async function addEvent(placeId, user, eventName) {
  const result = await knex
    .insert(
      {
        "name": eventName,
        "placeId": placeId,
        "userId": user.id
      }
     )
     .into("placeEvent");

    return
}

// FIXME: return void => throw an error ?
async function deleteEvent(placeId, user, eventName) {
  const result = await knex
    .table("placeEvent")
    .where("placeId", "=", placeId)
    .andWhere("name", "=", eventName)
    .andWhere("userId", "=", user.id)
    .del();

    if (result === 0) throw(new Error("NotFound"));

    return
}

export default { getEvents, deleteEvent, addEvent};
