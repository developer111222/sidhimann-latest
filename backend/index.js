const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();

const dbconnect=require('./database/db');
const userRoute=require('./route/userroute');
const bannerroute=require('./route/bannerroute');
const blogroute=require('./route/blogroute');



app.use(express.json());

//-------------cors configuration-----------

app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization']

}

//-------------database connection-----------

dbconnect();


//-------------api routes-----------
app.use('/api',userRoute);
app.use('/api',bannerroute);
app.use('/api',blogroute);


//------------------start server------------------

const PORT=process.env.PORT 

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

//------------------end server------------------