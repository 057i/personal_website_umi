// ref: https://umijs.org/config/
//component针对于src下的pages目录的
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './index.js',
          // Routes: ['./src/routes/changeBgComp.js'],
        },
        {
          path: '/contact',
          component: './contact.js',
        },
        {
          path: '/demo',
          // exact: false,
          component: './demo/demo_layout.js',
          //如果使用配置式路由routes,则必须有一个公共的组件样式
          routes: [
            {
              path: '/demo/total',
              component: './demo/index.js',
            },
            {
              path: '/demo/emy',
              component: './demo/emy.js',
            },
            {
              path: '/demo/loading',
              component: './demo/loading.js',
            },
            {
              path: '/demo/accordion',
              component: './demo/accordion.js',
            },
            {
              path: '/demo/sunraise',
              component: './demo/sunraise.js',
            },
          ],
        },
        {
          path: '/future',
          component: './future.js',
        },

      ],

    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'umi_test',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
};
