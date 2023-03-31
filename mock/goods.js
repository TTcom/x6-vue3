
let list = [
    {name:"陕西新鲜红富士",price:36,img:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2271279753/O1CN015jXnAT2LuvZR2fQlc_!!2271279753.jpg_430x430q90.jpg"},
    {name:"吊带连衣裙",price:139,img:"https://gd4.alicdn.com/imgextra/i3/1051127998/O1CN01EwBlck28x8T89g3d7_!!1051127998.jpg_400x400.jpg"}
]
const apis= [

    // 获取商品列表哦
    {
      url: '/mock/good/list',
      method: 'post',
      timeout:100,  //设置响应时间
      response:() => {
        return {
          code: 200,
          message: 'ok',
          data: list,
        };
      },
    },
    //提交订单
    {
      url: '/mock/submit/order',
      method: 'post',
      timeout:700,  //设置响应时间
      response:() => {
        return {
          code: 200,
          message: 'ok',
          data: null,
        };
      },
    },
  ];
  
  export default apis;
  