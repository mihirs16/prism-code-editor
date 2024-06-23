import "../languages/index.js";
import { matchBrackets } from "../extensions/matchBrackets/index.js";
import { highlightBracketPairs } from "../extensions/matchBrackets/highlight.js";
import { indentGuides } from "../extensions/guides.js";
import { cursorPosition } from "../extensions/cursor.js";
import { defaultCommands } from "../extensions/commands.js";
import { EditorExtension } from "../index.js";
import { highlightSelectionMatches } from "../extensions/search/selection.js";

export const common = (): EditorExtension[] => [
  defaultCommands(),
  indentGuides(),
  matchBrackets(),
  highlightBracketPairs(),
  cursorPosition(),
  highlightSelectionMatches(),
];
