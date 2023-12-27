import  express  from "express";
import mongoose from "mongoose";
import Messages from './dbmessages.js';
import Pusher from "pusher";
import cors from "cors";

// app config
const app=express();
const port= process.env.PORT || 9000

        // pusher is used for real time experience
const pusher = new Pusher({
    appId: "1721786",
    key: "e494c75932e29f5f8561",
    secret: "a2137ed61aa95ad0e935",
    cluster: "ap2",
    useTLS: true
  });

// middlewares
app.use(express.json());
app.use(cors(
    {
        origin: ['https://whatsapp-mern-frontend-nine.vercel.app/'],
        methods: ["POST", "GET"], 
        credentials: true
    }
));

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });

// const connection_url='mongodb+srv://bhadauriasinghyuvraj12:HhjtemIIYw8RD1Lj@cluster0.wg0qa3x.mongodb.net/?retryWrites=true&w=majority'
// const connection_url='mongodb+srv://bhadauriasinghyuvraj12:HhjtemIIYw8RD1Lj@cluster0.wg0qa3x.mongodb.net/'
const connection_url = 'mongodb+srv://bhadauriasinghyuvraj12:HhjtemIIYw8RD1Lj@cluster0.wg0qa3x.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(connection_url)

const db = mongoose.connection;

db.once("open", () =>{
    console.log('Db is connected')

    const msgCollection = db.collection('messagecontents');
    const changeStream = msgCollection.watch();

    changeStream.on('change',(change) =>{
        console.log(change);

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('message', 'inserted', {
                name: messageDetails.name, 
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Pusher');
        }
    })
});

// api routes
app.get('/', (req,res) => {
    res.json('hello');
} 
// res.status(200).send('hello world')
);

app.get('/messages/sync', async (req, res) => {
    try {
        const data = await Messages.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/messages/new', async (req,res) => {
    try {
        const dbMessage = req.body;
        const data = await Messages.create(dbMessage);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
})

// listener
app.listen(port, () => console.log(`Listening to localhost ${port}`));


