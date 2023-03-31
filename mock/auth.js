
// const token= {
//   token: '__TEMP_TOKEN__'
// };

const apis= [
 // 获取用户信息(请求头携带token)
  {
    url: '/mock/getUserInfo',
    method: 'get',
    response:() => {
      return {
        code: 200,
        message: 'ok',
        data: {
          userId: '0',
          userName: 'Soybean',
          userPhone: '15170283876',
          userRole: 'super',
        },
      };
    },
  }
];

export default apis;
