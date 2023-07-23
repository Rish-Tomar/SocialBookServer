import multer from 'multer'

const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/assets")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname+"_"+Date.now())
    }
})
const upload= multer({storage})

export default upload