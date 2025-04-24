{
  insertText: {
    "SystemInbox": async function(app) {
      const tagName = "system/inbox";
      const notes = await app.filterNotes({tag: tagName});
      const links = notes.map(n => `[${n.name}](https://www.amplenote.com/notes/${n.uuid})`);
      await app.context.replaceSelection("- Inbox:\n" + links.map(l => `- ${l}`).join("\n"));
    }
  }
}
