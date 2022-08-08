import Mock from "mockjs";
export default [
  {
    //http://mockjs.com/examples.html
    url: "/mock/api/login",
    method: "post",
    timeout: 500,
    // statusCode: 500,
    response: ({ body }) => {
      return {
        code: 200,
        success: true,
        message: "ok",
        data: {
          token: Mock.Random.string("lower", 200),
          userInfo: {
            name: "jack",
            password: "redballoon",
            content: "xxx",
            age: Mock.Random.natural(18, 30),
          },
        },
      };
    },
  },
];
