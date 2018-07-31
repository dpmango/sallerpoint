var util = require('gulp-util');

var production = util.env.production || util.env.prod || false;
var destPath = 'src';

var config = {
  env       : 'development',
  production: production,

  src: {
    root         : 'src',
    sass         : 'src/sass',
    sassGen      : 'src/sass/generated',
    iconsSvg     : 'src/images/icons',
    iconsPng     : 'src/images/icons',
    sassGen      : 'src/sass/generated'
  },
  dest: {
    root  : destPath,
    css   : destPath + '/css',
    img   : destPath + '/images'
  },

  setEnv: function(env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },

  logEnv: function() {
    util.log(
      'Environment:',
      util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
    );
  },

  errorHandler: require('./util/errors')
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
