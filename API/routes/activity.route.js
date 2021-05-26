const express = require('express');
const app = express();
const activityRoutes = express.Router();

// Require Activity model in our routes module
let Activity = require('../models/Activity');

// Defined store route
activityRoutes.route('/add').post(function (req, res) {
  let activity = new Activity(req.body);
  activity.save()
    .then(activity => {
      res.status(200).json({ 'Activity': 'Activity has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
activityRoutes.route('/').get(function (req, res) {
  Activity.find(function (err, activities) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(activities);
    }
  });
});

// Defined edit route
activityRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Activity.findById(id, function (err, activity) {
    res.json(activity);
  });
});

//  Defined update route
activityRoutes.route('/update/:id').post(function (req, res) {
  Activity.findById(req.params.id, function (err, activity) {
    if (!activity)
      res.status(404).send("Record not found");
    else {
      activity.ActivityName = req.body.ActivityName;
      activity.ActivityBio = req.body.ActivityBio;
      activity.ActivityNoParticipants = req.body.ActivityNoParticipants;
      activity.ActivitySpace = req.body.ActivitySpace;
      activity.ActivityReport = req.body.ActivityReport;
      activity.save().then(activity => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
activityRoutes.route('/delete/:id').get(function (req, res) {
  Activity.findByIdAndRemove({ _id: req.params.id }, function (err, activity) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = activityRoutes;
