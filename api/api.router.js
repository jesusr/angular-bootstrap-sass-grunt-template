var router = express.Router();
router
    .use(function(req, res, next) {
        console.log('Something is happening.');
    });