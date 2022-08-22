const { validationResult } = require("express-validator");

exports.Home = (req, res) => {
    res.send("<img src='https://media.istockphoto.com/vectors/thank-you-for-visiting-us-quote-vector-id1298236426?k=20&m=1298236426&s=170667a&w=0&h=bBt4_TSAVgiicfeFXiyMW-aTlijsf64hghQXkwXb3sM='/>");
};
