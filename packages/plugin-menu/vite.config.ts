/* Copyright 2021, Milkdown by Mirone. */
import { defineConfig } from 'vite';

import { viteBuild } from '../../vite.config';

export default defineConfig({
    root: 'app',
    build: viteBuild('plugin-menu'),
});
