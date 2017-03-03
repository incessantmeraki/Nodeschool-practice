  var _ = require("lodash"); 
         var users = [
    { username: "tim", comment: "you are doing a great job!" },
    { username: "tim", comment: "when you have new workshoppers?" },
    { username: "cat_lover", comment: "wtf? where are all the cats gone?" },
    { username: "max", comment: "where have you been on friday? we missed you!" },
    { username: "max", comment: "You don't answer anymore - why?" },
    { username: "cat_lover", comment: "MORE cats!!!" },
    { username: "max", comment: "i really love your site" }
  ];

    var op = _.groupBy(users,item => item.username);
  var result= []; 
  _.forEach(op, function(val,key){
    result.push({username : key , comment_count : _.size(val)});
  });

  console.log(_.sortBy(result,function(item){return -item.comment_count;}));
   
