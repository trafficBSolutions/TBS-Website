const Application = require('../models/user');

async function removeDuplicates() {
    try {
        await Application.deleteMany({resume: ""});
      // Step 1: Identify duplicate documents
      const duplicateDocs = await Application.aggregate([
        {
          $group: {
            _id: {
              key: {
                first: "$first",
                last: "$last",
                email: "$email",
                phone: "$phone",
                resume: "$resume",
                cover: "$cover",
                message: "$message"
              }
            },
            count: { $sum: 1 },
            ids: { $push: "$_id" }
          }
        },
        {
          $match: {
            count: { $gt: 1 } // Filter groups with more than one document
          }
        }
      ]);
  
      // Step 2 & 3: Determine which duplicates to keep and remove the rest
      for (const doc of duplicateDocs) {
        // Keep the first document and remove the rest
        const [toKeep, ...toRemove] = doc.ids;
        await Application.deleteMany({ _id: { $in: toRemove } });
      }
  
      console.log("Duplicates removed successfully.");
    } catch (error) {
      console.error('Error while removing duplicates:', error);
    }
  }

module.exports = removeDuplicates;