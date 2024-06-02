import { transformSync } from '@swc/core';

export function viteSWC() {
  return {
    name: 'vite:swc',
    transform(code, id) {
      if (/\.(js|ts)$/.test(id)) {
        const result = transformSync(code, {
          filename: id,
          jsc: {
            parser: {
              syntax: id.endsWith('.ts') ? 'typescript' : 'ecmascript',
              tsx: false,
              decorators: false,
            },
            target: 'esnext',
          }
        });

        return {
          code: result.code,
          map: result.map,
        }
      }
    }
  };
}