```javascript
const query = {
  field: { $regex: /pattern/i },
};

const options = {
  limit: 10,
};

const cursor = db.collection('myCollection').find(query, options);

// Incorrect way to iterate
cursor.toArray((err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

cursor.forEach((doc) => {
  console.log(doc);
});
```