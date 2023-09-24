import Dexie from 'dexie';

class ChatDatabase extends Dexie {
  constructor() {
    super("blindchat");
    this.version(16).stores({
      chats: "++index, title, createdAt, id, message"
    });
  }
}
async function getMessages(id_chat) {
  try {
    const chat_ret = await db.chats.where("id").equals(id_chat).first();
    const msg = chat_ret?.message;
    return [...msg];
  } catch (err) {
    console.log(err);
  }
  return void 0;
}
const db = new ChatDatabase();

export { getMessages as g };
//# sourceMappingURL=LocalDB-8101692b.js.map
