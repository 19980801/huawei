const express=require("express");
const router=express.Router();


router.get("/versionlist",(req,res)=>{
    var fid=req.query.fid
    var sql="select * from xm_laptop_version where fid=?";
    pool.query(sql,[fid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
router.get("/colorlist",(req,res)=>{
    var fid=req.query.fid
    var sql="select color from hw_laptop where lid=? and theversion=(select theversion from hw_laptop_version where fid=? LIMIT 1)";
    pool.query(sql,[fid,fid],(err,result)=>{
        if(err) throw err
        res.send(result)
    })
})
router.get("/piclist",(req,res)=>{
    var fid=req.query.fid;
    var sql="select img , p_no_id from xm_laptop_pic where laptop_id=? and color=(select color from xm_laptop where fid=? and theversion=(select theversion from xm_laptop_version where fid=? LIMIT 1) limit 1)";
    pool.query(sql,[fid,fid,fid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
router.get("/detailsinfo",(req,res)=>{
    var fid=req.query.fid
    var sql="select * from xm_laptop_info where fid=?"
    pool.query(sql,[fid],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
router.get("/imgClickList",(req,res)=>{
    var fid=req.query.fid
    var color=req.query.color
    var sql="select img,p_no_id from xm_laptop_pic where laptop_id=? and color=?"
    pool.query(sql,[fid,color],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
router.get("/versionClickList",(req,res)=>{
    var fid=req.query.fid;
    var theversion=req.query.theversion
    var sql="select color from xm_laptop where fid=? and theversion=?"
    pool.query(sql,[fid,theversion],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

module.exports=router;