# MongoDB Cursor Iteration Error
This example demonstrates an uncommon error that can occur when working with MongoDB cursors in Node.js.  Improper iteration can lead to unexpected results and potential performance issues. The issue arises from attempting to use both `toArray()` and `forEach()` on the same cursor. This leads to concurrency issues. We only need to utilize one method of retrieving data from the cursor.

## Bug
The `bug.js` file contains code that attempts to use both `toArray()` and `forEach()` on a MongoDB cursor. This leads to unexpected behavior, with `forEach` often not completing execution as expected.