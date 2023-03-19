import mongoose from "mongoose";

mongoose.connect(
	"mongodb+srv://eduardoarakaki:Yps5JAXGXgVOEeuT@webcircle.mq3gpee.mongodb.net/libraryAPI"
);

const db = mongoose.connection;

export default db;
