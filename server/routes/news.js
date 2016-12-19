var express = require('express');
var router = express.Router();

var saveMynews = require('../models/save_news');

/* GET users listing. */
router.post('/save', function(req, res)
{
      var saveNews = new saveMynews
      ({
      author : req.body.author,
      title : req.body.title,
      description : req.body.description,
      url : req.body.url,
      urlToImage : req.body.urlToImage,
      publishedAt : req.body.publishedAt,
      Comment : req.body.Comment
    });

    //save values in database
     saveNews.save(function (err) {
     if (err)
     {
       res.send(err);
     }
    else {
      res.send(" News saved ");
    }
  }); //end of save function
}); //end of post route save

//module.exports = router;

//To delete the News
router.delete('/delete',function(req,res)
{
   if(req.body)
   {
     var usertitle=req.body.title;
     saveMynews.remove({
       title:usertitle},function(err)
     {
       if(err) {
         res.send(err);
       }
       else  {
       res.send("Deleted");
       }
     });
   }

});

router.put('/update',function(req,res,next)
{

    var mytitle = req.body.title;
    var myComment = req.body.Comment;
    saveMynews.update({'title':mytitle},{$set:{'Comment':myComment}},function(err)
    {
     if(err)
      {
        res.send(err);
     }
     else
      {

         res.send("find title to update"+mytitle+' '+myComment);
      }
  });

});

router.get('/viewnews', function(req, res) {
      saveMynews.find({},function(err, allnews)
      {
       if(err) throw err;
       else
       {
          res.send(allnews);
       }
      });
});

module.exports = router;
