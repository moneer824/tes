fetch('https://www.omdbapi.com/?s=spider&apikey=39d0e0e2')
    .then(function (res) {
        res.json().then(function (res) {
            show(res.Search)
        })
    })
    .catch(function (err) {
        console.log(err)
    })

function show(info) {
    console.log(info)
}