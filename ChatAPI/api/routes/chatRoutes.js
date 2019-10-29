"use strict";
module.exports = app => {
  var chat = require("../controllers/chatController");

  app
    .route("/messages")
    .get(chat.list_all_messages)
    .post(chat.create_a_message);
  app
    .route("/messages/id/:messageId")
    .get(chat.get_a_message_by_id)
    .put(chat.edit_a_message)
    .delete(chat.delete_a_message);

  app.route("/messages/search/:searchValue").get(chat.get_messages_by_text);

  app.route("/messages/rooms/:roomName").get(chat.get_messages_by_room);
};
