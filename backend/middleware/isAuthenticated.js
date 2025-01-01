const jwt = require('jsonwebtoken');
const isAuthenticated = async(req, res,next)=>{
    try{
        console.log(req.cookies);
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:"User not authenticated."})

        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

        console.log(decode);
        if(!decode){
            return res.status(401).json({message:"Invalid token"});

        }
        //tokenData get in decode
        req.id = decode.userId;
        next();
        
        

    }catch(error){
         //console.log(error);
        console.log('Authentication error:', error.message || error);

        return res.status(500).json({ message: "Server error" });
        
    }
};
module.exports = isAuthenticated;

const req = {
    id:" ",
}
req.id = "abababa"
