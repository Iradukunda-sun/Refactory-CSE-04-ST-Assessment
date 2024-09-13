const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    gender: {
        type: String
    },
    dateOfBirth: {
        type: Date,
        default: Date.now 
    },
    nationality: {
        type:   String},
    phoneNumber: {
        type:   String},
    email: {
        type:  String
    },
    poBox: {type: String},
    emergencyPhone: {type:
        String},
    passportNumber: {type:
        String},
    visaDocument: {type:
        String},
    departureCity: {
        type:
        String},
    destinationCity: {
        type:
        String}
  });
  module.exports = mongoose.model('Flight', flightSchema);