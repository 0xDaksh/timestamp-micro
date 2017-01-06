var express = require('express'),
    moment = require('moment'),
    app = express();
    
    app.get('/', (req, res)=>{
        res.send('Use the TimeStap! Shakira!');
    });
app.get('/:timestamp', (req,res) => {
  var time = moment(req.params.timestamp, 'MMMM DD, YYYY', true);
  if (!time.isValid())
    time = moment.unix(req.params.timestamp);
  
  if (!time.isValid()) {
    res.json({
      'FORHuman': null,
      'unix': null
    });
  }
  
  res.json({
    'FORHuman': time.format('MMMM DD, YYYY'),
    'unix': time.format('X')
  });
});
app.listen(process.env.PORT);