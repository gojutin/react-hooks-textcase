import { useReducer } from 'react';
import cc from 'change-case';

const types = {
  clear: 'clear',
  upper: 'upper',
  lower: 'lower',
  sentence: 'sentence',
  camel: 'camel',
  constant: 'constant',
  dot: 'dot',
  header: 'header',
  kebab: 'kebab',
  path: 'path',
  snake: 'snake',
  title: 'title',
  reverse: 'reverse',
  binary: 'binary',
  hex: 'hex',
  minify: 'minify',
};

function useStore() {
  const initialState = '';

  function reducer(state, action) {
    const input = action.payload;

    switch (action.type) {
      case types.clear:
        return '';

      case types.upper:
        return cc.upper(input);

      case types.lower:
        return cc.lower(input);

      case types.sentence:
        return input
          .trim()
          .toLowerCase()
          .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());

      case types.camel:
        return cc.camel(input);

      case types.constant:
        return cc.constant(input);

      case types.dot:
        return cc.dot(input);

      case types.header:
        return cc.header(input);

      case types.kebab:
        return cc.param(input);

      case types.path:
        return cc.path(input);

      case types.snake:
        return cc.snake(input);

      case types.title:
        return cc.title(input);

      case types.reverse:
        return input
          .split('')
          .reverse()
          .join('');

      case types.binary:
        let output = '';
        for (let i = 0; i < input.length; i++) {
          output += input[i].charCodeAt(0).toString(2) + ' ';
        }
        return output;

      case types.hex:
        let hex, i;
        let result = '';
        for (i = 0; i < input.length; i++) {
          hex = input.charCodeAt(i).toString(16);
          result += ('000' + hex).slice(-4);
        }

        return result;

      case types.minify:
        return input.replace(/\n|\t/g, ' ');

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch, types];
}

export default useStore;
