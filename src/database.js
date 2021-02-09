const mongoose = require('mongoose');

mongoose
    .connect(`mongodb://localhost/companydb`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(db => console.log(`DB is connected as ${db.connection.name} `))
    .catch(err => console.error(err));
