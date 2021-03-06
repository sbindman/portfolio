module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    htmlbuild: {
        veloroute: {
            src: 'generic.html',
            dest: 'veloroute.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/veloroute.html'
                }
            }
        },
        me: {
            src: 'generic.html',
            dest: 'm&e.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/m&e.html'
                }
            }
        },
        wanderlust: {
            src: 'generic.html',
            dest: 'wanderlust.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/wanderlust.html'
                }
            }
        },
        shibori: {
            src: 'generic.html',
            dest: 'shibori.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/shibori.html'
                }
            }
        },
        affirmme: {
            src: 'generic.html',
            dest: 'affirmme.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/affirmme.html'
                }
            }
        },
        seafood: {
            src: 'generic.html',
            dest: 'seafood.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/seafood.html'
                }
            }
        },
        haras: {
            src: 'generic.html',
            dest: 'haras.html',
            options: {
                beautify: true,
                sections: {
                    views: './snippets/haras.html'
                }
            }
        },
        candles: {
            src: 'generic.html',
            dest: 'candles.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/candles.html'
                }
            }
        },
        lipbalm: {
            src: 'generic.html',
            dest: 'lipbalm.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/lipbalm.html'
                }
            }
        },
        cadasta: {
            src: 'generic.html',
            dest: 'cadasta.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/cadasta.html'
                }
            }
        },
        transitFight: {
            src: 'generic.html',
            dest: 'transitFight.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/transitFight.html'
                }
            }
        },
        jewelry: {
            src: 'generic.html',
            dest: 'jewelry.html',
            options: {
                beautify: true,
                sections: {
                    views: 'snippets/jewelry.html'
                }
            }
        }
    }
  });



 

};