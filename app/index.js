/* general styles */

import 'general/scss/index.scss';

/* components */

/* require svg */
const files = require.context('general/svg', true, /^\.\/.*\.svg/);
files.keys().forEach(files);
