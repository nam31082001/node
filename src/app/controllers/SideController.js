class SideControllers {

    //GET /new
    index(req, res) {
        res.render('home')
    }
    search(req, res){
        res.render('search')
    }
}
module.exports=new SideControllers