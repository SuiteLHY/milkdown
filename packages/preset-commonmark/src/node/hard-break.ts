import type { Keymap } from 'prosemirror-commands';
import type { NodeType } from 'prosemirror-model';
import { SerializerNode, Node } from '@milkdown/core';

export class HardBreak extends Node {
    id = 'hardbreak';
    schema = {
        inline: true,
        group: 'inline',
        selectable: false,
        parseDOM: [{ tag: 'br' }],
        toDOM: () => ['br', { class: 'bard-break' }] as const,
    };
    parser = {
        block: this.id,
        isAtom: true,
    };
    serializer: SerializerNode = (state) => {
        state.write('  \n');
    };
    override keymap = (nodeType: NodeType): Keymap => ({
        'Shift-Enter': (state, dispatch) => {
            dispatch?.(state.tr.replaceSelectionWith(nodeType.create()).scrollIntoView());
            return true;
        },
    });
}