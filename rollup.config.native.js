import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
    entry: 'src/native.js',
    plugins: [
        babel(babelrc()),
    ],
    external: external,
    targets: [
        {
            dest: 'dev/src/native.js',
            format: 'es'
        }
    ]
};
