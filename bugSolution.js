```javascript
const query = {
  field: { $regex: /pattern/i },
};

const options = {
  limit: 10,
};

const cursor = db.collection('myCollection').find(query, options);

//Correct approach
cursor.toArray((err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});
//Alternative approach
/*cursor.forEach((doc) => {
  console.log(doc);
});*/
```