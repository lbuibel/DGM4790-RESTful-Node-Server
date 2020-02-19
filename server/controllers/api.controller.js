const Album = require('../models/album')


// ADDING INDIVIDUAL PRODUCT
export const postAddAlbum = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Album({
      title: title,
      price: price,
      description: description,
    });
    product
    .save()
    .then(result => {
        console.log('Created Album')
        res.send('Created Album! Check database')
    })
    .catch(err =>{
        console.log(err)
    })
}


// RETURNING ALL ALBUMS
export const getAllAlbums = (req, res, next) => {
    Album.find()
        .then(albums => {
            res.json(albums)
            console.log(albums)
        })
        .catch(err => {
            console.log(err)
        })
}
