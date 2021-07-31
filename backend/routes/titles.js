let Title = require('../models/title.model');
const router = require('express').Router();

router.route('/').get((req, res) => {
    Title.find()
    .then(titles => res.json(titles))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const count = req.body.count;

    const newTitle = new Title({title, count});
    
    newTitle.save()
    .then(() => res.json('Title added!'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').get((req, res) => {
    Title.findById(req.params.id)
    .then(title => res.json(title))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) => {
    Title.findByIdAndDelete(req.params.id)
    .then(title => res.json("Title deleted!"))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
    Title.findById(req.params.id)
    .then(title => {
        title.title = req.body.title;
        title.count = Number(req.body.count);

        title.save()
        .then(() => res.json('Title updated!'))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error ' + err))
});

// router.route('/update/:title').post((req, res) => {
//     Title.findOne(req.params.title)
//     .then(title => {
//         title.title = req.body.title;
//         title.count = Number(req.body.count);

//         title.save()
//         .then(() => res.json('Title updated!'))
//         .catch(err => res.status(400).json('Error ' + err));
//     })
//     .catch(err => res.status(400).json('Error ' + err))
// });

module.exports = router;