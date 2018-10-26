module.exports = {

    create: (req, res, next) => {
        const dbInstance = req.app.get("db");

        const {  name, description, price, imageurl  } = req.body; //destructure body

        dbInstance.create_product([    name, description, price, imageurl   ]) //
                    .then(() => res.sendStatus(200))
                    .catch(err => {
                        res.status(500).send({errorMessage: "Engineers Internal Server Error!"});
                    console.log(err);
                    })
    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get("db");

        const {   params   } = req;  //destructure req returns params


        dbInstance.read_product(params.id)
            .then( product => res.status(200).send(product) )
            .catch(err => {
                res.status(500).send({errorMessage: "Internal Server Error...The one that got away!"});
                console.log(err);
            });
    },

    getAll:(req, res, next) => {
        const dbInstance = req.app.get("db");
        dbInstance.read_products()
                    .then(products => res.status(200).send(products))
                    .catch(err => {
                        res.status(500).send({errorMessage: "You couldn't get it all"})
                        console.log(err);
                    });
    },

    update:(req, res, next) => {
        const dbInstance = req.app.get("db");

        const {   params, query   } = req; //destructure req returns params and query

        dbInstance.update_product([   params.id, query.desc  ])
                    .then( () => res.sendStatus(200))
                    .catch(err => {
                        res.status(500).send({errorMessage: "Server Error, can't update"});
                        console.log(err)
                    });
    },

    delete:(req, res, next) => {
        const dbInstance = req.app.get("db");
        
        const {  params  } = req;

        dbInstance.delete_product(     params.id    )
                    .then( () => res.sendStatus(200)
                    .catch(err => {
                        res.status(500).send({errorMessage: "Server Error, can't delete"});
                        console.log(err)
                    })
                    )
    }
}