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
          title: '57的个人站点',
          component: './index.js',
          Routes: ['./src/routes/setTitle.js'],
        },
        {
          path: '/contact',
          title: '与我联系',
          component: './contact.js',
          Routes: ['./src/routes/setTitle.js'],
        },
        {
          path: '/demo',
          exact: false,
          //如果使用配置式路由routes,则必须有一个公共的组件样式
          component: './demo/demo_layout.js',
          routes: [
            {
              path: '/demo/total',
              title: '部分demo合辑',
              component: './demo/index.js',
              Routes: ['./src/routes/setTitle.js', './src/routes/privateRoute.js'],
            },
            {
              path: '/demo/js_manager',
              title: '原生js做管理系统',
              component: './demo/js_manager.js',
              Routes: ['./src/routes/setTitle.js', './src/routes/privateRoute.js'],
            },
            {
              path: '/demo/loading',
              title: '纯css3做loading特效',
              component: './demo/loading.js',
              Routes: ['./src/routes/setTitle.js', './src/routes/privateRoute.js'],
            },
            {
              path: '/demo/accordion',
              title: 'css3手风琴效果',
              component: './demo/accordion.js',
              Routes: ['./src/routes/setTitle.js', './src/routes/privateRoute.js'],
            },
            {
              path: '/demo/sunraise',
              title: '日升日落效果',
              component: './demo/sunraise.js',
              Routes: ['./src/routes/setTitle.js', './src/routes/privateRoute.js'],
            },
            {
              path: '/demo/ball',
              title: '重力加速场',
              component: './demo/ball.js',
              Routes: ['./src/routes/setTitle.js', './src/routes/privateRoute.js'],
            },
            {
              path: '/demo/chat_robot',
              title: 'jq版仿微信聊天机器人',
              component: './demo/chat_robot.js',
              Routes: ['./src/routes/setTitle.js', './src/routes/privateRoute.js'],
            },
          ],
        },
        {
          path: '/future',
          title: '致未来',
          component: './future.js',
          Routes: ['./src/routes/setTitle.js'],
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
