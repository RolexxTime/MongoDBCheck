use contact


// switched to db contact


db.createCollection("contactlist")
// { ok: 1 }


db.contactlist.insertMany([
  {
    "Last name": "Ben Lahmer",
    "First name": "Fares",
    "Email": "fares@gmail.com",
    "age": 26
  },
  {
    "Last name": "Kefi",
    "First name": "Seif",
    "Email": "kefi@gmail.com",
    "age": 15
  },
  {
    "Last name": "Fatnassi",
    "First name": "Sarra",
    "Email": "sarra.f@gmail.com",
    "age": 40
  },
  {
    "Last name": "Ben Yahia",
    "First name": "Rym",
    "age": 4
  },
  {
    "Last name": "Cherif",
    "First name": "Sami",
    "age": 3
  }
])
// {
//   acknowledged: true,
//   insertedIds: {
//     '0': ObjectId("654e08dfeb8ad0be8e9db584"),
//     '1': ObjectId("654e08dfeb8ad0be8e9db585"),
//     '2': ObjectId("654e08dfeb8ad0be8e9db586"),
//     '3': ObjectId("654e08dfeb8ad0be8e9db587"),
//     '4': ObjectId("654e08dfeb8ad0be8e9db588")
//   }
// }


db.contactlist.find()
{
  _id: ObjectId("654e08dfeb8ad0be8e9db584"),
  'Last name': 'Ben Lahmer',
  'First name': 'Fares',
  Email: 'fares@gmail.com',
  age: 26
}
{
  _id: ObjectId("654e08dfeb8ad0be8e9db585"),
  'Last name': 'Kefi',
  'First name': 'Seif',
  Email: 'kefi@gmail.com',
  age: 15
}
{
  _id: ObjectId("654e08dfeb8ad0be8e9db586"),
  'Last name': 'Fatnassi',
  'First name': 'Sarra',
  Email: 'sarra.f@gmail.com',
  age: 40
}
{
  _id: ObjectId("654e08dfeb8ad0be8e9db587"),
  'Last name': 'Ben Yahia',
  'First name': 'Rym',
  age: 4
}
{
  _id: ObjectId("654e08dfeb8ad0be8e9db588"),
  'Last name': 'Cherif',
  'First name': 'Sami',
  age: 3
}


db.contactlist.findOne({"_id": ObjectId("654e08dfeb8ad0be8e9db587")})
{
  _id: ObjectId("654e08dfeb8ad0be8e9db587"),
  'Last name': 'Ben Yahia',
  'First name': 'Rym',
  age: 4
}


db.contactlist.find({"age": {$gt: 18}})
{
  _id: ObjectId("654e08dfeb8ad0be8e9db584"),
  'Last name': 'Ben Lahmer',
  'First name': 'Fares',
  Email: 'fares@gmail.com',
  age: 26
}
{
  _id: ObjectId("654e08dfeb8ad0be8e9db586"),
  'Last name': 'Fatnassi',
  'First name': 'Sarra',
  Email: 'sarra.f@gmail.com',
  age: 40
}


db.contactlist.find({"age": {$gt: 18}, "First name": /ah/})


db.contactlist.updateOne({"First name": "Seif"}, {$set: {"First name": "Anis"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }


db.contactlist.deleteMany({"age": {$lt: 5}})
// {
//   acknowledged: true,
//   deletedCount: 2
// }


db.contactlist.find()
{
  _id: ObjectId("654e08dfeb8ad0be8e9db584"),
  'Last name': 'Ben Lahmer',
  'First name': 'Fares',
  Email: 'fares@gmail.com',
  age: 26
}
{
  _id: ObjectId("654e08dfeb8ad0be8e9db585"),
  'Last name': 'Kefi',
  'First name': 'Anis',
  Email: 'kefi@gmail.com',
  age: 15
}
{
  _id: ObjectId("654e08dfeb8ad0be8e9db586"),
  'Last name': 'Fatnassi',
  'First name': 'Sarra',
  Email: 'sarra.f@gmail.com',
  age: 40
}


