var ExpressCassandra = require('express-cassandra');
var models = ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        protocolOptions: { port: 9042 },
        keyspace: 'listing_data',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});

var MyModel = models.loadSchema('listing', {
    fields:{
        id: "int",
        image_url: "text",
        address: "text",
        zipcode: "text",
        city: "text",
        state: "text",
        views: "int",
      },
      key: ["id"]
});

MyModel.syncDB(function(err, result) {
    if (err){
        console.log('ERROR with Schema Creation: ', err);
    } else {
        console.log('Successfully created Schema: ', result);
    }
});

//COPY listing_data."listing"(id,image_url,address,zipcode,city,state,views) FROM 'MOCKDATA.CSV';
