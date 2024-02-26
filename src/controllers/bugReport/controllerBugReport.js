class ReportBug{
    report(req, res){
        const base64Image = req.body.image;
        res.status(200).send(base64Image)
    }
}

module.exports = ReportBug;