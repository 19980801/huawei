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

// 绑定监听端口
server.listen(3000,()=>{

  console.log("服务器成功");
});

// 指定静态目录
server.use(express.static("public"));
// 配置cors跨域允许访问列表
server.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  // 提高安全性，每次访问都会验证
  credentials:true
}))

// index首页轮播图图片
server.get("/bannerlist",(req,res)=>{
  // 创建数据发送给客户端
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3000/imgs/banner1.jpg",a_href:"javascript:;"},
    {id:2,img_url:"http://127.0.0.1:3000/imgs/banner2.jpg",a_href:"javascript:;"},
    {id:3,img_url:"http://127.0.0.1:3000/imgs/banner3.jpg",a_href:"javascript:;"},
    {id:4,img_url:"http://127.0.0.1:3000/imgs/banner4.jpg",a_href:"javascript:;"},
    {id:5,img_url:"http://127.0.0.1:3000/imgs/banner5.jpg",a_href:"javascript:;"},
    {id:6,img_url:"http://127.0.0.1:3000/imgs/banner6.jpg",a_href:"javascript:;"},
    {id:7,img_url:"http://127.0.0.1:3000/imgs/banner7.jpg",a_href:"javascript:;"},
    {id:8,img_url:"http://127.0.0.1:3000/imgs/banner8.jpg",a_href:"javascript:;"},
    {id:9,img_url:"http://127.0.0.1:3000/imgs/banner9.jpg",a_href:"javascript:;"},
    {id:10,img_url:"http://127.0.0.1:3000/imgs/banner10.jpg",a_href:"javascript:;"},
    {id:11,img_url:"http://127.0.0.1:3000/imgs/banner11.jpg",a_href:"javascript:;"},
    {id:12,img_url:"http://127.0.0.1:3000/imgs/banner12.jpg",a_href:"javascript:;"},
    {id:13,img_url:"http://127.0.0.1:3000/imgs/banner13.jpg",a_href:"javascript:;"},
    {id:14,img_url:"http://127.0.0.1:3000/imgs/banner14.jpg",a_href:"javascript:;"},
    {id:15,img_url:"http://127.0.0.1:3000/imgs/banner15.jpg",a_href:"javascript:;"},
    {id:16,img_url:"http://127.0.0.1:3000/imgs/banner16.jpg",a_href:"javascript:;"},
  ];
  res.send({code:1,data:rows});
});

// 登录
server.get("/login",(req,res)=>{
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  var sql="SELECT uid FROM hw_user WHERE uname=? AND upwd=md5(?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) throw err;
     if(result.length>0){
      res.send({code:1,msg:"登录成功"});
     }else{
    res.send({code:-1,msg:"登录失败"});
     }
  })
});

// 注册


