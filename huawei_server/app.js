// 引入第三方模块
const mysql=require("mysql");
const express=require("express");
// 引入跨域模块
const cors=require("cors");
// 创建连接池
const pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"hw"
})
// 创建express对象
var server=express();
// 配置cors跨域允许访问列表
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  // 提高安全性，每次访问都会验证
  credentials:true
}))

// 绑定监听端口
server.listen(3000);

// 指定静态目录
server.use(express.static("public"));

// index首页轮播图图片
server.get("/bannerlist",(req,res)=>{
  // 创建数据发送给客户端
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/imgs/banner1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/imgs/banner2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/imgs/banner3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/imgs/banner4.jpg"},
    {id:5,img_url:"http://127.0.0.1:3000/imgs/banner5.jpg"},
    {id:6,img_url:"http://127.0.0.1:3000/imgs/banner6.jpg"},
    {id:7,img_url:"http://127.0.0.1:3000/imgs/banner7.jpg"},
    {id:8,img_url:"http://127.0.0.1:3000/imgs/banner8.jpg"},
  ];
  res.send({code:1,data:rows});
});

// 

