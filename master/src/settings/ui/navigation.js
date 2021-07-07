/* import actions here */
import { addBlankDocument, addDocument, removeDocument } from '@/features/document_set';
import { appendNode } from '@/features/node_tree';
import { buildSelectedTask, buildAllTask } from '@/features/build_profile';


export const NavigationSetting = [
    { text: "File", tip: "2222", subMenu: [{ text: "New Node", tip: "New Node", action: appendNode, hotkey: "Ctrl+N", }, { text: "New Document", tip: "New Document", action: addBlankDocument, hotkey: "Ctrl+D", }, { text: "Open...", tip: "Open" }, { text: "Open Recent", tip: "Open Recent" }, {}, { text: "Save", tip: "Save" }, { text: "Save as...", tip: "Save as" }, { text: "Save All", tip: "Save All" }, {}, { text: "Close Window", tip: "Close Window" }] },
    { text: "Edit", tip: "2222", subMenu: [{ text: "Undo", tip: "Undo" }, { text: "Redo", tip: "Redo" }, {}, { text: "Cut", tip: "Cut" }, { text: "Copy", tip: "Copy" }, { text: "Paste", tip: "Paste" }] },
    { text: "View", tip: "2222", subMenu: [{ text: "Explorer", tip: "Explorer" }, { text: "Search", tip: "Search" }, { text: "Run", tip: "Run" }, { text: "Extensions", tip: "Extensions" }] },
    { text: "Run", tip: "2222", subMenu: [{ text: "Start Build", tip: "Start Build", action: buildAllTask, hotkey: "Ctrl+B",  }, { text: "Start Build(Current)", tip: "Start Build(Current)", action: buildSelectedTask, hotkey: "Ctrl+P",  }, {}, { text: "Add Build Profile...", tip: "Add Build Profile..." }] },
    { text: "Go", tip: "2222", subMenu: [{ text: "Go to Event", tip: "Go to Event" }, { text: "Go to Time point", tip: "Go to Time point" }] },
    { text: "Terminal", tip: "2222", subMenu: [] },
    { text: "Plugins", tip: "2222", subMenu: [{ text: "Add Plugin", tip: "Add Plugin" }, { text: "Plugin Manager...", tip: "Plugin Manager..." }] },
    { text: "Intelligent", tip: "2222", subMenu: [{ text: "Add Pattern...", tip: "Add Pattern..." }, {}, { text: "Performance Metrix...", tip: "Performance Metri..." }] },
    { text: "Help", tip: "2222", subMenu: [{ text: "About", tip: "About" }] }
];
