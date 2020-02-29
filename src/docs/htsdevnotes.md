### History Timeline Studio Dev Notes

#### Target for build

vue.config.js has publicPath set to "/timelines/app/" so that the app can be served from ruml.com/timelines/app/

explore putting builds of app on github.io

#### Resources

email her: hello@taniarascia.com

Google font very much like Palatino: Crimson Text

Browser for testing: https://blisk.io/

Positioning in CSS: https://ishadeed.com/article/learn-css-positioning/

Clickable area: https://ishadeed.com/article/clickable-area/

Mac setup for dev: https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/

Markdown note-taking (study it): https://github.com/taniarascia/takenote

Naked components (little styling); esp resize: https://vuetensils.stegosource.com/

Vue-d3 (animation): https://github.com/sxywu/vue-d3-example/blob/master/src/components/AreaChart.vue

#### Notes

mdi icons: <v-icon>mdi-arrow-right-thick</v-icon>
arrow-right-thick
delete

monica.css:

* {box-sizing: border-box}
[hidden] {display: none !important}
[disabled] {pointer-events:none; opacity: 0.3}
.horizontal {display: flex; flex-direction: row; justify-content: space-between}
.vertical {display: flex; flex-direction: column}
.center {justify-content: center; align-items: center}
.flex {flex: 1}
html {
  --spacing-xs: 8px;
  --spacing: 24px;
  --spacing-s: 12px;
  --spacing-m: 36px;
}
#### Github Pages

User page: http://bruml2.github.io/ [github tutorial](https://guides.github.com/features/pages/)

Create a new repo in account called bruml2.github.io


Project pages: http://bruml2.github.io/<repo> [good instructions](https://www.thinkful.com/learn/a-guide-to-using-github-pages/)

In base of local repo (cd /path/to/local/repo): Create a new branch called gh-pages and check it out.
  git checkout -b gh-pages

Push your new branch to GitHub!
  git push origin gh-pages

#### Local to Github

Create a new github repo

Clone it to local machine

Add source files to new repo

