

class NewControllers {

    //GET /
    index(req, res) {
        res.render('new')
    }
    show(req, res){
        res.send("NewsShow")
    }
}
module.exports=new NewControllers